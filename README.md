ld(textArea);
                showToast('تم النسخ بنجاح!', 'success');
            }
        }

        // عرض الشاشة
        function showScreen(screenId) {
            // إخفاء جميع الشاشات
            document.querySelectorAll('.screen').forEach(screen => {
                screen.classList.remove('active');
            });
            
            // عرض الشاشة المطلوبة
            document.getElementById(screenId).classList.add('active');
        }

        // عرض النافذة المنبثقة
        function showModal(modalId) {
            document.getElementById(modalId).classList.add('active');
        }

        // إخفاء النافذة المنبثقة
        function hideModal(modalId) {
            document.getElementById(modalId).classList.remove('active');
        }

        // عرض شاشة التحميل
        function showLoading(text = 'جاري التحميل...') {
            document.getElementById('loadingText').textContent = text;
            document.getElementById('loadingOverlay').classList.add('active');
        }

        // إخفاء شاشة التحميل
        function hideLoading() {
            document.getElementById('loadingOverlay').classList.remove('active');
        }

        // عرض رسالة التنبيه
        function showToast(message, type = 'info') {
            const toast = document.createElement('div');
            toast.className = `toast ${type}`;
            toast.innerHTML = `
                <i class="fas ${getToastIcon(type)}"></i>
                <span>${message}</span>
            `;
            
            document.getElementById('toastContainer').appendChild(toast);
            
            setTimeout(() => {
                toast.style.animation = 'toastSlideOut 0.3s ease';
                setTimeout(() => {
                    toast.remove();
                }, 300);
            }, 3000);
        }

        // أيقونة رسالة التنبيه
        function getToastIcon(type) {
            switch (type) {
                case 'success': return 'fa-check-circle';
                case 'error': return 'fa-exclamation-circle';
                case 'warning': return 'fa-exclamation-triangle';
                default: return 'fa-info-circle';
            }
        }

        // تسجيل الخروج
        function logout() {
            localStorage.clear();
            currentWallet = null;
            currentBalance = '0.00';
            showScreen('welcomeScreen');
            showToast('تم تسجيل الخروج بنجاح', 'success');
        }

        // التحقق من وجود محفظة محفوظة
        function checkSavedWallet() {
            const savedPrivateKey = localStorage.getItem('walletPrivateKey');
            if (savedPrivateKey) {
                try {
                    currentWallet = new ethers.Wallet(savedPrivateKey);
                    showScreen('walletScreen');
                    loadWalletData();
                } catch (error) {
                    console.error('Error loading saved wallet:', error);
                    localStorage.clear();
                }
            }
        }

        // تهيئة التطبيق
        async function initApp() {
            try {
                // تهيئة المزود
                await initProvider();
                
                // جلب سعر الإيثريوم
                await fetchETHPrice();
                
                // التحقق من وجود محفظة محفوظة
                checkSavedWallet();
                
                console.log('App initialized successfully');
            } catch (error) {
                console.error('Error initializing app:', error);
                showToast('حدث خطأ أثناء تهيئة التطبيق', 'error');
            }
        }

        // أحداث DOM
        document.addEventListener('DOMContentLoaded', function() {
            // تهيئة التطبيق
            initApp();

            // أزرار الشاشة الرئيسية
            document.getElementById('importWalletBtn').addEventListener('click', () => {
                showScreen('importScreen');
            });

            document.getElementById('createWalletBtn').addEventListener('click', () => {
                showScreen('createScreen');
                createNewWallet();
            });

            // أزرار العودة
            document.getElementById('backToWelcomeBtn').addEventListener('click', () => {
                showScreen('welcomeScreen');
            });

            document.getElementById('backToWelcomeFromCreateBtn').addEventListener('click', () => {
                showScreen('welcomeScreen');
            });

            // زر استيراد المحفظة
            document.getElementById('importBtn').addEventListener('click', () => {
                const mnemonic = document.getElementById('mnemonicInput').value.trim();
                if (mnemonic) {
                    importWallet(mnemonic);
                } else {
                    showToast('يرجى إدخال عبارة الاسترجاع', 'warning');
                }
            });

            // زر المتابعة للمحفظة
            document.getElementById('continueToWalletBtn').addEventListener('click', () => {
                showScreen('walletScreen');
                loadWalletData();
            });

            // أزرار النسخ
            document.getElementById('copyAddressBtn').addEventListener('click', () => {
                const address = document.getElementById('newWalletAddress').textContent;
                copyToClipboard(address);
            });

            document.getElementById('copyMnemonicBtn').addEventListener('click', () => {
                const mnemonic = document.getElementById('newWalletMnemonic').textContent;
                copyToClipboard(mnemonic);
            });

            document.getElementById('copyCurrentAddressBtn').addEventListener('click', () => {
                if (currentWallet) {
                    copyToClipboard(currentWallet.address);
                }
            });

            document.getElementById('copyReceiveAddressBtn').addEventListener('click', () => {
                if (currentWallet) {
                    copyToClipboard(currentWallet.address);
                }
            });

            // زر تحديث الرصيد
            document.getElementById('refreshBalanceBtn').addEventListener('click', () => {
                updateBalance();
                showToast('جاري تحديث الرصيد...', 'info');
            });

            // أزرار الإجراءات السريعة
            document.getElementById('sendBtn').addEventListener('click', () => {
                showModal('sendModal');
            });

            document.getElementById('receiveBtn').addEventListener('click', () => {
                showModal('receiveModal');
                // إعادة إنشاء QR code عند فتح نافذة الاستقبال
                if (currentWallet) {
                    generateQRCode(currentWallet.address);
                }
            });

            document.getElementById('swapBtn').addEventListener('click', () => {
                showToast('ميزة التبديل قريباً!', 'info');
            });

            document.getElementById('buyBtn').addEventListener('click', () => {
                showToast('ميزة الشراء قريباً!', 'info');
            });

            // زر الإعدادات
            document.getElementById('settingsBtn').addEventListener('click', () => {
                showModal('settingsModal');
            });

            // أزرار إغلاق النوافذ المنبثقة
            document.getElementById('closeSendModal').addEventListener('click', () => {
                hideModal('sendModal');
            });

            document.getElementById('closeReceiveModal').addEventListener('click', () => {
                hideModal('receiveModal');
            });

            document.getElementById('closeSettingsModal').addEventListener('click', () => {
                hideModal('settingsModal');
            });

            // أزرار الإعدادات
            document.getElementById('showPrivateKeyBtn').addEventListener('click', () => {
                if (currentWallet) {
                    const privateKey = currentWallet.privateKey;
                    const privateKeyMessage = `🔐 المفتاح الخاص:\n\n${privateKey}\n\n⚠️ تحذير: لا تشارك هذا المفتاح مع أي شخص!`;
                    if (confirm(privateKeyMessage)) {
                        copyToClipboard(privateKey);
                    }
                }
            });

            document.getElementById('showMnemonicBtn').addEventListener('click', () => {
                const mnemonic = localStorage.getItem('walletMnemonic');
                if (mnemonic) {
                    const mnemonicMessage = `🌱 عبارة الاسترجاع:\n\n${mnemonic}\n\n⚠️ تحذير: لا تشارك هذه العبارة مع أي شخص!`;
                    if (confirm(mnemonicMessage)) {
                        copyToClipboard(mnemonic);
                    }
                }
            });

            document.getElementById('logoutBtn').addEventListener('click', () => {
                if (confirm('هل أنت متأكد من تسجيل الخروج؟ سيتم حذف جميع بيانات المحفظة من هذا الجهاز.')) {
                    logout();
                }
            });

            // إغلاق النوافذ المنبثقة عند النقر خارجها
            document.querySelectorAll('.modal').forEach(modal => {
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) {
                        modal.classList.remove('active');
                    }
                });
            });

            // خيارات الغاز
            document.querySelectorAll('.gas-option').forEach(option => {
                option.addEventListener('click', () => {
                    document.querySelectorAll('.gas-option').forEach(opt => opt.classList.remove('active'));
                    option.classList.add('active');
                });
            });

            // نموذج الإرسال
            document.getElementById('sendForm').addEventListener('submit', (e) => {
                e.preventDefault();
                showToast('ميزة الإرسال قريباً!', 'info');
            });
        });
    </script>
</body>
</html>
hhtmlttmlthhg
