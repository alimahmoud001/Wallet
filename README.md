
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
            color: var(--text-secondary);
            padding: var(--spacing-xs) var(--spacing-sm);
            cursor: pointer;
            transition: all var(--transition-fast);
