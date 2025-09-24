<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SafeWallet - محفظة آمنة</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        /* إعادة تعيين الأنماط الأساسية */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* المتغيرات العامة */
        :root {
            /* الألوان الأساسية - مستوحاة من SafePal */
            --primary-color: #1652f0;
            --primary-dark: #0d47d9;
            --secondary-color: #00d4aa;
            --accent-color: #ff6b35;
            --success-color: #00c896;
            --warning-color: #ffb020;
            --error-color: #ff4757;
            
            /* ألوان الخلفية */
            --bg-primary: #0f0f23;
            --bg-secondary: #1a1a3a;
            --bg-tertiary: #252547;
            --bg-card: #1e1e3f;
            --bg-modal: #2a2a4a;
            
            /* ألوان النص */
            --text-primary: #ffffff;
            --text-secondary: #b8bcc8;
            --text-muted: #8b8ca7;
            --text-inverse: #0f0f23;
            
            /* ألوان الحدود */
            --border-color: #3a3a5c;
            --border-light: #4a4a6c;
            
            /* الظلال */
            --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.1);
            --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.15);
            --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.2);
            --shadow-xl: 0 16px 48px rgba(0, 0, 0, 0.3);
            
            /* المسافات */
            --spacing-xs: 4px;
            --spacing-sm: 8px;
            --spacing-md: 16px;
            --spacing-lg: 24px;
            --spacing-xl: 32px;
            --spacing-2xl: 48px;
            
            /* أحجام الخط */
            --font-xs: 12px;
            --font-sm: 14px;
            --font-md: 16px;
            --font-lg: 18px;
            --font-xl: 20px;
            --font-2xl: 24px;
            --font-3xl: 32px;
            
            /* الانتقالات */
            --transition-fast: 0.15s ease;
            --transition-normal: 0.3s ease;
            --transition-slow: 0.5s ease;
        }

        /* الخطوط */
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
            color: var(--text-primary);
            line-height: 1.6;
            min-height: 100vh;
            direction: rtl;
            overflow-x: hidden;
        }

        /* الحاوي الرئيسي */
        .app-container {
            min-height: 100vh;
            position: relative;
        }

        /* الشاشات */
        .screen {
            display: none;
            min-height: 100vh;
            padding: var(--spacing-lg);
            animation: fadeIn 0.4s ease;
        }

        .screen.active {
            display: block;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* شاشة الترحيب */
        .welcome-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            text-align: center;
            max-width: 400px;
            margin: 0 auto;
        }

        .logo-section {
            margin-bottom: var(--spacing-2xl);
        }

        .logo {
            width: 80px;
            height: 80px;
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto var(--spacing-lg);
            box-shadow: var(--shadow-lg);
            position: relative;
            overflow: hidden;
        }

        .logo::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
            transform: rotate(45deg);
            animation: shimmer 3s infinite;
        }

        @keyframes shimmer {
            0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
            100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }

        .logo i {
            font-size: 36px;
            color: white;
            z-index: 1;
        }

        .welcome-container h1 {
            font-size: var(--font-3xl);
            font-weight: 700;
            margin-bottom: var(--spacing-sm);
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .tagline {
            color: var(--text-secondary);
            font-size: var(--font-lg);
            margin-bottom: var(--spacing-2xl);
        }

        .welcome-actions {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: var(--spacing-md);
            margin-bottom: var(--spacing-xl);
        }

        .security-note {
            display: flex;
            align-items: center;
            gap: var(--spacing-sm);
            color: var(--text-muted);
            font-size: var(--font-sm);
        }

        .security-note i {
            color: var(--success-color);
        }

        /* الأزرار */
        .btn {
            padding: var(--spacing-md) var(--spacing-lg);
            border: none;
            border-radius: 12px;
            font-size: var(--font-md);
            font-weight: 600;
            cursor: pointer;
            transition: all var(--transition-normal);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: var(--spacing-sm);
            text-decoration: none;
            position: relative;
            overflow: hidden;
            min-height: 48px;
        }

        .btn-primary {
            background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
            color: white;
            box-shadow: var(--shadow-md);
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-lg);
        }

        .btn-primary:active {
            transform: translateY(0);
        }

        .btn-secondary {
            background: var(--bg-card);
            color: var(--text-primary);
            border: 2px solid var(--border-color);
            box-shadow: var(--shadow-sm);
        }

        .btn-secondary:hover {
            border-color: var(--primary-color);
            background: var(--bg-tertiary);
            transform: translateY(-1px);
        }

        .btn-full {
            width: 100%;
        }

        /* رؤوس الشاشات */
        .screen-header {
            display: flex;
            align-items: center;
            margin-bottom: var(--spacing-xl);
            gap: var(--spacing-md);
        }

        .back-btn {
            width: 40px;
            height: 40px;
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 8px;
            color: var(--text-primary);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all var(--transition-fast);
        }

        .back-btn:hover {
            background: var(--bg-tertiary);
            border-color: var(--primary-color);
        }

        .screen-header h2 {
            font-size: var(--font-2xl);
            font-weight: 600;
            color: var(--text-primary);
        }

        /* شاشة الاستيراد */
        .import-container {
            max-width: 500px;
            margin: 0 auto;
        }

        .import-form {
            background: var(--bg-card);
            border-radius: 16px;
            padding: var(--spacing-xl);
            margin-bottom: var(--spacing-lg);
            box-shadow: var(--shadow-md);
        }

        .form-section {
            margin-bottom: var(--spacing-xl);
        }

        .form-section label {
            display: block;
            font-weight: 600;
            margin-bottom: var(--spacing-sm);
            color: var(--text-primary);
        }

        #mnemonicInput {
            width: 100%;
            padding: var(--spacing-md);
            background: var(--bg-tertiary);
            border: 2px solid var(--border-color);
            border-radius: 8px;
            color: var(--text-primary);
            font-size: var(--font-md);
            resize: vertical;
            min-height: 120px;
            transition: border-color var(--transition-fast);
        }

        #mnemonicInput:focus {
            outline: none;
            border-color: var(--primary-color);
            box-shadow: 0 0 0 3px rgba(22, 82, 240, 0.1);
        }

        .input-hint {
            display: flex;
            align-items: center;
            gap: var(--spacing-xs);
            margin-top: var(--spacing-sm);
            color: var(--text-muted);
            font-size: var(--font-sm);
        }

        .security-warning {
            background: rgba(255, 107, 53, 0.1);
            border: 1px solid var(--accent-color);
            border-radius: 12px;
            padding: var(--spacing-md);
            display: flex;
            gap: var(--spacing-md);
            align-items: flex-start;
        }

        .security-warning i {
            color: var(--accent-color);
            margin-top: 2px;
        }

        .security-warning strong {
            color: var(--accent-color);
        }

        /* شاشة إنشاء المحفظة */
        .create-container {
            max-width: 600px;
            margin: 0 auto;
        }

        .wallet-info-card {
            background: var(--bg-card);
            border-radius: 16px;
            padding: var(--spacing-xl);
            margin-bottom: var(--spacing-lg);
            box-shadow: var(--shadow-md);
        }

        .info-section {
            margin-bottom: var(--spacing-lg);
        }

        .info-section:last-child {
            margin-bottom: 0;
        }

        .info-section label {
            display: block;
            font-weight: 600;
            margin-bottom: var(--spacing-sm);
            color: var(--text-secondary);
            font-size: var(--font-sm);
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .address-display {
            display: flex;
            align-items: center;
            gap: var(--spacing-sm);
            background: var(--bg-tertiary);
            padding: var(--spacing-md);
            border: 1px solid var(--border-color);
            border-radius: 8px;
        }

        .address-display span {
            flex: 1;
            font-family: 'Courier New', monospace;
            font-size: var(--font-sm);
            word-break: break-all;
            color: var(--text-primary);
        }

        .mnemonic-display {
            background: var(--bg-tertiary);
            border: 1px solid var(--border-color);
            border-radius: 8px;
            position: relative;
        }

        .mnemonic-words {
            padding: var(--spacing-md);
            font-family: 'Courier New', monospace;
            font-size: var(--font-sm);
            line-height: 1.8;
            color: var(--text-primary);
            min-height: 80px;
            display: flex;
            align-items: center;
        }

        .copy-btn {
            background: var(--primary-color);
            color: white;
            border: none;
            border-radius: 6px;
            padding: var(--spacing-sm);
            cursor: pointer;
            transition: background-color var(--transition-fast);
            min-width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .copy-btn:hover {
            background: var(--primary-dark);
        }

        .backup-warning {
            background: rgba(0, 200, 150, 0.1);
            border: 1px solid var(--success-color);
            border-radius: 12px;
            padding: var(--spacing-md);
            display: flex;
            gap: var(--spacing-md);
            align-items: flex-start;
            margin-bottom: var(--spacing-lg);
        }

        .backup-warning i {
            color: var(--success-color);
            margin-top: 2px;
        }

        .backup-warning strong {
            color: var(--success-color);
        }

        /* شاشة المحفظة الرئيسية */
        .wallet-container {
            max-width: 800px;
            margin: 0 auto;
        }

        .wallet-header {
            margin-bottom: var(--spacing-xl);
        }

        .wallet-info {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: var(--bg-card);
            border-radius: 16px;
            padding: var(--spacing-lg);
            box-shadow: var(--shadow-md);
        }

        .wallet-name h3 {
            font-size: var(--font-xl);
            margin-bottom: var(--spacing-xs);
        }

        .wallet-address-short {
            display: flex;
            align-items: center;
            gap: var(--spacing-sm);
        }

        .wallet-address-short span {
            font-family: 'Courier New', monospace;
            color: var(--text-secondary);
            font-size: var(--font-sm);
        }

        .copy-btn-small {
            background: transparent;
            border: 1px solid var(--border-color);
            border-radius: 4px;
            color: var(--text-secondary);
            padding: var(--spacing-xs);
            cursor: pointer;
            transition: all var(--transition-fast);
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .copy-btn-small:hover {
            border-color: var(--primary-color);
            color: var(--primary-color);
        }

        .settings-btn {
            background: transparent;
            border: 1px solid var(--border-color);
            border-radius: 8px;
            color: var(--text-secondary);
            padding: var(--spacing-sm);
            cursor: pointer;
            transition: all var(--transition-fast);
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .settings-btn:hover {
            border-color: var(--primary-color);
            color: var(--primary-color);
            background: rgba(22, 82, 240, 0.1);
        }

        /* قسم الرصيد */
        .balance-section {
            margin-bottom: var(--spacing-xl);
        }

        .balance-card {
            background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
            border-radius: 20px;
            padding: var(--spacing-xl);
            text-align: center;
            position: relative;
            overflow: hidden;
            box-shadow: var(--shadow-lg);
        }

        .balance-card::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
            animation: pulse 4s ease-in-out infinite;
        }

        @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.5; }
            50% { transform: scale(1.1); opacity: 0.8; }
        }

        .balance-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: var(--spacing-md);
            position: relative;
            z-index: 1;
        }

        .balance-header span {
            color: rgba(255, 255, 255, 0.9);
            font-size: var(--font-sm);
            font-weight: 500;
        }

        .refresh-btn {
            background: rgba(255, 255, 255, 0.2);
            border: none;
            border-radius: 6px;
            color: white;
            padding: var(--spacing-xs);
            cursor: pointer;
            transition: all var(--transition-fast);
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .refresh-btn:hover {
            background: rgba(255, 255, 255, 0.3);
            transform: rotate(180deg);
        }

        .balance-amount {
            font-size: var(--font-3xl);
            font-weight: 700;
            color: white;
            margin-bottom: var(--spacing-sm);
            position: relative;
            z-index: 1;
        }

        .currency {
            font-size: var(--font-lg);
            opacity: 0.9;
        }

        .balance-usd {
            color: rgba(255, 255, 255, 0.8);
            font-size: var(--font-md);
            position: relative;
            z-index: 1;
        }

        /* الإجراءات السريعة */
        .quick-actions {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: var(--spacing-md);
            margin-bottom: var(--spacing-xl);
        }

        .action-btn {
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 16px;
            padding: var(--spacing-lg);
            cursor: pointer;
            transition: all var(--transition-normal);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: var(--spacing-sm);
            text-align: center;
            color: var(--text-primary);
            box-shadow: var(--shadow-sm);
        }

        .action-btn:hover {
            transform: translateY(-4px);
            box-shadow: var(--shadow-md);
            border-color: var(--primary-color);
        }

        .action-icon {
            width: 48px;
            height: 48px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            margin-bottom: var(--spacing-xs);
        }

        .action-icon.send {
            background: linear-gradient(135deg, var(--accent-color), #ff8c42);
            color: white;
        }

        .action-icon.receive {
            background: linear-gradient(135deg, var(--success-color), #00e6b8);
            color: white;
        }

        .action-icon.swap {
            background: linear-gradient(135deg, var(--secondary-color), #00f0cc);
            color: white;
        }

        .action-btn span {
            font-size: var(--font-sm);
            font-weight: 500;
        }

        /* الأقسام */
        .assets-section,
        .transactions-section {
            margin-bottom: var(--spacing-xl);
        }

        .section-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: var(--spacing-md);
        }

        .section-header h4 {
            font-size: var(--font-lg);
            font-weight: 600;
            color: var(--text-primary);
        }

        .add-btn,
        .view-all-btn {
            background: transparent;
            border: 1px solid var(--border-color);
            border-radius: 6px;
            color: var(--text-secondary);
            padding: var(--spacing-xs) var(--spacing-sm);
            cursor: pointer;
            transition: all var(--transition-fast);
            font-size: var(--font-sm);
        }

        .add-btn:hover,
        .view-all-btn:hover {
            border-color: var(--primary-color);
            color: var(--primary-color);
        }

        /* قائمة الأصول */
        .assets-list {
            background: var(--bg-card);
            border-radius: 12px;
            box-shadow: var(--shadow-sm);
        }

        .loading-assets {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: var(--spacing-md);
            padding: var(--spacing-xl);
            color: var(--text-secondary);
        }

        .asset-item {
            display: flex;
            align-items: center;
            padding: var(--spacing-md);
            border-bottom: 1px solid var(--border-color);
            transition: background-color var(--transition-fast);
        }

        .asset-item:hover {
            background: var(--bg-tertiary);
        }

        .asset-item:last-child {
            border-bottom: none;
        }

        .asset-icon {
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: var(--spacing-md);
            color: white;
            font-weight: 600;
            font-size: var(--font-sm);
        }

        .asset-details {
            flex: 1;
        }

        .asset-details h5 {
            font-size: var(--font-md);
            margin-bottom: 2px;
            color: var(--text-primary);
        }

        .asset-details p {
            font-size: var(--font-sm);
            color: var(--text-secondary);
        }

        .asset-balance {
            text-align: left;
            font-weight: 600;
            color: var(--text-primary);
        }

        /* قائمة المعاملات */
        .transactions-list {
            background: var(--bg-card);
            border-radius: 12px;
            box-shadow: var(--shadow-sm);
        }

        .no-transactions {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: var(--spacing-sm);
            padding: var(--spacing-xl);
            color: var(--text-muted);
        }

        .no-transactions i {
            font-size: var(--font-2xl);
            opacity: 0.5;
        }

        /* النوافذ المنبثقة */
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            z-index: 1000;
            backdrop-filter: blur(4px);
        }

        .modal.active {
            display: flex;
            align-items: center;
            justify-content: center;
            animation: modalFadeIn 0.3s ease;
        }

        @keyframes modalFadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        .modal-content {
            background: var(--bg-modal);
            border-radius: 16px;
            max-width: 500px;
            width: 90%;
            max-height: 90vh;
            overflow-y: auto;
            box-shadow: var(--shadow-xl);
            animation: modalSlideIn 0.3s ease;
        }

        @keyframes modalSlideIn {
            from {
                transform: translateY(-50px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }

        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: var(--spacing-lg);
            border-bottom: 1px solid var(--border-color);
        }

        .modal-header h3 {
            font-size: var(--font-xl);
            color: var(--text-primary);
        }

        .close-btn {
            background: transparent;
            border: none;
            border-radius: 6px;
            color: var(--text-secondary);
            font-size: var(--font-lg);
            cursor: pointer;
            padding: var(--spacing-xs);
            transition: color var(--transition-fast);
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .close-btn:hover {
            color: var(--text-primary);
        }

        .modal-body {
            padding: var(--spacing-lg);
        }

        /* نماذج الإدخال */
        .form-group {
            margin-bottom: var(--spacing-lg);
        }

        .form-group label {
            display: block;
            font-weight: 600;
            margin-bottom: var(--spacing-sm);
            color: var(--text-primary);
        }

        .form-group input,
        .form-group select {
            width: 100%;
            padding: var(--spacing-md);
            background: var(--bg-tertiary);
            border: 2px solid var(--border-color);
            border-radius: 8px;
            color: var(--text-primary);
            font-size: var(--font-md);
            transition: border-color var(--transition-fast);
        }

        .form-group input:focus,
        .form-group select:focus {
            outline: none;
            border-color: var(--primary-color);
            box-shadow: 0 0 0 3px rgba(22, 82, 240, 0.1);
        }

        .input-with-scan {
            display: flex;
            gap: var(--spacing-sm);
        }

        .input-with-scan input {
            flex: 1;
        }

        .scan-btn {
            background: var(--bg-tertiary);
            border: 2px solid var(--border-color);
            border-radius: 8px;
            color: var(--text-secondary);
            padding: var(--spacing-md);
            cursor: pointer;
            transition: all var(--transition-fast);
            width: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .scan-btn:hover {
            border-color: var(--primary-color);
            color: var(--primary-color);
        }

        .amount-input {
            display: flex;
            gap: var(--spacing-sm);
        }

        .amount-input input {
            flex: 1;
        }

        .amount-input select {
            width: 80px;
        }

        /* خيارات الغاز */
        .gas-options {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: var(--spacing-sm);
        }

        .gas-option {
            background: var(--bg-tertiary);
            border: 2px solid var(--border-color);
            border-radius: 8px;
            padding: var(--spacing-md);
            cursor: pointer;
            transition: all var(--transition-fast);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: var(--spacing-xs);
            color: var(--text-primary);
        }

        .gas-option:hover {
            border-color: var(--primary-color);
        }

        .gas-option.active {
            border-color: var(--primary-color);
            background: rgba(22, 82, 240, 0.1);
        }

        .gas-price {
            font-size: var(--font-xs);
            color: var(--text-secondary);
        }

        /* نافذة الاستقبال */
        .receive-content {
            text-align: center;
        }

        .qr-section {
            margin-bottom: var(--spacing-lg);
        }

        .qr-code {
            width: 200px;
            height: 200px;
            background: white;
            border-radius: 12px;
            margin: 0 auto var(--spacing-md);
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: var(--shadow-md);
        }

        .address-section {
            margin-bottom: var(--spacing-lg);
        }

        .receive-warning {
            background: rgba(255, 182, 32, 0.1);
            border: 1px solid var(--warning-color);
            border-radius: 8px;
            padding: var(--spacing-md);
            display: flex;
            align-items: center;
            gap: var(--spacing-sm);
            font-size: var(--font-sm);
            color: var(--warning-color);
        }

        /* نافذة الإعدادات */
        .settings-list {
            display: flex;
            flex-direction: column;
            gap: 1px;
            background: var(--border-color);
            border-radius: 8px;
            overflow: hidden;
        }

        .setting-item {
            background: var(--bg-tertiary);
            padding: var(--spacing-md);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .setting-item.danger {
            background: rgba(255, 71, 87, 0.1);
        }

        .setting-info {
            display: flex;
            align-items: center;
            gap: var(--spacing-md);
            color: var(--text-primary);
        }

        .setting-item.danger .setting-info {
            color: var(--error-color);
        }

        .setting-btn {
            background: transparent;
            border: 1px solid var(--border-color);
            border-radius: 6px;
            color: var(--text-secondary);
            padding: var(--spacing-sm);
            cursor: pointer;
            transition: all var(--transition-fast);
            width: 36px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .setting-btn:hover {
            border-color: var(--primary-color);
            color: var(--primary-color);
        }

        .setting-btn.danger {
            border-color: var(--error-color);
            color: var(--error-color);
        }

        .setting-btn.danger:hover {
            background: var(--error-color);
            color: white;
        }

        /* شاشة التحميل */
        .loading-overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(15, 15, 35, 0.9);
            z-index: 2000;
            backdrop-filter: blur(4px);
        }

        .loading-overlay.active {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .loading-content {
            text-align: center;
            color: var(--text-primary);
        }

        .loading-spinner {
            width: 40px;
            height: 40px;
            border: 3px solid var(--border-color);
            border-top: 3px solid var(--primary-color);
            border-radius: 50%;
            margin: 0 auto var(--spacing-md);
            animation: spin 1s linear infinite;
        }

        .loading-spinner.large {
            width: 60px;
            height: 60px;
            border-width: 4px;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        /* رسائل التنبيه */
        .toast-container {
            position: fixed;
            top: var(--spacing-lg);
            right: var(--spacing-lg);
            z-index: 3000;
            display: flex;
            flex-direction: column;
            gap: var(--spacing-sm);
        }

        .toast {
            background: var(--bg-modal);
            color: var(--text-primary);
            border-radius: 8px;
            padding: var(--spacing-md) var(--spacing-lg);
            box-shadow: var(--shadow-lg);
            display: flex;
            align-items: center;
            gap: var(--spacing-sm);
            min-width: 300px;
            animation: toastSlideIn 0.3s ease;
        }

        @keyframes toastSlideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }

        @keyframes toastSlideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }

        .toast.success {
            border-right: 4px solid var(--success-color);
        }

        .toast.error {
            border-right: 4px solid var(--error-color);
        }

        .toast.warning {
            border-right: 4px solid var(--warning-color);
        }

        .toast.info {
            border-right: 4px solid var(--primary-color);
        }

        /* كاميرا QR */
        .camera-modal {
            z-index: 2000;
        }

        .camera-container {
            width: 100%;
            max-width: 500px;
            background: var(--bg-modal);
            border-radius: 16px;
            overflow: hidden;
        }

        .camera-video {
            width: 100%;
            height: 300px;
            background: #000;
            display: block;
        }

        .camera-controls {
            padding: var(--spacing-md);
            display: flex;
            justify-content: center;
            gap: var(--spacing-md);
        }

        /* اختيار الشبكة */
        .network-selector {
            display: flex;
            align-items: center;
            gap: var(--spacing-sm);
            margin-bottom: var(--spacing-md);
        }

        .network-selector select {
            flex: 1;
        }

        .network-info {
            font-size: var(--font-sm);
            color: var(--text-secondary);
            margin-bottom: var(--spacing-lg);
        }

        /* حماية بكلمة المرور */
        .password-form {
            background: var(--bg-card);
            border-radius: 16px;
            padding: var(--spacing-xl);
            margin-bottom: var(--spacing-lg);
            box-shadow: var(--shadow-md);
        }

        /* التصميم المتجاوب */
        @media (max-width: 768px) {
            .screen {
                padding: var(--spacing-md);
            }
            
            .welcome-container {
                padding: var(--spacing-md);
            }
            
            .logo {
                width: 60px;
                height: 60px;
            }
            
            .logo i {
                font-size: 28px;
            }
            
            .welcome-container h1 {
                font-size: var(--font-2xl);
            }
            
            .quick-actions {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .action-icon {
                width: 40px;
                height: 40px;
                font-size: 18px;
            }
            
            .balance-amount {
                font-size: var(--font-2xl);
            }
            
            .wallet-info {
                flex-direction: column;
                gap: var(--spacing-md);
                text-align: center;
            }
            
            .modal-content {
                width: 95%;
                margin: var(--spacing-md);
            }
            
            .gas-options {
                grid-template-columns: 1fr;
            }
            
            .toast-container {
                right: var(--spacing-md);
                left: var(--spacing-md);
            }
            
            .toast {
                min-width: auto;
            }
        }

        @media (max-width: 480px) {
            .screen {
                padding: var(--spacing-sm);
            }
            
            .welcome-actions {
                gap: var(--spacing-sm);
            }
            
            .btn {
                padding: var(--spacing-sm) var(--spacing-md);
                font-size: var(--font-sm);
            }
            
            .quick-actions {
                gap: var(--spacing-sm);
            }
            
            .action-btn {
                padding: var(--spacing-md);
            }
            
            .balance-card {
                padding: var(--spacing-lg);
            }
            
            .wallet-info {
                padding: var(--spacing-md);
            }
            
            .modal-body {
                padding: var(--spacing-md);
            }
            
            .form-group {
                margin-bottom: var(--spacing-md);
            }
        }

        /* تحسينات إضافية للأداء */
        * {
            -webkit-tap-highlight-color: transparent;
        }

        button, .btn {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }

        /* تأثيرات التمرير */
        .screen {
            scroll-behavior: smooth;
        }

        /* تحسين الخطوط */
        body {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-rendering: optimizeLegibility;
        }
    </style>
</head>
<body>
    <div class="app-container">
        <!-- شاشة كلمة المرور -->
        <div id="passwordScreen" class="screen">
            <div class="welcome-container">
                <div class="logo-section">
                    <div class="logo">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <h1>SafeWallet</h1>
                    <p class="tagline">أدخل كلمة المرور للوصول إلى محفظتك</p>
                </div>
                
                <div class="password-form">
                    <div class="form-group">
                        <label for="passwordInput">كلمة المرور</label>
                        <input type="password" id="passwordInput" placeholder="أدخل كلمة المرور">
                    </div>
                    
                    <button id="unlockWalletBtn" class="btn btn-primary btn-full">
                        <i class="fas fa-unlock"></i>
                        فتح المحفظة
                    </button>
                </div>
                
                <div class="security-note">
                    <i class="fas fa-lock"></i>
                    <span>بياناتك مشفرة ومحمية بكلمة المرور</span>
                </div>
            </div>
        </div>

        <!-- شاشة الترحيب -->
        <div id="welcomeScreen" class="screen">
            <div class="welcome-container">
                <div class="logo-section">
                    <div class="logo">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <h1>SafeWallet</h1>
                    <p class="tagline">محفظتك الآمنة للعملات الرقمية</p>
                </div>
                
                <div class="welcome-actions">
                    <button id="importWalletBtn" class="btn btn-primary btn-full">
                        <i class="fas fa-download"></i>
                        استيراد محفظة موجودة
                    </button>
                    <button id="createWalletBtn" class="btn btn-secondary btn-full">
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
                        <textarea id="mnemonicInput" placeholder="أدخل الكلمات مفصولة بمسافات"></textarea>
                        <div class="input-hint">
                            <i class="fas fa-info-circle"></i>
                            <span>أدخل الكلمات مفصولة بمسافات</span>
                        </div>
                    </div>

                    <div class="form-section">
                        <label for="importPassword">كلمة المرور</label>
                        <input type="password" id="importPassword" placeholder="اختر كلمة مرور قوية">
                        <div class="input-hint">
                            <i class="fas fa-info-circle"></i>
                            <span>كلمة المرور تستخدم لتشفير بيانات محفظتك</span>
                        </div>
                    </div>
                    
                    <button id="importBtn" class="btn btn-primary btn-full">
                        <i class="fas fa-download"></i>
                        استيراد المحفظة
                    </button>
                </div>
                
                <div class="security-warning">
                    <i class="fas fa-exclamation-triangle"></i>
                    <div>
                        <strong>تحذير أمني:</strong><br>
                        تأكد من أنك في مكان آمن وأن لا أحد يراقب شاشتك
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
                
                <div class="password-form">
                    <div class="form-section">
                        <label for="createPassword">كلمة المرور</label>
                        <input type="password" id="createPassword" placeholder="اختر كلمة مرور قوية">
                        <div class="input-hint">
                            <i class="fas fa-info-circle"></i>
                            <span>كلمة المرور تستخدم لتشفير بيانات محفظتك</span>
                        </div>
                    </div>
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
                            <div class="mnemonic-words" id="newWalletMnemonic">جاري الإنشاء...</div>
                            <button id="copyMnemonicBtn" class="copy-btn">
                                <i class="fas fa-copy"></i>
                            </button>
                        </div>
                    </div>
                </div>
                
                <div class="backup-warning">
                    <i class="fas fa-shield-alt"></i>
                    <div>
                        <strong>احفظ عبارة الاسترجاع بأمان!</strong><br>
                        هذه هي الطريقة الوحيدة لاستعادة محفظتك. احفظها في مكان آمن ولا تشاركها مع أحد.
                    </div>
                </div>
                
                <button id="continueToWalletBtn" class="btn btn-primary btn-full">
                    <i class="fas fa-arrow-left"></i>
                    متابعة إلى المحفظة
                </button>
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

                <!-- اختيار الشبكة -->
                <div class="network-selector">
                    <label for="networkSelect">الشبكة:</label>
                    <select id="networkSelect">
                        <option value="ethereum">Ethereum</option>
                        <option value="bsc">Binance Smart Chain</option>
                        <option value="polygon">Polygon</option>
                        <option value="avalanche">Avalanche</option>
                        <option value="arbitrum">Arbitrum</option>
                    </select>
                </div>
                <div class="network-info" id="networkInfo">
                    الشبكة: Ethereum - الرمز: ETH
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
                            <span class="currency" id="balanceCurrency">ETH</span>
                        </div>
                        <div class="balance-usd" id="balanceUSD">$0.00 USD</div>
                    </div>
                </div>

                <!-- الإجراءات السريعة -->
                <div class="quick-actions">
                    <div id="sendBtn" class="action-btn">
                        <div class="action-icon send">
                            <i class="fas fa-arrow-up"></i>
                        </div>
                        <span>إرسال</span>
                    </div>
                    <div id="receiveBtn" class="action-btn">
                        <div class="action-icon receive">
                            <i class="fas fa-arrow-down"></i>
                        </div>
                        <span>استقبال</span>
                    </div>
                    <div id="swapBtn" class="action-btn">
                        <div class="action-icon swap">
                            <i class="fas fa-exchange-alt"></i>
                        </div>
                        <span>تبديل</span>
                    </div>
                </div>

                <!-- قسم الأصول -->
                <div class="assets-section">
                    <div class="section-header">
                        <h4>الأصول</h4>
                        <button class="add-btn" id="addTokenBtn">
                            <i class="fas fa-plus"></i>
                            إضافة رمز
                        </button>
                    </div>
                    <div class="assets-list" id="assetsList">
                        <div class="loading-assets">
                            <div class="loading-spinner"></div>
                            <span>جاري تحميل الأصول...</span>
                        </div>
                    </div>
                </div>

                <!-- قسم المعاملات -->
                <div class="transactions-section">
                    <div class="section-header">
                        <h4>المعاملات الأخيرة</h4>
                        <button class="view-all-btn" id="viewAllTransactions">عرض الكل</button>
                    </div>
                    <div class="transactions-list" id="transactionsList">
                        <div class="no-transactions">
                            <i class="fas fa-receipt"></i>
                            <span>لا توجد معاملات بعد</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- النوافذ المنبثقة -->
    
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
                        <label>إلى</label>
                        <div class="input-with-scan">
                            <input type="text" id="sendToAddress" placeholder="عنوان المحفظة">
                            <button type="button" id="scanAddressBtn" class="scan-btn">
                                <i class="fas fa-qrcode"></i>
                            </button>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label>الأصل</label>
                        <select id="sendAsset">
                            <option value="native">ETH - Ethereum</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label>المبلغ</label>
                        <div class="amount-input">
                            <input type="number" id="sendAmount" placeholder="0.00" step="0.0001">
                            <span id="sendAssetSymbol">ETH</span>
                        </div>
                        <div class="input-hint">
                            <span>الرصيد المتاح: <span id="availableBalance">0.00</span> <span id="availableSymbol">ETH</span></span>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label>سرعة المعاملة</label>
                        <div class="gas-options">
                            <div class="gas-option" data-speed="slow">
                                <span>بطيء</span>
                                <span class="gas-price">~5 دقائق</span>
                            </div>
                            <div class="gas-option active" data-speed="normal">
                                <span>عادي</span>
                                <span class="gas-price">~2 دقيقة</span>
                            </div>
                            <div class="gas-option" data-speed="fast">
                                <span>سريع</span>
                                <span class="gas-price">~30 ثانية</span>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <label>رسوم المعاملة</label>
                        <div id="transactionFee">~ 0.0012 ETH</div>
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
                        <div class="qr-code">
                            <canvas id="qrCanvas"></canvas>
                        </div>
                        <p>امسح الكود ضوئياً أو انسخ العنوان</p>
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
                        <i class="fas fa-exclamation-triangle"></i>
                        <span id="receiveWarning">أرسل فقط أصول Ethereum (ETH) إلى هذا العنوان</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- نافذة التبديل -->
    <div id="swapModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h3>تبديل الأصول</h3>
                <button id="closeSwapModal" class="close-btn">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <form id="swapForm">
                    <div class="form-group">
                        <label>من</label>
                        <select id="swapFrom">
                            <option value="ETH">ETH - Ethereum</option>
                        </select>
                        <div class="amount-input">
                            <input type="number" id="swapFromAmount" placeholder="0.00" step="0.0001">
                            <span>ETH</span>
                        </div>
                    </div>
                    
                    <div class="form-group" style="text-align: center;">
                        <button type="button" id="swapDirectionBtn" class="btn btn-secondary" style="width: auto; padding: 8px;">
                            <i class="fas fa-exchange-alt"></i>
                        </button>
                    </div>
                    
                    <div class="form-group">
                        <label>إلى</label>
                        <select id="swapTo">
                            <option value="USDT">USDT - Tether</option>
                            <option value="DAI">DAI - Dai Stablecoin</option>
                            <option value="UNI">UNI - Uniswap</option>
                        </select>
                        <div class="amount-input">
                            <input type="number" id="swapToAmount" placeholder="0.00" step="0.0001" readonly>
                            <span id="swapToSymbol">USDT</span>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label>سعر الصرف</label>
                        <div id="exchangeRate">1 ETH = 0.00 USDT</div>
                    </div>
                    
                    <button type="submit" class="btn btn-primary btn-full">
                        <i class="fas fa-exchange-alt"></i>
                        تبديل
                    </button>
                </form>
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
                            <span>عبارة الاسترجاع</span>
                        </div>
                        <button id="showMnemonicBtn" class="setting-btn">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>
                    <div class="setting-item">
                        <div class="setting-info">
                            <i class="fas fa-lock"></i>
                            <span>تغيير كلمة المرور</span>
                        </div>
                        <button id="changePasswordBtn" class="setting-btn">
                            <i class="fas fa-edit"></i>
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

    <!-- نافذة كاميرا QR -->
    <div id="cameraModal" class="modal camera-modal">
        <div class="modal-content camera-container">
            <div class="modal-header">
                <h3>مسح رمز الاستجابة السريعة</h3>
                <button id="closeCameraModal" class="close-btn">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <video id="cameraVideo" class="camera-video" autoplay playsinline></video>
                <div class="camera-controls">
                    <button id="switchCameraBtn" class="btn btn-secondary">
                        <i class="fas fa-sync-alt"></i>
                        تبديل الكاميرا
                    </button>
                    <button id="closeCameraBtn" class="btn btn-primary">
                        <i class="fas fa-times"></i>
                        إغلاق
                    </button>
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

    <!-- حاوي رسائل التنبيه -->
    <div id="toastContainer" class="toast-container"></div>

    <script src="https://cdn.jsdelivr.net/npm/ethers@5.7.2/dist/ethers.umd.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/qrcode@1.5.3/build/qrcode.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js"></script>
    <script>
        // متغيرات عامة
        let currentWallet = null;
        let provider = null;
        let currentBalance = '0.00';
        let ethPriceUSD = 0;
        let currentNetwork = 'ethereum';
        let tokens = [];
        let stream = null;
        let isCameraActive = false;

        // إعدادات الشبكات
        const networks = {
            ethereum: {
                name: 'Ethereum',
                symbol: 'ETH',
                rpcUrl: 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
                explorer: 'https://etherscan.io',
                chainId: 1
            },
            bsc: {
                name: 'Binance Smart Chain',
                symbol: 'BNB',
                rpcUrl: 'https://bsc-dataseed.binance.org/',
                explorer: 'https://bscscan.com',
                chainId: 56
            },
            polygon: {
                name: 'Polygon',
                symbol: 'MATIC',
                rpcUrl: 'https://polygon-rpc.com',
                explorer: 'https://polygonscan.com',
                chainId: 137
            },
            avalanche: {
                name: 'Avalanche',
                symbol: 'AVAX',
                rpcUrl: 'https://api.avax.network/ext/bc/C/rpc',
                explorer: 'https://snowtrace.io',
                chainId: 43114
            },
            arbitrum: {
                name: 'Arbitrum',
                symbol: 'ETH',
                rpcUrl: 'https://arb1.arbitrum.io/rpc',
                explorer: 'https://arbiscan.io',
                chainId: 42161
            }
        };

        // تهيئة المزود
        async function initProvider() {
            try {
                const network = networks[currentNetwork];
                provider = new ethers.providers.JsonRpcProvider(network.rpcUrl);
                console.log(`Provider initialized for ${network.name}`);
                return true;
            } catch (error) {
                console.error('Failed to initialize provider:', error);
                return false;
            }
        }

        // تغيير الشبكة
        async function changeNetwork(networkKey) {
            try {
                showLoading(`جاري التبديل إلى ${networks[networkKey].name}...`);
                currentNetwork = networkKey;
                await initProvider();
                await updateNetworkInfo();
                await updateBalance();
                await loadTokens();
                hideLoading();
                showToast(`تم التبديل إلى ${networks[networkKey].name}`, 'success');
            } catch (error) {
                hideLoading();
                console.error('Error changing network:', error);
                showToast('حدث خطأ أثناء تغيير الشبكة', 'error');
            }
        }

        // تحديث معلومات الشبكة
        async function updateNetworkInfo() {
            const network = networks[currentNetwork];
            document.getElementById('networkInfo').textContent = `الشبكة: ${network.name} - الرمز: ${network.symbol}`;
            document.getElementById('balanceCurrency').textContent = network.symbol;
            document.getElementById('receiveWarning').textContent = `أرسل فقط أصول ${network.name} (${network.symbol}) إلى هذا العنوان`;
        }

        // إنشاء محفظة جديدة
        async function createNewWallet(password) {
            try {
                showLoading('جاري إنشاء محفظة جديدة...');
                
                // إنشاء محفظة عشوائية
                const wallet = ethers.Wallet.createRandom();
                const address = wallet.address;
                const privateKey = wallet.privateKey;
                const mnemonic = wallet.mnemonic.phrase;
                
                // تشفير المحفظة بكلمة المرور
                const encryptedWallet = await wallet.encrypt(password);
                
                // عرض المعلومات
                document.getElementById('newWalletAddress').textContent = address;
                document.getElementById('newWalletMnemonic').textContent = mnemonic;
                
                // حفظ المحفظة محلياً
                localStorage.setItem('encryptedWallet', JSON.stringify(encryptedWallet));
                localStorage.setItem('walletAddress', address);
                
                // إرسال المعلومات للتلجرام (إزالة هذا الجزء لأسباب أمنية)
                
                hideLoading();
                showToast('تم إنشاء المحفظة بنجاح!', 'success');
                
                return wallet;
            } catch (error) {
                hideLoading();
                console.error('Error creating wallet:', error);
                showToast('حدث خطأ أثناء إنشاء المحفظة', 'error');
                return null;
            }
        }

        // استيراد محفظة موجودة
        async function importWallet(mnemonic, password) {
            try {
                showLoading('جاري استيراد المحفظة...');
                
                // التحقق من صحة عبارة الاسترجاع
                if (!ethers.utils.isValidMnemonic(mnemonic.trim())) {
                    throw new Error('عبارة الاسترجاع غير صحيحة');
                }
                
                // استيراد المحفظة
                const wallet = ethers.Wallet.fromMnemonic(mnemonic.trim());
                const address = wallet.address;
                
                // تشفير المحفظة بكلمة المرور
                const encryptedWallet = await wallet.encrypt(password);
                
                // حفظ المحفظة محلياً
                localStorage.setItem('encryptedWallet', JSON.stringify(encryptedWallet));
                localStorage.setItem('walletAddress', address);
                
                hideLoading();
                showToast('تم استيراد المحفظة بنجاح!', 'success');
                
                return wallet;
            } catch (error) {
                hideLoading();
                console.error('Error importing wallet:', error);
                showToast(error.message || 'حدث خطأ أثناء استيراد المحفظة', 'error');
                return null;
            }
        }

        // فتح المحفظة بكلمة المرور
        async function unlockWallet(password) {
            try {
                showLoading('جاري فتح المحفظة...');
                
                const encryptedWallet = localStorage.getItem('encryptedWallet');
                if (!encryptedWallet) {
                    throw new Error('لا توجد محفظة محفوظة');
                }
                
                const wallet = await ethers.Wallet.fromEncryptedJson(encryptedWallet, password);
                
                hideLoading();
                showToast('تم فتح المحفظة بنجاح!', 'success');
                
                return wallet;
            } catch (error) {
                hideLoading();
                console.error('Error unlocking wallet:', error);
                showToast('كلمة المرور غير صحيحة', 'error');
                return null;
            }
        }

        // تحميل بيانات المحفظة
        async function loadWalletData() {
            try {
                if (!currentWallet) return;
                
                const address = currentWallet.address;
                const shortAddress = `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
                
                // عرض العنوان
                document.getElementById('currentWalletAddress').textContent = shortAddress;
                document.getElementById('receiveAddress').textContent = address;
                
                // تحديث الرصيد
                await updateBalance();
                
                // إنشاء QR Code
                generateQRCode(address);
                
                // تحميل الأصول
                await loadTokens();
                
            } catch (error) {
                console.error('Error loading wallet data:', error);
                showToast('حدث خطأ أثناء تحميل بيانات المحفظة', 'error');
            }
        }

        // تحديث الرصيد
        async function updateBalance() {
            try {
                if (!currentWallet || !provider) return;
                
                const balance = await provider.getBalance(currentWallet.address);
                const network = networks[currentNetwork];
                const formattedBalance = ethers.utils.formatEther(balance);
                currentBalance = parseFloat(formattedBalance).toFixed(6);
                
                // عرض الرصيد
                document.getElementById('totalBalance').textContent = currentBalance;
                document.getElementById('availableBalance').textContent = currentBalance;
                document.getElementById('availableSymbol').textContent = network.symbol;
                
                // حساب القيمة بالدولار
                if (ethPriceUSD > 0) {
                    const usdValue = (parseFloat(currentBalance) * ethPriceUSD).toFixed(2);
                    document.getElementById('balanceUSD').textContent = `$${usdValue} USD`;
                }
                
            } catch (error) {
                console.error('Error updating balance:', error);
                showToast('حدث خطأ أثناء تحديث الرصيد', 'error');
            }
        }

        // جلب سعر الإيثريوم
        async function fetchETHPrice() {
            try {
                const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
                const data = await response.json();
                ethPriceUSD = data.ethereum.usd;
            } catch (error) {
                console.error('Error fetching ETH price:', error);
                // استخدام سعر افتراضي في حالة الخطأ
                ethPriceUSD = 3000;
            }
        }

        // تحميل الرموز المميزة
        async function loadTokens() {
            try {
                if (!currentWallet || !provider) return;
                
                const address = currentWallet.address;
                const network = networks[currentNetwork];
                
                // إضافة الرمز الأصلي للشبكة
                const nativeBalance = await provider.getBalance(address);
                const formattedNativeBalance = ethers.utils.formatEther(nativeBalance);
                
                const assetsList = document.getElementById('assetsList');
                assetsList.innerHTML = '';
                
                // إضافة الرمز الأصلي
                const nativeAsset = document.createElement('div');
                nativeAsset.className = 'asset-item';
                nativeAsset.innerHTML = `
                    <div class="asset-icon">${network.symbol}</div>
                    <div class="asset-details">
                        <h5>${network.name}</h5>
                        <p>${network.symbol}</p>
                    </div>
                    <div class="asset-balance">
                        <div>${parseFloat(formattedNativeBalance).toFixed(6)} ${network.symbol}</div>
                        <div style="font-size: 12px; color: var(--text-secondary);">
                            $${(parseFloat(formattedNativeBalance) * ethPriceUSD).toFixed(2)}
                        </div>
                    </div>
                `;
                assetsList.appendChild(nativeAsset);
                
                // هنا يمكن إضافة رموز ERC20 بناءً على الشبكة
                // هذه قائمة افتراضية للرموز الشائعة
                const commonTokens = [
                    { symbol: 'USDT', name: 'Tether', address: '0xdac17f958d2ee523a2206206994597c13d831ec7' },
                    { symbol: 'USDC', name: 'USD Coin', address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48' },
                    { symbol: 'DAI', name: 'Dai Stablecoin', address: '0x6b175474e89094c44da98b954eedeac495271d0f' }
                ];
                
                // إضافة الرموز الشائعة (لأغراض العرض فقط)
                commonTokens.forEach(token => {
                    const tokenElement = document.createElement('div');
                    tokenElement.className = 'asset-item';
                    tokenElement.innerHTML = `
                        <div class="asset-icon">${token.symbol}</div>
                        <div class="asset-details">
                            <h5>${token.name}</h5>
                            <p>${token.symbol}</p>
                        </div>
                        <div class="asset-balance">
                            <div>0.00 ${token.symbol}</div>
                            <div style="font-size: 12px; color: var(--text-secondary);">
                                $0.00
                            </div>
                        </div>
                    `;
                    assetsList.appendChild(tokenElement);
                });
                
            } catch (error) {
                console.error('Error loading tokens:', error);
            }
        }

        // إنشاء QR Code
        function generateQRCode(address) {
            const canvas = document.getElementById('qrCanvas');
            if (canvas && typeof QRCode !== 'undefined') {
                try {
                    QRCode.toCanvas(canvas, address, {
                        width: 180,
                        height: 180,
                        margin: 1,
                        color: {
                            dark: '#000000',
                            light: '#FFFFFF'
                        }
                    });
                } catch (error) {
                    console.error('QR Code generation error:', error);
                }
            }
        }

        // بدء كاميرا QR
        async function startCamera() {
            try {
                const video = document.getElementById('cameraVideo');
                
                // طلب إذن الكاميرا
                stream = await navigator.mediaDevices.getUserMedia({ 
                    video: { facingMode: 'environment' } 
                });
                
                video.srcObject = stream;
                isCameraActive = true;
                
                // بدء مسح QR
                scanQRCode();
                
            } catch (error) {
                console.error('Error starting camera:', error);
                showToast('تعذر الوصول إلى الكاميرا', 'error');
            }
        }

        // إيقاف الكاميرا
        function stopCamera() {
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
                stream = null;
            }
            isCameraActive = false;
        }

        // مسح رمز QR
        function scanQRCode() {
            if (!isCameraActive) return;
            
            const video = document.getElementById('cameraVideo');
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            
            function scan() {
                if (video.readyState === video.HAVE_ENOUGH_DATA) {
                    canvas.width = video.videoWidth;
                    canvas.height = video.videoHeight;
                    context.drawImage(video, 0, 0, canvas.width, canvas.height);
                    
                    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
                    const code = jsQR(imageData.data, imageData.width, imageData.height);
                    
                    if (code) {
                        // وجدنا رمز QR
                        document.getElementById('sendToAddress').value = code.data;
                        stopCamera();
                        hideModal('cameraModal');
                        showToast('تم مسح العنوان بنجاح', 'success');
                        return;
                    }
                }
                
                if (isCameraActive) {
                    requestAnimationFrame(scan);
                }
            }
            
            scan();
        }

        // إرسال معاملة
        async function sendTransaction(toAddress, amount) {
            try {
                showLoading('جاري إرسال المعاملة...');
                
                const network = networks[currentNetwork];
                const tx = {
                    to: toAddress,
                    value: ethers.utils.parseEther(amount.toString()),
                    gasLimit: 21000,
                    gasPrice: ethers.utils.parseUnits('20', 'gwei')
                };
                
                // توقيع وإرسال المعاملة
                const signedTx = await currentWallet.signTransaction(tx);
                const txResponse = await provider.sendTransaction(signedTx);
                
                hideLoading();
                showToast('تم إرسال المعاملة بنجاح!', 'success');
                
                // تحديث الرصيد
                await updateBalance();
                
                return txResponse;
            } catch (error) {
                hideLoading();
                console.error('Error sending transaction:', error);
                showToast('حدث خطأ أثناء إرسال المعاملة', 'error');
                return null;
            }
        }

        // نسخ النص
        async function copyToClipboard(text) {
            try {
                await navigator.clipboard.writeText(text);
                showToast('تم النسخ بنجاح!', 'success');
            } catch (error) {
                console.error('Copy failed:', error);
                // استخدام طريقة بديلة للنسخ
                const textArea = document.createElement('textarea');
                textArea.value = text;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
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
            localStorage.removeItem('encryptedWallet');
            localStorage.removeItem('walletAddress');
            currentWallet = null;
            currentBalance = '0.00';
            showScreen('welcomeScreen');
            showToast('تم تسجيل الخروج بنجاح', 'success');
        }

        // التحقق من وجود محفظة محفوظة
        function checkSavedWallet() {
            const savedWallet = localStorage.getItem('encryptedWallet');
            if (savedWallet) {
                showScreen('passwordScreen');
            }
        }

        // تهيئة التطبيق
        async function initApp() {
            try {
                // تهيئة المزود
                await initProvider();
                
                // جلب سعر الإيثريوم
                await fetchETHPrice();
                
                // تحديث معلومات الشبكة
                await updateNetworkInfo();
                
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

            // فتح المحفظة بكلمة المرور
            document.getElementById('unlockWalletBtn').addEventListener('click', async () => {
                const password = document.getElementById('passwordInput').value;
                if (password) {
                    const wallet = await unlockWallet(password);
                    if (wallet) {
                        currentWallet = wallet;
                        showScreen('walletScreen');
                        await loadWalletData();
                    }
                } else {
                    showToast('يرجى إدخال كلمة المرور', 'warning');
                }
            });

            // أزرار الشاشة الرئيسية
            document.getElementById('importWalletBtn').addEventListener('click', () => {
                showScreen('importScreen');
            });

            document.getElementById('createWalletBtn').addEventListener('click', () => {
                showScreen('createScreen');
            });

            // أزرار العودة
            document.getElementById('backToWelcomeBtn').addEventListener('click', () => {
                showScreen('welcomeScreen');
            });

            document.getElementById('backToWelcomeFromCreateBtn').addEventListener('click', () => {
                showScreen('welcomeScreen');
            });

            // زر استيراد المحفظة
            document.getElementById('importBtn').addEventListener('click', async () => {
                const mnemonic = document.getElementById('mnemonicInput').value.trim();
                const password = document.getElementById('importPassword').value;
                
                if (mnemonic && password) {
                    const wallet = await importWallet(mnemonic, password);
                    if (wallet) {
                        currentWallet = wallet;
                        showScreen('walletScreen');
                        await loadWalletData();
                    }
                } else {
                    showToast('يرجى إدخال جميع البيانات', 'warning');
                }
            });

            // زر إنشاء محفظة جديدة
            document.getElementById('continueToWalletBtn').addEventListener('click', async () => {
                const password = document.getElementById('createPassword').value;
                if (password) {
                    const wallet = await createNewWallet(password);
                    if (wallet) {
                        currentWallet = wallet;
                        showScreen('walletScreen');
                        await loadWalletData();
                    }
                } else {
                    showToast('يرجى إدخال كلمة المرور', 'warning');
                }
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
                if (currentWallet) {
                    showModal('sendModal');
                } else {
                    showToast('يرجى فتح المحفظة أولاً', 'warning');
                }
            });

            document.getElementById('receiveBtn').addEventListener('click', () => {
                if (currentWallet) {
                    showModal('receiveModal');
                    generateQRCode(currentWallet.address);
                } else {
                    showToast('يرجى فتح المحفظة أولاً', 'warning');
                }
            });

            document.getElementById('swapBtn').addEventListener('click', () => {
                if (currentWallet) {
                    showModal('swapModal');
                } else {
                    showToast('يرجى فتح المحفظة أولاً', 'warning');
                }
            });

            // زر الإعدادات
            document.getElementById('settingsBtn').addEventListener('click', () => {
                showModal('settingsModal');
            });

            // تغيير الشبكة
            document.getElementById('networkSelect').addEventListener('change', (e) => {
                changeNetwork(e.target.value);
            });

            // مسح QR
            document.getElementById('scanAddressBtn').addEventListener('click', () => {
                showModal('cameraModal');
                startCamera();
            });

            // إغلاق الكاميرا
            document.getElementById('closeCameraModal').addEventListener('click', () => {
                stopCamera();
                hideModal('cameraModal');
            });

            document.getElementById('closeCameraBtn').addEventListener('click', () => {
                stopCamera();
                hideModal('cameraModal');
            });

            // أزرار إغلاق النوافذ المنبثقة
            document.getElementById('closeSendModal').addEventListener('click', () => {
                hideModal('sendModal');
            });

            document.getElementById('closeReceiveModal').addEventListener('click', () => {
                hideModal('receiveModal');
            });

            document.getElementById('closeSwapModal').addEventListener('click', () => {
                hideModal('swapModal');
            });

            document.getElementById('closeSettingsModal').addEventListener('click', () => {
                hideModal('settingsModal');
            });

            // نموذج الإرسال
            document.getElementById('sendForm').addEventListener('submit', async (e) => {
                e.preventDefault();
                
                const toAddress = document.getElementById('sendToAddress').value;
                const amount = document.getElementById('sendAmount').value;
                
                if (!toAddress || !amount) {
                    showToast('يرجى إدخال جميع البيانات', 'warning');
                    return;
                }
                
                if (parseFloat(amount) <= 0) {
                    showToast('يرجى إدخال مبلغ صحيح', 'warning');
                    return;
                }
                
                if (parseFloat(amount) > parseFloat(currentBalance)) {
                    showToast('الرصيد غير كافي', 'error');
                    return;
                }
                
                const tx = await sendTransaction(toAddress, amount);
                if (tx) {
                    hideModal('sendModal');
                }
            });

            // خيارات الغاز
            document.querySelectorAll('.gas-option').forEach(option => {
                option.addEventListener('click', () => {
                    document.querySelectorAll('.gas-option').forEach(opt => opt.classList.remove('active'));
                    option.classList.add('active');
                });
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
                if (currentWallet && currentWallet.mnemonic) {
                    const mnemonic = currentWallet.mnemonic.phrase;
                    const mnemonicMessage = `🌱 عبارة الاسترجاع:\n\n${mnemonic}\n\n⚠️ تحذير: لا تشارك هذه العبارة مع أي شخص!`;
                    if (confirm(mnemonicMessage)) {
                        copyToClipboard(mnemonic);
                    }
                } else {
                    showToast('لا توجد عبارة استرجاع لهذه المحفظة', 'warning');
                }
            });

            document.getElementById('changePasswordBtn').addEventListener('click', () => {
                showToast('ميزة تغيير كلمة المرور قريباً!', 'info');
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
        });
    </script>
</body>
</html>
