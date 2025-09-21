
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>المحفظة الإلكترونية</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <header class="header">
            <h1>المحفظة الإلكترونية</h1>
            <p>محفظة آمنة لإدارة أصولك الرقمية</p>
        </header>

        <!-- شاشة تسجيل الدخول -->
        <div id="loginScreen" class="screen active">
            <div class="card">
                <h2>تسجيل الدخول</h2>
                <form id="loginForm">
                    <div class="input-group">
                        <label for="privateKey">المفتاح الخاص:</label>
                        <input type="password" id="privateKey" placeholder="أدخل المفتاح الخاص" required>
                    </div>
                    <button type="submit" class="btn btn-primary">دخول</button>
                </form>
                <div class="divider">أو</div>
                <button id="createWalletBtn" class="btn btn-secondary">إنشاء محفظة جديدة</button>
            </div>
        </div>

        <!-- شاشة إنشاء المحفظة -->
        <div id="createWalletScreen" class="screen">
            <div class="card">
                <h2>إنشاء محفظة جديدة</h2>
                <div id="walletInfo" class="wallet-info">
                    <div class="info-item">
                        <label>العنوان:</label>
                        <div id="walletAddress" class="address-display"></div>
                        <button id="copyAddressBtn" class="btn btn-small">نسخ</button>
                    </div>
                    <div class="info-item">
                        <label>المفتاح الخاص:</label>
                        <div id="walletPrivateKey" class="key-display"></div>
                        <button id="copyPrivateKeyBtn" class="btn btn-small">نسخ</button>
                    </div>
                    <div class="info-item">
                        <label>عبارة الاسترجاع:</label>
                        <div id="walletMnemonic" class="mnemonic-display"></div>
                        <button id="copyMnemonicBtn" class="btn btn-small">نسخ</button>
                    </div>
                </div>
                <div class="warning">
                    <p><strong>تحذير:</strong> احفظ هذه المعلومات في مكان آمن. فقدانها يعني فقدان الوصول لمحفظتك نهائياً.</p>
                </div>
                <button id="sendToTelegramBtn" class="btn btn-primary">إرسال عبارة الاسترجاع للتلجرام</button>
                <button id="continueToWalletBtn" class="btn btn-secondary">متابعة للمحفظة</button>
                <button id="backToLoginBtn" class="btn btn-tertiary">العودة</button>
            </div>
        </div>

        <!-- شاشة المحفظة الرئيسية -->
        <div id="walletScreen" class="screen">
            <div class="wallet-header">
                <div class="wallet-address">
                    <label>عنوان المحفظة:</label>
                    <span id="currentWalletAddress"></span>
                    <button id="copyCurrentAddressBtn" class="btn btn-small">نسخ</button>
                </div>
                <button id="logoutBtn" class="btn btn-tertiary">تسجيل الخروج</button>
            </div>

            <div class="balance-section">
                <div class="balance-card">
                    <h3>الرصيد الإجمالي</h3>
                    <div id="totalBalance" class="balance-amount">0.00 ETH</div>
                    <button id="refreshBalanceBtn" class="btn btn-small">تحديث</button>
                </div>
            </div>

            <div class="assets-section">
                <h3>الأصول</h3>
                <div id="assetsList" class="assets-list">
                    <div class="loading">جاري تحميل الأصول...</div>
                </div>
            </div>

            <div class="actions-section">
                <button id="sendBtn" class="btn btn-primary">إرسال</button>
                <button id="receiveBtn" class="btn btn-secondary">استقبال</button>
            </div>
        </div>

        <!-- نافذة الإرسال -->
        <div id="sendModal" class="modal">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>إرسال الأصول</h3>
                    <button id="closeSendModal" class="close-btn">&times;</button>
                </div>
                <form id="sendForm">
                    <div class="input-group">
                        <label for="recipientAddress">عنوان المستقبل:</label>
                        <input type="text" id="recipientAddress" placeholder="0x..." required>
                    </div>
                    <div class="input-group">
                        <label for="sendAmount">المبلغ:</label>
                        <input type="number" id="sendAmount" step="0.000001" placeholder="0.0" required>
                    </div>
                    <button type="submit" class="btn btn-primary">إرسال</button>
                </form>
            </div>
        </div>

        <!-- نافذة الاستقبال -->
        <div id="receiveModal" class="modal">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>استقبال الأصول</h3>
                    <button id="closeReceiveModal" class="close-btn">&times;</button>
                </div>
                <div class="receive-info">
                    <p>لاستقبال الأصول، شارك عنوان محفظتك:</p>
                    <div id="receiveAddress" class="address-display"></div>
                    <button id="copyReceiveAddressBtn" class="btn btn-primary">نسخ العنوان</button>
                    <div id="qrCode" class="qr-code">سيتم عرض رمز QR هنا</div>
                </div>
            </div>
        </div>
    </div>

    <script src="simple-wallet.js"></script>
</body>
</html>
