<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SafeWallet - محفظة آمنة</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <div class="app-container">
        <!-- شاشة الترحيب -->
        <div id="welcomeScreen" class="screen active">
            <div class="welcome-container">
                <div class="logo-section">
                    <div class="logo">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <h1>SafeWallet</h1>
                    <p class="tagline">محفظتك الآمنة للعملات الرقمية</p>
                </div>
                
                <div class="welcome-actions">
                    <button id="importWalletBtn" class="btn btn-primary">
                        <i class="fas fa-download"></i>
                        استيراد محفظة موجودة
                    </button>
                    <button id="createWalletBtn" class="btn btn-secondary">
                        <i class="fas fa-plus"></i>
                        إنشاء محفظة جديدة
                    </button>
                </div>
                
                <div class="security-note">
                    <i class="fas fa-lock"></i>
                    <span>محفظتك آمنة ومشفرة بالكامل</span>
                </div>
            </div>
        </div>

        <!-- شاشة استيراد المحفظة -->
        <div id="importScreen" class="screen">
            <div class="import-container">
                <div class="screen-header">
                    <button id="backToWelcomeBtn" class="back-btn">
                        <i class="fas fa-arrow-right"></i>
                    </button>
                    <h2>استيراد محفظة</h2>
                </div>
                
                <div class="import-form">
                    <div class="form-section">
                        <label for="mnemonicInput">عبارة الاسترجاع</label>
                        <textarea 
                            id="mnemonicInput" 
                            placeholder="أدخل عبارة الاسترجاع المكونة من 12 كلمة..."
                            rows="4"
                        ></textarea>
                        <div class="input-hint">
                            <i class="fas fa-info-circle"></i>
                            أدخل الكلمات مفصولة بمسافات
                        </div>
                    </div>
                    
                    <button id="importBtn" class="btn btn-primary btn-full">
                        <i class="fas fa-key"></i>
                        استيراد المحفظة
                    </button>
                </div>
                
                <div class="security-warning">
                    <i class="fas fa-exclamation-triangle"></i>
                    <div>
                        <strong>تحذير أمني:</strong>
                        <p>تأكد من أنك في مكان آمن وأن لا أحد يراقب شاشتك</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- شاشة إنشاء المحفظة -->
        <div id="createScreen" class="screen">
            <div class="create-container">
                <div class="screen-header">
                    <button id="backToWelcomeFromCreateBtn" class="back-btn">
                        <i class="fas fa-arrow-right"></i>
                    </button>
                    <h2>إنشاء محفظة جديدة</h2>
                </div>
                
                <div class="wallet-info-card">
                    <div class="info-section">
                        <label>عنوان المحفظة</label>
                        <div class="address-display">
                            <span id="newWalletAddress">جاري الإنشاء...</span>
                            <button id="copyAddressBtn" class="copy-btn">
                                <i class="fas fa-copy"></i>
                            </button>
                        </div>
                    </div>
                    
                    <div class="info-section">
                        <label>عبارة الاسترجاع</label>
                        <div class="mnemonic-display">
                            <div id="newWalletMnemonic" class="mnemonic-words">
                                جاري الإنشاء...
                            </div>
                            <button id="copyMnemonicBtn" class="copy-btn">
                                <i class="fas fa-copy"></i>
                            </button>
                        </div>
                    </div>
                </div>
                
                <div class="backup-warning">
                    <i class="fas fa-shield-alt"></i>
                    <div>
                        <strong>احفظ عبارة الاسترجاع بأمان!</strong>
                        <p>هذه هي الطريقة الوحيدة لاستعادة محفظتك. احفظها في مكان آمن ولا تشاركها مع أحد.</p>
                    </div>
                </div>
                
                <div class="create-actions">
                    <button id="continueToWalletBtn" class="btn btn-primary btn-full">
                        <i class="fas fa-arrow-left"></i>
                        متابعة إلى المحفظة
                    </button>
                </div>
            </div>
        </div>

        <!-- شاشة المحفظة الرئيسية -->
        <div id="walletScreen" class="screen">
            <div class="wallet-container">
                <!-- رأس المحفظة -->
                <div class="wallet-header">
                    <div class="wallet-info">
                        <div class="wallet-name">
                            <h3>محفظتي</h3>
                            <div class="wallet-address-short">
                                <span id="currentWalletAddress">0x0000...0000</span>
                                <button id="copyCurrentAddressBtn" class="copy-btn-small">
                                    <i class="fas fa-copy"></i>
                                </button>
                            </div>
                        </div>
                        <button id="settingsBtn" class="settings-btn">
                            <i class="fas fa-cog"></i>
                        </button>
                    </div>
                </div>

                <!-- قسم الرصيد -->
                <div class="balance-section">
                    <div class="balance-card">
                        <div class="balance-header">
                            <span>إجمالي الرصيد</span>
                            <button id="refreshBalanceBtn" class="refresh-btn">
                                <i class="fas fa-sync-alt"></i>
                            </button>
                        </div>
                        <div class="balance-amount">
                            <span id="totalBalance">0.00</span>
                            <span class="currency">ETH</span>
                        </div>
                        <div class="balance-usd">
                            <span id="balanceUSD">$0.00 USD</span>
                        </div>
                    </div>
                </div>

                <!-- أزرار الإجراءات السريعة -->
                <div class="quick-actions">
                    <button id="sendBtn" class="action-btn">
                        <div class="action-icon send">
                            <i class="fas fa-arrow-up"></i>
                        </div>
                        <span>إرسال</span>
                    </button>
                    <button id="receiveBtn" class="action-btn">
                        <div class="action-icon receive">
                            <i class="fas fa-arrow-down"></i>
                        </div>
                        <span>استقبال</span>
                    </button>
                    <button id="swapBtn" class="action-btn">
                        <div class="action-icon swap">
                            <i class="fas fa-exchange-alt"></i>
                        </div>
                        <span>تبديل</span>
                    </button>
                    <button id="buyBtn" class="action-btn">
                        <div class="action-icon buy">
                            <i class="fas fa-credit-card"></i>
                        </div>
                        <span>شراء</span>
                    </button>
                </div>

                <!-- قائمة الأصول -->
                <div class="assets-section">
                    <div class="section-header">
                        <h4>الأصول</h4>
                        <button id="addTokenBtn" class="add-btn">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    <div id="assetsList" class="assets-list">
                        <div class="loading-assets">
                            <div class="loading-spinner"></div>
                            <span>جاري تحميل الأصول...</span>
                        </div>
                    </div>
                </div>

                <!-- قائمة المعاملات -->
                <div class="transactions-section">
                    <div class="section-header">
                        <h4>المعاملات الأخيرة</h4>
                        <button id="viewAllTxBtn" class="view-all-btn">
                            عرض الكل
                        </button>
                    </div>
                    <div id="transactionsList" class="transactions-list">
                        <div class="no-transactions">
                            <i class="fas fa-receipt"></i>
                            <span>لا توجد معاملات بعد</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- نافذة الإرسال -->
        <div id="sendModal" class="modal">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>إرسال الأصول</h3>
                    <button id="closeSendModal" class="close-btn">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <form id="sendForm">
                        <div class="form-group">
                            <label for="recipientAddress">عنوان المستقبل</label>
                            <div class="input-with-scan">
                                <input type="text" id="recipientAddress" placeholder="0x..." required>
                                <button type="button" class="scan-btn">
                                    <i class="fas fa-qrcode"></i>
                                </button>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="sendAmount">المبلغ</label>
                            <div class="amount-input">
                                <input type="number" id="sendAmount" step="0.000001" placeholder="0.0" required>
                                <select id="sendAsset">
                                    <option value="ETH">ETH</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="gasPrice">رسوم الشبكة</label>
                            <div class="gas-options">
                                <button type="button" class="gas-option active" data-speed="slow">
                                    <span>بطيء</span>
                                    <span class="gas-price">~$1.50</span>
                                </button>
                                <button type="button" class="gas-option" data-speed="standard">
                                    <span>عادي</span>
                                    <span class="gas-price">~$2.00</span>
                                </button>
                                <button type="button" class="gas-option" data-speed="fast">
                                    <span>سريع</span>
                                    <span class="gas-price">~$3.00</span>
                                </button>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary btn-full">
                            <i class="fas fa-paper-plane"></i>
                            إرسال
                        </button>
                    </form>
                </div>
            </div>
        </div>

        <!-- نافذة الاستقبال -->
        <div id="receiveModal" class="modal">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>استقبال الأصول</h3>
                    <button id="closeReceiveModal" class="close-btn">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="receive-content">
                        <div class="qr-section">
                            <div id="qrCode" class="qr-code">
                                <canvas id="qrCanvas"></canvas>
                            </div>
                        </div>
                        <div class="address-section">
                            <label>عنوان محفظتك</label>
                            <div class="address-display">
                                <span id="receiveAddress">0x0000...0000</span>
                                <button id="copyReceiveAddressBtn" class="copy-btn">
                                    <i class="fas fa-copy"></i>
                                </button>
                            </div>
                        </div>
                        <div class="receive-warning">
                            <i class="fas fa-info-circle"></i>
                            <span>أرسل فقط أصول Ethereum (ETH) إلى هذا العنوان</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- نافذة الإعدادات -->
        <div id="settingsModal" class="modal">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>الإعدادات</h3>
                    <button id="closeSettingsModal" class="close-btn">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="settings-list">
                        <div class="setting-item">
                            <div class="setting-info">
                                <i class="fas fa-key"></i>
                                <span>عرض المفتاح الخاص</span>
                            </div>
                            <button id="showPrivateKeyBtn" class="setting-btn">
                                <i class="fas fa-eye"></i>
                            </button>
                        </div>
                        <div class="setting-item">
                            <div class="setting-info">
                                <i class="fas fa-seedling"></i>
                                <span>عرض عبارة الاسترجاع</span>
                            </div>
                            <button id="showMnemonicBtn" class="setting-btn">
                                <i class="fas fa-eye"></i>
                            </button>
                        </div>
                        <div class="setting-item danger">
                            <div class="setting-info">
                                <i class="fas fa-sign-out-alt"></i>
                                <span>تسجيل الخروج</span>
                            </div>
                            <button id="logoutBtn" class="setting-btn danger">
                                <i class="fas fa-power-off"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- شاشة التحميل -->
        <div id="loadingOverlay" class="loading-overlay">
            <div class="loading-content">
                <div class="loading-spinner large"></div>
                <p id="loadingText">جاري التحميل...</p>
            </div>
        </div>

        <!-- رسائل التنبيه -->
        <div id="toastContainer" class="toast-container"></div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/ethers@5.7.2/dist/ethers.umd.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/qrcode@1.5.3/build/qrcode.min.js"></script>
    <script src="wallet.js"></script>
</body>
</html>
