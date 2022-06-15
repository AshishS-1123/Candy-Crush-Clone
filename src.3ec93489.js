// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"VVFr":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Signal = /** @class */ (function () {
    function Signal() {
        this.slots = [];
        this.onces = [];
    }
    Signal.prototype.add = function (slot) {
        typeof slot === 'function' && this.slots.push(slot);
        return this;
    };
    Signal.prototype.once = function (slot) {
        typeof slot === 'function' && this.onces.push(slot);
        return this;
    };
    Signal.prototype.remove = function (slot) {
        this.slots = this.slots.filter(function (item) { return item !== slot; });
        this.onces = this.onces.filter(function (item) { return item !== slot; });
        return this;
    };
    Signal.prototype.emit = function (payload) {
        this.notify(this.slots, payload);
        this.notify(this.onces, payload);
        this.onces = [];
    };
    /*
     * Use reverse loop with implicit comparison.
     * http://jsbench.github.io/#174d623c29798680e44b867dcf9732e7
     */
    Signal.prototype.notify = function (slots, payload) {
        for (var i = slots.length; i--;) {
            var slot = slots[i];
            slot.call(slot, payload || null);
        }
    };
    return Signal;
}());
exports.Signal = Signal;

},{}],"Rjg3":[function(require,module,exports) {
module.exports = "/Candy-Crush-Clone/EmptyCell.47ec8fda.png";
},{}],"C41x":[function(require,module,exports) {
module.exports = "/Candy-Crush-Clone/Blue_Simple.e5fba97a.png";
},{}],"RuAB":[function(require,module,exports) {
module.exports = "/Candy-Crush-Clone/Green_Simple.a74a0442.png";
},{}],"n7OE":[function(require,module,exports) {
module.exports = "/Candy-Crush-Clone/Orange_Simple.e0f02081.png";
},{}],"gaOG":[function(require,module,exports) {
module.exports = "/Candy-Crush-Clone/Purple_Simple.ad7169e4.png";
},{}],"sxH9":[function(require,module,exports) {
module.exports = "/Candy-Crush-Clone/Red_Simple.029c2dc2.png";
},{}],"Wwd5":[function(require,module,exports) {
module.exports = "/Candy-Crush-Clone/Yellow_Simple.eadff8d8.png";
},{}],"S9Ko":[function(require,module,exports) {
module.exports = "/Candy-Crush-Clone/Blue.7ca98d42.png";
},{}],"b5nQ":[function(require,module,exports) {
module.exports = "/Candy-Crush-Clone/Green.68723db4.png";
},{}],"lPL6":[function(require,module,exports) {
module.exports = "/Candy-Crush-Clone/Orange.b025c576.png";
},{}],"jqxC":[function(require,module,exports) {
module.exports = "/Candy-Crush-Clone/Purple.874330ff.png";
},{}],"vhiX":[function(require,module,exports) {
module.exports = "/Candy-Crush-Clone/Red.1a02a727.png";
},{}],"ATnx":[function(require,module,exports) {
module.exports = "/Candy-Crush-Clone/Yellow.ac4f5dde.png";
},{}],"WXE8":[function(require,module,exports) {
module.exports = "/Candy-Crush-Clone/Blue.f8e77744.png";
},{}],"HHqy":[function(require,module,exports) {
module.exports = "/Candy-Crush-Clone/Green.2f5ad4ae.png";
},{}],"tAqN":[function(require,module,exports) {
module.exports = "/Candy-Crush-Clone/Orange.462770df.png";
},{}],"PMXG":[function(require,module,exports) {
module.exports = "/Candy-Crush-Clone/Purple.d1e9fcbc.png";
},{}],"XiN0":[function(require,module,exports) {
module.exports = "/Candy-Crush-Clone/Red.d87daaf8.png";
},{}],"qzYI":[function(require,module,exports) {
module.exports = "/Candy-Crush-Clone/Yellow.b55e6f7e.png";
},{}],"xeli":[function(require,module,exports) {
module.exports = "/Candy-Crush-Clone/Blue.3f0cbd38.png";
},{}],"dNku":[function(require,module,exports) {
module.exports = "/Candy-Crush-Clone/Green.561a1b9c.png";
},{}],"Vqqh":[function(require,module,exports) {
module.exports = "/Candy-Crush-Clone/Orange.46afe065.png";
},{}],"s7ot":[function(require,module,exports) {
module.exports = "/Candy-Crush-Clone/Purple.3e7bb198.png";
},{}],"Gvt6":[function(require,module,exports) {
module.exports = "/Candy-Crush-Clone/Red.94294673.png";
},{}],"q6g4":[function(require,module,exports) {
module.exports = "/Candy-Crush-Clone/Yellow.db4a0d1b.png";
},{}],"iVX7":[function(require,module,exports) {
module.exports = "/Candy-Crush-Clone/Multicolored.93ac6782.png";
},{}],"tYQ1":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpritePool = void 0;

var _EmptyCell = _interopRequireDefault(require("~images/EmptyCell.png"));

var _Blue_Simple = _interopRequireDefault(require("~/images/SimpleCandies/Blue_Simple.png"));

var _Green_Simple = _interopRequireDefault(require("~/images/SimpleCandies/Green_Simple.png"));

var _Orange_Simple = _interopRequireDefault(require("~/images/SimpleCandies/Orange_Simple.png"));

var _Purple_Simple = _interopRequireDefault(require("~/images/SimpleCandies/Purple_Simple.png"));

var _Red_Simple = _interopRequireDefault(require("~/images/SimpleCandies/Red_Simple.png"));

var _Yellow_Simple = _interopRequireDefault(require("~images/SimpleCandies/Yellow_Simple.png"));

var _Blue = _interopRequireDefault(require("~/images/StripedCandies/Horizontal/Blue.png"));

var _Green = _interopRequireDefault(require("~/images/StripedCandies/Horizontal/Green.png"));

var _Orange = _interopRequireDefault(require("~/images/StripedCandies/Horizontal/Orange.png"));

var _Purple = _interopRequireDefault(require("~/images/StripedCandies/Horizontal/Purple.png"));

var _Red = _interopRequireDefault(require("~/images/StripedCandies/Horizontal/Red.png"));

var _Yellow = _interopRequireDefault(require("~/images/StripedCandies/Horizontal/Yellow.png"));

var _Blue2 = _interopRequireDefault(require("~/images/StripedCandies/Vertical/Blue.png"));

var _Green2 = _interopRequireDefault(require("~/images/StripedCandies/Vertical/Green.png"));

var _Orange2 = _interopRequireDefault(require("~/images/StripedCandies/Vertical/Orange.png"));

var _Purple2 = _interopRequireDefault(require("~/images/StripedCandies/Vertical/Purple.png"));

var _Red2 = _interopRequireDefault(require("~/images/StripedCandies/Vertical/Red.png"));

var _Yellow2 = _interopRequireDefault(require("~/images/StripedCandies/Vertical/Yellow.png"));

var _Blue3 = _interopRequireDefault(require("~/images/HardCandy/Blue.png"));

var _Green3 = _interopRequireDefault(require("~/images/HardCandy/Green.png"));

var _Orange3 = _interopRequireDefault(require("~/images/HardCandy/Orange.png"));

var _Purple3 = _interopRequireDefault(require("~/images/HardCandy/Purple.png"));

var _Red3 = _interopRequireDefault(require("~/images/HardCandy/Red.png"));

var _Yellow3 = _interopRequireDefault(require("~/images/HardCandy/Yellow.png"));

var _Multicolored = _interopRequireDefault(require("~/images/SpecialCandies/Multicolored.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SpritePool =
/** @class */
function () {
  function SpritePool() {
    // Image for empty cell.
    this.emptySimple = new Image(); // Images for simple candies.

    this.redSimple = new Image();
    this.orangeSimple = new Image();
    this.blueSimple = new Image();
    this.greenSimple = new Image();
    this.yellowSimple = new Image();
    this.purpleSimple = new Image(); // Images for vertical striped cells.

    this.redVStripe = new Image();
    this.orangeVStripe = new Image();
    this.blueVStripe = new Image();
    this.greenVStripe = new Image();
    this.yellowVStripe = new Image();
    this.purpleVStripe = new Image(); // Images for horizontal striped cells.

    this.redHStripe = new Image();
    this.orangeHStripe = new Image();
    this.blueHStripe = new Image();
    this.greenHStripe = new Image();
    this.yellowHStripe = new Image();
    this.purpleHStripe = new Image(); // Images for hard candies.

    this.redHard = new Image();
    this.orangeHard = new Image();
    this.blueHard = new Image();
    this.greenHard = new Image();
    this.yellowHard = new Image();
    this.purpleHard = new Image(); // Special candies.

    this.multicolored = new Image();
    this.emptySimple.src = _EmptyCell.default;
    this.redSimple.src = _Red_Simple.default;
    this.orangeSimple.src = _Orange_Simple.default;
    this.blueSimple.src = _Blue_Simple.default;
    this.greenSimple.src = _Green_Simple.default;
    this.yellowSimple.src = _Yellow_Simple.default;
    this.purpleSimple.src = _Purple_Simple.default;
    this.redHStripe.src = _Red.default;
    this.orangeHStripe.src = _Orange.default;
    this.blueHStripe.src = _Blue.default;
    this.greenHStripe.src = _Green.default;
    this.yellowHStripe.src = _Yellow.default;
    this.purpleHStripe.src = _Purple.default;
    this.redVStripe.src = _Red2.default;
    this.orangeVStripe.src = _Orange2.default;
    this.blueVStripe.src = _Blue2.default;
    this.greenVStripe.src = _Green2.default;
    this.yellowVStripe.src = _Yellow2.default;
    this.purpleVStripe.src = _Purple2.default;
    this.redHard.src = _Red3.default;
    this.orangeHard.src = _Orange3.default;
    this.blueHard.src = _Blue3.default;
    this.greenHard.src = _Green3.default;
    this.yellowHard.src = _Yellow3.default;
    this.purpleHard.src = _Purple3.default;
    this.multicolored.src = _Multicolored.default;
  }

  SpritePool.prototype.getSimpleCandy = function (color) {
    switch (color) {
      case 'RED':
        return this.redSimple;

      case 'ORANGE':
        return this.orangeSimple;

      case 'BLUE':
        return this.blueSimple;

      case 'GREEN':
        return this.greenSimple;

      case 'YELLOW':
        return this.yellowSimple;

      case 'PURPLE':
        return this.purpleSimple;

      default:
        return this.emptySimple;
    }
  };

  SpritePool.prototype.getHardCandy = function (color) {
    switch (color) {
      case 'RED':
        return this.redHard;

      case 'ORANGE':
        return this.orangeHard;

      case 'BLUE':
        return this.blueHard;

      case 'GREEN':
        return this.greenHard;

      case 'YELLOW':
        return this.yellowHard;

      case 'PURPLE':
        return this.purpleHard;

      default:
        return this.emptySimple;
    }
  };

  SpritePool.prototype.getStripedVertical = function (color) {
    switch (color) {
      case 'RED':
        return this.redVStripe;

      case 'ORANGE':
        return this.orangeVStripe;

      case 'BLUE':
        return this.blueVStripe;

      case 'GREEN':
        return this.greenVStripe;

      case 'YELLOW':
        return this.yellowVStripe;

      case 'PURPLE':
        return this.purpleVStripe;

      default:
        return this.emptySimple;
    }
  };

  SpritePool.prototype.getStripedHorizontal = function (color) {
    switch (color) {
      case 'RED':
        return this.redHStripe;

      case 'ORANGE':
        return this.orangeHStripe;

      case 'BLUE':
        return this.blueHStripe;

      case 'GREEN':
        return this.greenHStripe;

      case 'YELLOW':
        return this.yellowHStripe;

      case 'PURPLE':
        return this.purpleHStripe;

      default:
        return this.emptySimple;
    }
  };

  SpritePool.prototype.getMulticolored = function () {
    return this.multicolored;
  };

  return SpritePool;
}();

exports.SpritePool = SpritePool;
},{"~images/EmptyCell.png":"Rjg3","~/images/SimpleCandies/Blue_Simple.png":"C41x","~/images/SimpleCandies/Green_Simple.png":"RuAB","~/images/SimpleCandies/Orange_Simple.png":"n7OE","~/images/SimpleCandies/Purple_Simple.png":"gaOG","~/images/SimpleCandies/Red_Simple.png":"sxH9","~images/SimpleCandies/Yellow_Simple.png":"Wwd5","~/images/StripedCandies/Horizontal/Blue.png":"S9Ko","~/images/StripedCandies/Horizontal/Green.png":"b5nQ","~/images/StripedCandies/Horizontal/Orange.png":"lPL6","~/images/StripedCandies/Horizontal/Purple.png":"jqxC","~/images/StripedCandies/Horizontal/Red.png":"vhiX","~/images/StripedCandies/Horizontal/Yellow.png":"ATnx","~/images/StripedCandies/Vertical/Blue.png":"WXE8","~/images/StripedCandies/Vertical/Green.png":"HHqy","~/images/StripedCandies/Vertical/Orange.png":"tAqN","~/images/StripedCandies/Vertical/Purple.png":"PMXG","~/images/StripedCandies/Vertical/Red.png":"XiN0","~/images/StripedCandies/Vertical/Yellow.png":"qzYI","~/images/HardCandy/Blue.png":"xeli","~/images/HardCandy/Green.png":"dNku","~/images/HardCandy/Orange.png":"Vqqh","~/images/HardCandy/Purple.png":"s7ot","~/images/HardCandy/Red.png":"Gvt6","~/images/HardCandy/Yellow.png":"q6g4","~/images/SpecialCandies/Multicolored.png":"iVX7"}],"J8Df":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Global = exports.EventBus = void 0;

var _signalTs = require("signal-ts");

var _SpritePool = require("./services/SpritePool");

var EventBus;
exports.EventBus = EventBus;

(function (EventBus) {
  // Emitted by EventHandler to when cells are clicked.
  EventBus.cellClickEvent = new _signalTs.Signal(); // Sent to CandyMatchHandler to check if swapping is allowed.

  EventBus.swapCellRequest = new _signalTs.Signal(); // Sent to CandyMatchHandler to check all cells on board for matching candies.

  EventBus.destroyCandyMatches = new _signalTs.Signal(); // Used for updating board when controllers make changes in board.

  EventBus.updateBoard = new _signalTs.Signal(); // Updates canvas with the swapped cells.

  EventBus.renderSwapAnimation = new _signalTs.Signal(); // Re-render canvas.

  EventBus.renderBoard = new _signalTs.Signal(); // Destroy candies.

  EventBus.destroyCandies = new _signalTs.Signal(); // Apply gravity to board.

  EventBus.applyGravity = new _signalTs.Signal(); // Draw gravity animation on board.

  EventBus.renderGravityAnimation = new _signalTs.Signal(); // For tracking score of user.

  EventBus.incrementScore = new _signalTs.Signal(); // For tracking moves left of user.

  EventBus.decrementMoves = new _signalTs.Signal(); // Signal to notify that the game is over.

  EventBus.gameOver = new _signalTs.Signal();
})(EventBus || (exports.EventBus = EventBus = {}));

var Global;
exports.Global = Global;

(function (Global) {
  Global.spritePool = new _SpritePool.SpritePool();
})(Global || (exports.Global = Global = {}));
},{"signal-ts":"VVFr","./services/SpritePool":"tYQ1"}],"ThQ1":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiColoredCell = void 0;

var _EventBus = require("~/EventBus");

var MultiColoredCell =
/** @class */
function () {
  function MultiColoredCell() {
    this.copy = function () {
      return new MultiColoredCell();
    };

    this.cellType = 'MULTICOLORED';
    this.colorType = 'NONE';
    this.isVisible = true;
    this.image = _EventBus.Global.spritePool.getMulticolored();
  }

  return MultiColoredCell;
}();

exports.MultiColoredCell = MultiColoredCell;
},{"~/EventBus":"J8Df"}],"gxXc":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HardCell = void 0;

var _EventBus = require("~/EventBus");

var HardCell =
/** @class */
function () {
  function HardCell(color) {
    var _this = this;

    this.copy = function () {
      return new HardCell(_this.colorType);
    };

    this.cellType = 'HARD';
    this.colorType = color;
    this.isVisible = true; // this.image.src = assignImageFromColor(color);

    this.image = _EventBus.Global.spritePool.getHardCandy(color);
  }

  return HardCell;
}();

exports.HardCell = HardCell;
},{"~/EventBus":"J8Df"}],"uO1H":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.delay = delay;
exports.ANIMATION_THROTTLE = exports.ANIMATION_DURATION = exports.Scores = exports.PURPLE = exports.YELLOW = exports.GREEN = exports.BLUE = exports.ORANGE = exports.RED = exports.MOVES = exports.COLUMNS = exports.ROWS = exports.BOARD_HEIGHT = exports.BOARD_WIDTH = exports.CELL_PADDING = exports.CELL_HEIGHT = exports.CELL_WIDTH = void 0;
// Define some constants here
// Size of cells.
var CELL_WIDTH = 36;
exports.CELL_WIDTH = CELL_WIDTH;
var CELL_HEIGHT = 36;
exports.CELL_HEIGHT = CELL_HEIGHT;
var CELL_PADDING = 14; // Size of game board.

exports.CELL_PADDING = CELL_PADDING;
var totalWidth = CELL_WIDTH + CELL_PADDING;
var BOARD_WIDTH = Math.floor(innerWidth * 0.8 / totalWidth) * totalWidth;
exports.BOARD_WIDTH = BOARD_WIDTH;
var BOARD_HEIGHT = Math.floor(innerHeight * 0.8 / totalWidth) * totalWidth; // Rows and columns of candies

exports.BOARD_HEIGHT = BOARD_HEIGHT;
var ROWS = Math.floor((BOARD_HEIGHT - CELL_PADDING) / (CELL_HEIGHT + CELL_PADDING));
exports.ROWS = ROWS;
var COLUMNS = Math.floor((BOARD_WIDTH - CELL_PADDING) / (CELL_WIDTH + CELL_PADDING)); // Number of moves user can make in each round.

exports.COLUMNS = COLUMNS;
var MOVES = 5; // Colors supported for candies

exports.MOVES = MOVES;
var RED = 'RED';
exports.RED = RED;
var ORANGE = 'ORANGE';
exports.ORANGE = ORANGE;
var BLUE = 'BLUE';
exports.BLUE = BLUE;
var GREEN = 'GREEN';
exports.GREEN = GREEN;
var YELLOW = 'YELLOW';
exports.YELLOW = YELLOW;
var PURPLE = 'PURPLE';
exports.PURPLE = PURPLE;
var Scores = {
  'SIMPLE': 1,
  'STRIPED_V': 10,
  'STRIPED_H': 10,
  'HARD': 15,
  'MULTICOLORED': 20
};
exports.Scores = Scores;
var ANIMATION_DURATION = 500;
exports.ANIMATION_DURATION = ANIMATION_DURATION;
var ANIMATION_THROTTLE = 100;
exports.ANIMATION_THROTTLE = ANIMATION_THROTTLE;

function delay(delayInms) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, delayInms);
  });
}
},{}],"iW1d":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkSpecialCandy = checkSpecialCandy;

function checkSpecialCandy(board, pos) {
  var countTop = 0;
  var countBottom = 0;
  var countLeft = 0;
  var countRight = 0; // Count the number of adjacent candies with color same as pos above it.

  for (var i = -1; i > -6; --i) {
    if (board.getColorAtCell({
      x: pos.x,
      y: pos.y + i
    }) == board.getColorAtCell(pos)) {
      ++countLeft;
    } else {
      break;
    }
  } // Count the number of adjacent candies with color same as pos below it.


  for (var i = 1; i < 6; ++i) {
    if (board.getColorAtCell({
      x: pos.x,
      y: pos.y + i
    }) == board.getColorAtCell(pos)) {
      ++countRight;
    } else {
      break;
    }
  } // Count the number of adjacent candies with color same as pos left of it.


  for (var i = -1; i > -6; --i) {
    if (board.getColorAtCell({
      x: pos.x + i,
      y: pos.y
    }) == board.getColorAtCell(pos)) {
      ++countTop;
    } else {
      break;
    }
  } // Count the number of adjacent candies with color same as pos right of it.


  for (var i = 1; i < 6; ++i) {
    if (board.getColorAtCell({
      x: pos.x + i,
      y: pos.y
    }) == board.getColorAtCell(pos)) {
      ++countBottom;
    } else {
      break;
    }
  } // Check if multicolored bomb can be formed.


  var multicolored = checkMulticolored(countTop, countBottom, countLeft, countRight, pos);

  if (multicolored.doesForm) {
    var returnValue_1 = {
      newCandyType: 'MULTICOLORED',
      newCandyColor: 'BLUE',
      destroyCandies: multicolored.destroyCandies
    };
    return returnValue_1;
  } // Check if hard candy can be formed.


  var hardCandy = checkHardCandy(countTop, countBottom, countLeft, countRight, pos);

  if (hardCandy.doesForm) {
    var returnValue_2 = {
      newCandyType: 'HARD',
      newCandyColor: board.getColorAtCell(pos),
      destroyCandies: hardCandy.destroyCandies
    };
    return returnValue_2;
  } // Check if striped candy can be formed.


  var vStripedCandy = checkVStripedCandy(countTop, countBottom, pos);

  if (vStripedCandy.doesForm) {
    var returnValue_3 = {
      newCandyType: 'STRIPED_V',
      newCandyColor: board.getColorAtCell(pos),
      destroyCandies: vStripedCandy.destroyCandies
    };
    return returnValue_3;
  }

  var hStripedCandy = checkHStripedCandy(countLeft, countRight, pos);

  if (hStripedCandy.doesForm) {
    var returnValue_4 = {
      newCandyType: 'STRIPED_H',
      newCandyColor: board.getColorAtCell(pos),
      destroyCandies: hStripedCandy.destroyCandies
    };
    return returnValue_4;
  }

  var returnValue = {
    newCandyType: 'SIMPLE',
    newCandyColor: board.getColorAtCell(pos),
    destroyCandies: getDestroyListForSimple(countTop, countBottom, countLeft, countRight, pos)
  };
  return returnValue;
}

function checkMulticolored(countTop, countBottom, countLeft, countRight, pos) {
  var destroyCandies = [];
  var doesForm = false;

  if (countLeft + countRight == 4) {
    doesForm = true;
    destroyCandies = [{
      x: pos.x,
      y: pos.y - 1
    }, {
      x: pos.x,
      y: pos.y - 2
    }, {
      x: pos.x,
      y: pos.y + 1
    }, {
      x: pos.x,
      y: pos.y + 2
    }];
  } else if (countTop + countBottom == 4) {
    doesForm = true;
    destroyCandies = [{
      x: pos.x - 1,
      y: pos.y
    }, {
      x: pos.x - 2,
      y: pos.y
    }, {
      x: pos.x + 1,
      y: pos.y
    }, {
      x: pos.x + 2,
      y: pos.y
    }];
  }

  return {
    doesForm: doesForm,
    destroyCandies: destroyCandies
  };
}

function checkHardCandy(countTop, countBottom, countLeft, countRight, pos) {
  var destroyCandies = [];
  var doesForm = false;

  if (countTop + countBottom == 2 && countLeft + countRight == 2) {
    doesForm = true; // Mark all top candies for destroy

    for (var i = 1; i < countTop + 1; ++i) {
      destroyCandies.push({
        x: pos.x - i,
        y: pos.y
      });
    } // Mark all bottom candies for destroy


    for (var i = 1; i < countBottom + 1; ++i) {
      destroyCandies.push({
        x: pos.x + i,
        y: pos.y
      });
    } // Mark all left candies for destroy


    for (var i = 1; i < countLeft + 1; ++i) {
      destroyCandies.push({
        x: pos.x,
        y: pos.y - i
      });
    } // Mark all right candies for destroy


    for (var i = 1; i < countRight + 1; ++i) {
      destroyCandies.push({
        x: pos.x,
        y: pos.y + i
      });
    }
  }

  return {
    doesForm: doesForm,
    destroyCandies: destroyCandies
  };
}

function checkVStripedCandy(countTop, countBottom, pos) {
  var destroyCandies = [];
  var doesForm = false;

  if (countTop + countBottom == 3) {
    doesForm = true; // Mark all top candies for destroy

    for (var i = 1; i < countTop + 1; ++i) {
      destroyCandies.push({
        x: pos.x - i,
        y: pos.y
      });
    } // Mark all bottom candies for destroy


    for (var i = 1; i < countBottom + 1; ++i) {
      destroyCandies.push({
        x: pos.x + i,
        y: pos.y
      });
    }
  }

  return {
    doesForm: doesForm,
    destroyCandies: destroyCandies
  };
}

function checkHStripedCandy(countLeft, countRight, pos) {
  var destroyCandies = [];
  var doesForm = false;

  if (countLeft + countRight == 3) {
    doesForm = true; // Mark all left candies for destroy

    for (var i = 1; i < countLeft + 1; ++i) {
      destroyCandies.push({
        x: pos.x,
        y: pos.y - i
      });
    } // Mark all right candies for destroy


    for (var i = 1; i < countRight + 1; ++i) {
      destroyCandies.push({
        x: pos.x,
        y: pos.y + i
      });
    }
  }

  return {
    doesForm: doesForm,
    destroyCandies: destroyCandies
  };
}

function getDestroyListForSimple(countTop, countBottom, countLeft, countRight, pos) {
  var destroyCandies = []; // This condition is very similar to HARD candy.
  // But, in this case, only one of them have to be correct.

  if (countTop + countBottom == 2) {
    destroyCandies.push(pos);

    for (var i = 1; i < countTop + 1; ++i) {
      destroyCandies.push({
        x: pos.x - i,
        y: pos.y
      });
    }

    for (var i = 1; i < countBottom + 1; ++i) {
      destroyCandies.push({
        x: pos.x + i,
        y: pos.y
      });
    }
  } else if (countLeft + countRight == 2) {
    destroyCandies.push(pos);

    for (var i = 1; i < countLeft + 1; ++i) {
      destroyCandies.push({
        x: pos.x,
        y: pos.y - i
      });
    }

    for (var i = 1; i < countRight + 1; ++i) {
      destroyCandies.push({
        x: pos.x,
        y: pos.y + i
      });
    }
  }

  return destroyCandies;
}
},{}],"hOIC":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StripedCell = void 0;

var _EventBus = require("~/EventBus");

var StripedCell =
/** @class */
function () {
  function StripedCell(color, isVertical) {
    var _this = this;

    this.copy = function () {
      return new StripedCell(_this.colorType, _this.cellType === 'STRIPED_V');
    };

    this.cellType = isVertical ? 'STRIPED_V' : 'STRIPED_H';
    this.colorType = color;
    this.isVisible = true;
    this.image = isVertical ? _EventBus.Global.spritePool.getStripedVertical(color) : _EventBus.Global.spritePool.getStripedHorizontal(color);
  }

  return StripedCell;
}();

exports.StripedCell = StripedCell;
},{"~/EventBus":"J8Df"}],"M7pn":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CandyMatchHandler = void 0;

var _EventBus = require("~/EventBus");

var _MultiColoredCell = require("~/models/Cells/MultiColoredCell");

var _HardCell = require("~/models/Cells/HardCell");

var _setup = require("~/setup");

var _specialCandyHandler = require("~/utils/specialCandyHandler");

var _StripedCell = require("~/models/Cells/StripedCell");

// Called by SwapHandler to match and destroy candies
var CandyMatchHandler =
/** @class */
function () {
  function CandyMatchHandler() {
    _EventBus.EventBus.swapCellRequest.add(this.handleSwapRequest.bind(this));

    _EventBus.EventBus.destroyCandyMatches.add(this.handleDestroyCandyMatches.bind(this));
  }

  CandyMatchHandler.prototype.handleSwapRequest = function (params) {
    // Check if first or second candy matched.
    if (this.checkIfCandiesMatch(params.board, params.first) || this.checkIfCandiesMatch(params.board, params.second)) {
      this.handleCandyMatch(params.board, params.first);
      this.handleCandyMatch(params.board, params.second);

      _EventBus.EventBus.decrementMoves.emit();

      return;
    } // If candies did not match, check if multicolored candy was special.


    var candiesToReplace = this.checkSwapWithSpecialCandy(params.board, params.first, params.second);

    if (candiesToReplace.length !== 0) {
      _EventBus.EventBus.destroyCandies.emit({
        board: params.board,
        candies: candiesToReplace
      });

      return;
    }

    (0, _setup.delay)(_setup.ANIMATION_THROTTLE).then(function () {
      // If candies did not match, emit signal to re swap these cells.
      _EventBus.EventBus.renderSwapAnimation.emit({
        second: {
          pos: params.first,
          img: params.board.getImageAtCell(params.first)
        },
        first: {
          pos: params.second,
          img: params.board.getImageAtCell(params.second)
        }
      });
    });
    (0, _setup.delay)(_setup.ANIMATION_DURATION).then(function () {
      // Update the board with this data.
      var temp = params.board.cells[params.first.x][params.first.y];
      params.board.cells[params.first.x][params.first.y] = params.board.cells[params.second.x][params.second.y];
      params.board.cells[params.second.x][params.second.y] = temp; // Update global board class.

      _EventBus.EventBus.updateBoard.emit(params.board);
    });
  }; // Scans board if there are three in line. Return if three in line.
  // Used to check whether to swap candies or destroy them.


  CandyMatchHandler.prototype.checkIfCandiesMatch = function (board, cellPos) {
    /*
                      ( top2 )
                      ( top1 )
      (left2) (left1) (cellPos) (right1) (right2)
                      (bottom1)
                      (bottom2)
     */
    // cellPos = {x: cellPos.y, y: cellPos.x};
    var top1 = {
      x: cellPos.x - 1,
      y: cellPos.y
    };
    var top2 = {
      x: cellPos.x - 2,
      y: cellPos.y
    };
    var bottom1 = {
      x: cellPos.x + 1,
      y: cellPos.y
    };
    var bottom2 = {
      x: cellPos.x + 2,
      y: cellPos.y
    };
    var left1 = {
      x: cellPos.x,
      y: cellPos.y - 1
    };
    var left2 = {
      x: cellPos.x,
      y: cellPos.y - 2
    };
    var right1 = {
      x: cellPos.x,
      y: cellPos.y + 1
    };
    var right2 = {
      x: cellPos.x,
      y: cellPos.y + 2
    }; // Check horizontal match with this cell in left.

    if (board.doCandiesMatch(cellPos, right1) && board.doCandiesMatch(cellPos, right2)) {
      return true;
    } // Check if horizontal match with this cell in middle.


    if (board.doCandiesMatch(cellPos, left1) && board.doCandiesMatch(cellPos, right1)) {
      return true;
    } // Check if horizontal match with this cell in right.


    if (board.doCandiesMatch(cellPos, left1) && board.doCandiesMatch(cellPos, left2)) {
      return true;
    } // Check if vertical match with this cell in top.


    if (board.doCandiesMatch(cellPos, bottom1) && board.doCandiesMatch(cellPos, bottom2)) {
      return true;
    } // Check if vertical match with this cell in middle.


    if (board.doCandiesMatch(cellPos, top1) && board.doCandiesMatch(cellPos, bottom1)) {
      return true;
    } // Check if vertical match with this cell in bottom.


    if (board.doCandiesMatch(cellPos, top1) && board.doCandiesMatch(cellPos, top2)) {
      return true;
    }

    return false;
  };

  CandyMatchHandler.prototype.handleCandyMatch = function (board, position) {
    var matchData = (0, _specialCandyHandler.checkSpecialCandy)(board, position); // Replace the current candy with the new candy.

    switch (matchData.newCandyType) {
      case 'SIMPLE':
        break;

      case 'STRIPED_H':
        board.cells[position.x][position.y] = new _StripedCell.StripedCell(matchData.newCandyColor, false);
        break;

      case 'STRIPED_V':
        board.cells[position.x][position.y] = new _StripedCell.StripedCell(matchData.newCandyColor, true);
        break;

      case 'HARD':
        board.cells[position.x][position.y] = new _HardCell.HardCell(matchData.newCandyColor);
        break;

      case 'MULTICOLORED':
        board.cells[position.x][position.y] = new _MultiColoredCell.MultiColoredCell();
        console.log(board.cells[position.x][position.y]);
        break;
    } // Update the board and re-render.


    _EventBus.EventBus.updateBoard.emit(board);

    _EventBus.EventBus.renderBoard.emit(board); // Delete the other candies.


    _EventBus.EventBus.destroyCandies.emit({
      board: board,
      candies: matchData.destroyCandies
    });
  };

  CandyMatchHandler.prototype.handleDestroyCandyMatches = function (board) {
    for (var i = 0; i < _setup.ROWS; ++i) {
      for (var j = 0; j < _setup.COLUMNS; ++j) {
        var pos = {
          x: i,
          y: j
        };

        if (this.checkIfCandiesMatch(board, pos)) {
          this.handleCandyMatch(board, pos);
        }
      }
    }
  };

  CandyMatchHandler.prototype.checkSwapWithSpecialCandy = function (board, first, second) {
    var firstType = board.getTypeAtCell(first);
    var secondType = board.getTypeAtCell(second);
    var replaceColor = 'NONE'; // Only handling swapping with mouticolored candy here.

    if (firstType === 'MULTICOLORED') {
      replaceColor = board.getColorAtCell(second);
    } else if (secondType == 'MULTICOLORED') {
      replaceColor = board.getColorAtCell(first);
    }

    var candies = this.replaceAllCandies(board, replaceColor);
    candies.push(firstType === 'MULTICOLORED' ? first : second);
    return candies;
  };

  CandyMatchHandler.prototype.replaceAllCandies = function (board, replaceColor) {
    var candiesToReplace = [];

    for (var i = 0; i < _setup.ROWS; ++i) {
      for (var j = 0; j < _setup.COLUMNS; ++j) {
        var pos = {
          x: i,
          y: j
        };

        if (board.getColorAtCell(pos) == replaceColor) {
          candiesToReplace.push(pos);
        }
      }
    }

    return candiesToReplace;
  };

  return CandyMatchHandler;
}();

exports.CandyMatchHandler = CandyMatchHandler;
},{"~/EventBus":"J8Df","~/models/Cells/MultiColoredCell":"ThQ1","~/models/Cells/HardCell":"gxXc","~/setup":"uO1H","~/utils/specialCandyHandler":"iW1d","~/models/Cells/StripedCell":"hOIC"}],"kDdE":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventHandler = void 0;

var _EventBus = require("~/EventBus");

var _setup = require("~/setup");

var THRESH = _setup.CELL_WIDTH;

var EventHandler =
/** @class */
function () {
  function EventHandler(canvasView) {
    var _this = this;

    this.handleButtonClick = function (event) {
      // Convert coordinates to local frame.
      var rect = _this.canvasView.canvas.getBoundingClientRect();

      var abs_coord_x = event.x - rect.left - _setup.CELL_PADDING;
      var abs_coord_y = event.y - rect.top - _setup.CELL_PADDING; // Find row and column number for click event.

      var pos_x = Math.floor(abs_coord_x / (_setup.CELL_WIDTH + _setup.CELL_PADDING));
      var pos_y = Math.floor(abs_coord_y / (_setup.CELL_HEIGHT + _setup.CELL_PADDING)); // Check that cell is within rows and columns present.

      if (pos_x < 0 || pos_x >= _setup.COLUMNS || pos_y < 0 || pos_y >= _setup.ROWS) return; // Distance of click from center line of candy must be less than threshold.

      var cell_coord_x = _setup.CELL_PADDING / 2 + (2 * pos_x + 1) * (_setup.CELL_WIDTH + _setup.CELL_PADDING) / 2;
      var cell_coord_y = _setup.CELL_PADDING / 2 + (2 * pos_y + 1) * (_setup.CELL_HEIGHT + _setup.CELL_PADDING) / 2;

      if (Math.abs(cell_coord_x - abs_coord_x) > THRESH || Math.abs(cell_coord_y - abs_coord_y) > THRESH) {
        return;
      } // If everything is ok, then trigger the event in canvas.


      _EventBus.EventBus.cellClickEvent.emit({
        x: pos_y,
        y: pos_x
      });
    };

    this.canvasView = canvasView;
    this.cellClickCallback = null; // Add event listeners

    this.canvasView.canvas.addEventListener('click', this.handleButtonClick);

    _EventBus.EventBus.gameOver.add(function () {
      _this.canvasView.canvas.removeEventListener('click', _this.handleButtonClick);
    });
  }

  return EventHandler;
}();

exports.EventHandler = EventHandler;
},{"~/EventBus":"J8Df","~/setup":"uO1H"}],"YLvj":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwapHandler = void 0;

var _setup = require("~/setup");

var _EventBus = require("~/EventBus");

// Based on events, swap candies, check if they match and destroy them.
var SwapHandler =
/** @class */
function () {
  function SwapHandler(board) {
    this.board = board;
    this.firstSelectedCell = null;
    this.secondSelectedCell = null;

    _EventBus.EventBus.cellClickEvent.add(this.handleCellClicked.bind(this));

    _EventBus.EventBus.updateBoard.add(this.handleAddBoard.bind(this));
  }

  SwapHandler.prototype.handleAddBoard = function (board) {
    this.board = board;
  };

  SwapHandler.prototype.handleCellClicked = function (pos) {
    var pos_x = pos.x,
        pos_y = pos.y;

    if (!this.firstSelectedCell) {
      this.firstSelectedCell = {
        x: pos_x,
        y: pos_y
      };
    } else if (!this.secondSelectedCell) {
      this.secondSelectedCell = {
        x: pos_x,
        y: pos_y
      }; // The two cells that are being swapped should be adjacent.

      if (Math.abs(this.firstSelectedCell.x - this.secondSelectedCell.x) !== 1 && Math.abs(this.firstSelectedCell.y - this.secondSelectedCell.y) !== 1) {
        this.firstSelectedCell = this.secondSelectedCell = null;
        return;
      } // The two cells should also not be adjacent.


      if (Math.abs(this.firstSelectedCell.x - this.secondSelectedCell.x) === Math.abs(this.firstSelectedCell.y - this.secondSelectedCell.y)) {
        this.firstSelectedCell = this.secondSelectedCell = null;
        return;
      } // Render this on canvas.


      _EventBus.EventBus.renderSwapAnimation.emit({
        first: {
          pos: this.secondSelectedCell || {
            x: -1,
            y: -1
          },
          img: this.board.getImageAtCell(this.secondSelectedCell)
        },
        second: {
          pos: this.firstSelectedCell || {
            x: -1,
            y: -1
          },
          img: this.board.getImageAtCell(this.firstSelectedCell)
        }
      });

      (0, _setup.delay)(_setup.ANIMATION_DURATION).then(this.postAnimationCallback.bind(this));
    }
  };

  SwapHandler.prototype.postAnimationCallback = function () {
    if (!this.firstSelectedCell || !this.secondSelectedCell) return; // Update the board with this data.

    var temp = this.board.cells[this.firstSelectedCell.x][this.firstSelectedCell.y];
    this.board.cells[this.firstSelectedCell.x][this.firstSelectedCell.y] = this.board.cells[this.secondSelectedCell.x][this.secondSelectedCell.y];
    this.board.cells[this.secondSelectedCell.x][this.secondSelectedCell.y] = temp; // Update the global board class.

    _EventBus.EventBus.updateBoard.emit(this.board);

    _EventBus.EventBus.swapCellRequest.emit({
      first: this.firstSelectedCell,
      second: this.secondSelectedCell,
      board: this.board
    }); // Reset selection after swapping.


    this.firstSelectedCell = null;
    this.secondSelectedCell = null;
  };

  return SwapHandler;
}();

exports.SwapHandler = SwapHandler;
},{"~/setup":"uO1H","~/EventBus":"J8Df"}],"QVwt":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectRandomString = selectRandomString;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function selectRandomString(possibilities, exceptions) {
  if (exceptions === void 0) {
    exceptions = [];
  }

  var _loop_1 = function _loop_1() {
    var choice = possibilities[Math.floor(Math.random() * possibilities.length)];
    if (!exceptions.find(function (element) {
      return element === choice;
    })) return {
      value: choice
    };
  };

  while (1) {
    var state_1 = _loop_1();

    if (_typeof(state_1) === "object") return state_1.value;
  }
}
},{}],"NuwN":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimpleCell = void 0;

var _EventBus = require("~/EventBus");

var SimpleCell =
/** @class */
function () {
  function SimpleCell(color) {
    var _this = this;

    this.copy = function () {
      return new SimpleCell(_this.colorType);
    };

    this.cellType = 'SIMPLE';
    this.colorType = color;
    this.isVisible = true;
    this.image = _EventBus.Global.spritePool.getSimpleCandy(color);
  }

  return SimpleCell;
}();

exports.SimpleCell = SimpleCell;
},{"~/EventBus":"J8Df"}],"jWZw":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CandySourceCell = void 0;

var _EmptyCell = _interopRequireDefault(require("~images/EmptyCell.png"));

var _random = require("~/utils/random");

var _SimpleCell = require("./SimpleCell");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CandySourceCell =
/** @class */
function () {
  function CandySourceCell() {
    this.image = new Image();
    this.previousGeneratedColor = 'EMPTY';

    this.copy = function () {
      return new CandySourceCell();
    };

    this.cellType = 'HIDDEN';
    this.colorType = 'EMPTY';
    this.isVisible = true;
    this.image.src = _EmptyCell.default;
  }

  CandySourceCell.prototype.generateRandomCandy = function () {
    var choices = ['RED', 'ORANGE', 'BLUE', 'GREEN', 'YELLOW', 'PURPLE'];
    var exceptions = [this.previousGeneratedColor];
    var newCell = new _SimpleCell.SimpleCell((0, _random.selectRandomString)(choices, exceptions));
    this.previousGeneratedColor = newCell.colorType;
    return newCell;
  };

  return CandySourceCell;
}();

exports.CandySourceCell = CandySourceCell;
},{"~images/EmptyCell.png":"Rjg3","~/utils/random":"QVwt","./SimpleCell":"NuwN"}],"adfA":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateRandomBoard = generateRandomBoard;

var _setup = require("~/setup");

var _SimpleCell = require("~/models/Cells/SimpleCell");

var _random = require("~/utils/random");

function compareCells(cell_1, cell_2) {
  return cell_1.image.src == cell_2.image.src;
}

function generateRandomBoard() {
  var cells = [];
  var choices = ['RED', 'ORANGE', 'BLUE', 'GREEN', 'YELLOW', 'PURPLE'];

  for (var i = 0; i < _setup.ROWS; ++i) {
    cells[i] = [];

    for (var j = 0; j < _setup.COLUMNS; ++j) {
      cells[i][j] = new _SimpleCell.SimpleCell((0, _random.selectRandomString)(choices));
    }
  }

  while (true) {
    var didCellChange = false; // Go through all rows and remove any elements that appear thrice in row.

    for (var i = 0; i < _setup.ROWS; ++i) {
      for (var j = 0; j < _setup.COLUMNS - 2; ++j) {
        if (compareCells(cells[i][j], cells[i][j + 1]) && compareCells(cells[i][j], cells[i][j + 2])) {
          // Cells (i,j) (i,j+1) and (i,j+2) are in line
          // mark the middle cell as some different color.
          var exceptions = [cells[i][j + 1].colorType];
          i - 1 > -1 && exceptions.push(cells[i - 1][j + 1].colorType);
          i + 1 < _setup.ROWS && exceptions.push(cells[i + 1][j + 1].colorType);
          cells[i][j + 1] = new _SimpleCell.SimpleCell((0, _random.selectRandomString)(choices, exceptions));
          didCellChange = true;
        }
      }
    } // Go through all columns and remove elements that appear thrice in column.


    for (var i = 0; i < _setup.COLUMNS; ++i) {
      for (var j = 0; j < _setup.ROWS - 2; ++j) {
        if (compareCells(cells[j][i], cells[j + 1][i]) && compareCells(cells[j][i], cells[j + 2][i])) {
          // Cells (j,i) (j+1,i) and (j+2,i) are in line
          // mark the middle cell as some different color.
          var exceptions = [cells[j + 1][i].colorType];
          i - 1 > -1 && exceptions.push(cells[j + 1][i - 1].colorType);
          i + 1 < _setup.COLUMNS && exceptions.push(cells[j + 1][i + 1].colorType);
          cells[j + 1][i] = new _SimpleCell.SimpleCell((0, _random.selectRandomString)(choices, exceptions));
          didCellChange = true;
        }
      }
    }

    if (!didCellChange) break;
  } // TODO: Remove later. Only for testing purpose only.
  // return debug_setupMultiColored (cells);
  // return debug_setupHard (cells, 7); // Second param can only be between 0-7
  // return debug_setupStriped (cells, 7); // Second param can only be between 0-7
  // return debug_gravity(cells);


  return cells;
}

function debug_setupMultiColored(cells) {
  // Generate horizontal six in line.
  cells[0][0] = new _SimpleCell.SimpleCell('BLUE');
  cells[0][1] = new _SimpleCell.SimpleCell('BLUE');
  cells[0][2] = new _SimpleCell.SimpleCell('GREEN');
  cells[0][3] = new _SimpleCell.SimpleCell('BLUE');
  cells[0][4] = new _SimpleCell.SimpleCell('BLUE');
  cells[1][2] = new _SimpleCell.SimpleCell('BLUE');
  cells[0][5] = new _SimpleCell.SimpleCell('GREEN'); // Generate vertical six in line.

  cells[1][3] = new _SimpleCell.SimpleCell('RED');
  cells[2][3] = new _SimpleCell.SimpleCell('RED');
  cells[3][3] = new _SimpleCell.SimpleCell('ORANGE');
  cells[4][3] = new _SimpleCell.SimpleCell('RED');
  cells[5][3] = new _SimpleCell.SimpleCell('RED');
  cells[3][4] = new _SimpleCell.SimpleCell('RED');
  return cells;
}

function debug_setupHard(cells, idx) {
  var blueCells = [// Case 1. (+0, +0)
  [[1, 0], [1, 2], [1, 3], [2, 1], [3, 1]], // Case 2. (+4, +0)
  [[0, 1], [1, 0], [1, 2], [2, 1], [3, 1]], // Case 3. (+8, +0)
  [[0, 0], [0, 1], [0, 3], [1, 2], [2, 2]], // Case 4. (+0, +4)
  [[0, 1], [1, 1], [2, 0], [2, 2], [2, 3]], // Case 5. (+4, +4)
  [[0, 1], [1, 1], [2, 0], [2, 2], [3, 1]], // Case 6. (+8, +4)
  [[0, 2], [1, 2], [2, 0], [2, 1], [2, 3]], // Case 7. (+0, +0)
  [[0, 1], [1, 0], [1, 2], [1, 3], [2, 1]], // Case 8. (+4, +0)
  [[0, 2], [1, 0], [1, 1], [1, 3], [2, 2]]];
  var greenCells = [// Case 1.
  [[1, 1], [1, 4], [4, 1]], // Case 2.
  [[1, 1], [1, 3], [4, 1]], // Case 3.
  [[0, 2], [0, 4], [3, 2]], // Case 4.
  [[2, 1], [2, 4], [3, 1]], // Case 5.
  [[2, 1], [2, 3], [4, 1]], // Case 6.
  [[2, 2], [2, 4], [3, 2]], // Case 7.
  [[1, 1], [1, 4], [3, 1]], // Case 8.
  [[1, 2], [1, 4], [3, 2]]];
  blueCells[idx].forEach(function (cell) {
    cells[cell[0]][cell[1]] = new _SimpleCell.SimpleCell('BLUE');
  });
  greenCells[idx].forEach(function (cell) {
    cells[cell[0]][cell[1]] = new _SimpleCell.SimpleCell('GREEN');
  });
  return cells;
}

function debug_setupStriped(cells, idx) {
  var blueCells = [// Case 1H.
  [[0, 0], [1, 1], [1, 2], [1, 3]], // Case 2H.
  [[0, 1], [1, 0], [1, 2], [1, 3]], // Case 3H.
  [[0, 2], [1, 0], [1, 1], [1, 3]], // Case 4H.
  [[0, 3], [1, 0], [1, 1], [1, 2]], // Case 1V.
  [[0, 0], [1, 1], [2, 1], [3, 1]], // Case 2V.
  [[1, 0], [0, 1], [2, 1], [3, 1]], // Case 3V.
  [[2, 0], [0, 1], [1, 1], [3, 1]], // Case 4V.
  [[3, 0], [0, 1], [1, 1], [2, 1]]];
  var greenCells = [// Case 1H.
  [[1, 0], [2, 0], [1, 4]], // Case 2H.
  [[1, 1], [2, 1], [1, 4]], // Case 3H.
  [[1, 2], [2, 2], [1, 4]], // Case 4H.
  [[1, 3], [2, 3], [1, 4]], // Case 1V.
  [[0, 1], [0, 2], [4, 1]], // Case 2V.
  [[1, 1], [1, 2], [4, 1]], // Case 3V.
  [[2, 1], [2, 2], [4, 1]], // Case 4V.
  [[3, 1], [3, 2], [4, 1]]];
  blueCells[idx].forEach(function (cell) {
    cells[cell[0]][cell[1]] = new _SimpleCell.SimpleCell('BLUE');
  });
  greenCells[idx].forEach(function (cell) {
    cells[cell[0]][cell[1]] = new _SimpleCell.SimpleCell('GREEN');
  });
  return cells;
}

function debug_gravity(cells) {
  var colNo = 2;
  var rowStart = 7;
  var rowEnd = 10;
  var emptyCells = [];

  for (var i = rowStart; i <= rowEnd; ++i) {
    emptyCells.push([i, colNo]);
  }

  emptyCells.forEach(function (cell) {
    cells[cell[0]][cell[1]] = new _SimpleCell.SimpleCell('EMPTY');
  });
  return cells;
}
},{"~/setup":"uO1H","~/models/Cells/SimpleCell":"NuwN","~/utils/random":"QVwt"}],"jCv3":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Board = void 0;

var _setup = require("~/setup");

var _CandySourceCell = require("./Cells/CandySourceCell");

var _boardGenerator = require("~/utils/boardGenerator");

var _EmptyCell = _interopRequireDefault(require("../images/EmptyCell.png"));

var _EventBus = require("~/EventBus");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createCandySourceCells() {
  var sourceCells = [];

  for (var i = 0; i < _setup.COLUMNS; ++i) {
    sourceCells[i] = new _CandySourceCell.CandySourceCell();
  }

  return sourceCells;
}

var Board =
/** @class */
function () {
  function Board() {
    this.cells = (0, _boardGenerator.generateRandomBoard)();
    this.sourceCells = createCandySourceCells();
    console.log({
      ROWS: _setup.ROWS,
      COLUMNS: _setup.COLUMNS
    });
    this.printBoard();

    _EventBus.EventBus.updateBoard.add(this.onBoardUpdate.bind(this));
  }

  Board.prototype.onBoardUpdate = function (board) {
    this.cells = board.cells;
    this.sourceCells = board.sourceCells; // EventBus.renderBoard.emit(this);
  };

  Board.prototype.getImageAtCell = function (cellPos) {
    var emptyCellImage = new Image();
    emptyCellImage.src = _EmptyCell.default;
    if (!cellPos) return emptyCellImage;
    if (cellPos.x < 0 || cellPos.x >= _setup.ROWS || cellPos.y < 0 || cellPos.y >= _setup.COLUMNS) return emptyCellImage;
    return this.cells[cellPos.x][cellPos.y].image;
  };

  Board.prototype.getColorAtCell = function (cellPos) {
    if (!cellPos) return 'EMPTY';
    if (cellPos.x < 0 || cellPos.x >= _setup.ROWS || cellPos.y < 0 || cellPos.y >= _setup.COLUMNS) return 'EMPTY';
    return this.cells[cellPos.x][cellPos.y].colorType;
  };

  Board.prototype.getTypeAtCell = function (cellPos) {
    if (!cellPos) return 'NONE';
    if (cellPos.x < 0 || cellPos.x >= _setup.ROWS || cellPos.y < 0 || cellPos.y >= _setup.COLUMNS) return 'NONE';
    return this.cells[cellPos.x][cellPos.y].cellType;
  };

  Board.prototype.doCandiesMatch = function (first, second) {
    if (this.getColorAtCell(first) === this.getColorAtCell(second)) {
      return true;
    }

    return false;
  };

  Board.prototype.printBoard = function () {
    this.cells.forEach(function (row) {
      console.log(row.map(function (it) {
        return it.colorType[0];
      }).toString());
    });
  };

  return Board;
}();

exports.Board = Board;
},{"~/setup":"uO1H","./Cells/CandySourceCell":"jWZw","~/utils/boardGenerator":"adfA","../images/EmptyCell.png":"Rjg3","~/EventBus":"J8Df"}],"pBGv":[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};
},{}],"QomT":[function(require,module,exports) {
var process = require("process");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var NOW; // Include a performance.now polyfill.
// In node.js, use process.hrtime.
// @ts-ignore

if (typeof self === 'undefined' && typeof process !== 'undefined' && process.hrtime) {
  NOW = function () {
    // @ts-ignore
    var time = process.hrtime(); // Convert [seconds, nanoseconds] to milliseconds.

    return time[0] * 1000 + time[1] / 1000000;
  };
} // In a browser, use self.performance.now if it is available.
else if (typeof self !== 'undefined' && self.performance !== undefined && self.performance.now !== undefined) {
    // This must be bound, because directly assigning this function
    // leads to an invocation exception in Chrome.
    NOW = self.performance.now.bind(self.performance);
  } // Use Date.now if it is available.
  else if (Date.now !== undefined) {
      NOW = Date.now;
    } // Otherwise, use 'new Date().getTime()'.
    else {
        NOW = function () {
          return new Date().getTime();
        };
      }

var NOW$1 = NOW;
/**
 * Controlling groups of tweens
 *
 * Using the TWEEN singleton to manage your tweens can cause issues in large apps with many components.
 * In these cases, you may want to create your own smaller groups of tween
 */

var Group =
/** @class */
function () {
  function Group() {
    this._tweens = {};
    this._tweensAddedDuringUpdate = {};
  }

  Group.prototype.getAll = function () {
    var _this = this;

    return Object.keys(this._tweens).map(function (tweenId) {
      return _this._tweens[tweenId];
    });
  };

  Group.prototype.removeAll = function () {
    this._tweens = {};
  };

  Group.prototype.add = function (tween) {
    this._tweens[tween.getId()] = tween;
    this._tweensAddedDuringUpdate[tween.getId()] = tween;
  };

  Group.prototype.remove = function (tween) {
    delete this._tweens[tween.getId()];
    delete this._tweensAddedDuringUpdate[tween.getId()];
  };

  Group.prototype.update = function (time, preserve) {
    var tweenIds = Object.keys(this._tweens);

    if (tweenIds.length === 0) {
      return false;
    }

    time = time !== undefined ? time : NOW$1(); // Tweens are updated in "batches". If you add a new tween during an
    // update, then the new tween will be updated in the next batch.
    // If you remove a tween during an update, it may or may not be updated.
    // However, if the removed tween was added during the current batch,
    // then it will not be updated.

    while (tweenIds.length > 0) {
      this._tweensAddedDuringUpdate = {};

      for (var i = 0; i < tweenIds.length; i++) {
        var tween = this._tweens[tweenIds[i]];

        if (tween && tween.update(time) === false) {
          tween.playing = false;

          if (!preserve) {
            delete this._tweens[tweenIds[i]];
          }
        }
      }

      tweenIds = Object.keys(this._tweensAddedDuringUpdate);
    }

    return true;
  };

  return Group;
}();
/**
 * The Ease class provides a collection of easing functions for use with tween.js.
 */


var Easing = {
  Linear: {
    None: function (amount) {
      return amount;
    }
  },
  Quadratic: {
    In: function (amount) {
      return amount * amount;
    },
    Out: function (amount) {
      return amount * (2 - amount);
    },
    InOut: function (amount) {
      if ((amount *= 2) < 1) {
        return 0.5 * amount * amount;
      }

      return -0.5 * (--amount * (amount - 2) - 1);
    }
  },
  Cubic: {
    In: function (amount) {
      return amount * amount * amount;
    },
    Out: function (amount) {
      return --amount * amount * amount + 1;
    },
    InOut: function (amount) {
      if ((amount *= 2) < 1) {
        return 0.5 * amount * amount * amount;
      }

      return 0.5 * ((amount -= 2) * amount * amount + 2);
    }
  },
  Quartic: {
    In: function (amount) {
      return amount * amount * amount * amount;
    },
    Out: function (amount) {
      return 1 - --amount * amount * amount * amount;
    },
    InOut: function (amount) {
      if ((amount *= 2) < 1) {
        return 0.5 * amount * amount * amount * amount;
      }

      return -0.5 * ((amount -= 2) * amount * amount * amount - 2);
    }
  },
  Quintic: {
    In: function (amount) {
      return amount * amount * amount * amount * amount;
    },
    Out: function (amount) {
      return --amount * amount * amount * amount * amount + 1;
    },
    InOut: function (amount) {
      if ((amount *= 2) < 1) {
        return 0.5 * amount * amount * amount * amount * amount;
      }

      return 0.5 * ((amount -= 2) * amount * amount * amount * amount + 2);
    }
  },
  Sinusoidal: {
    In: function (amount) {
      return 1 - Math.cos(amount * Math.PI / 2);
    },
    Out: function (amount) {
      return Math.sin(amount * Math.PI / 2);
    },
    InOut: function (amount) {
      return 0.5 * (1 - Math.cos(Math.PI * amount));
    }
  },
  Exponential: {
    In: function (amount) {
      return amount === 0 ? 0 : Math.pow(1024, amount - 1);
    },
    Out: function (amount) {
      return amount === 1 ? 1 : 1 - Math.pow(2, -10 * amount);
    },
    InOut: function (amount) {
      if (amount === 0) {
        return 0;
      }

      if (amount === 1) {
        return 1;
      }

      if ((amount *= 2) < 1) {
        return 0.5 * Math.pow(1024, amount - 1);
      }

      return 0.5 * (-Math.pow(2, -10 * (amount - 1)) + 2);
    }
  },
  Circular: {
    In: function (amount) {
      return 1 - Math.sqrt(1 - amount * amount);
    },
    Out: function (amount) {
      return Math.sqrt(1 - --amount * amount);
    },
    InOut: function (amount) {
      if ((amount *= 2) < 1) {
        return -0.5 * (Math.sqrt(1 - amount * amount) - 1);
      }

      return 0.5 * (Math.sqrt(1 - (amount -= 2) * amount) + 1);
    }
  },
  Elastic: {
    In: function (amount) {
      if (amount === 0) {
        return 0;
      }

      if (amount === 1) {
        return 1;
      }

      return -Math.pow(2, 10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI);
    },
    Out: function (amount) {
      if (amount === 0) {
        return 0;
      }

      if (amount === 1) {
        return 1;
      }

      return Math.pow(2, -10 * amount) * Math.sin((amount - 0.1) * 5 * Math.PI) + 1;
    },
    InOut: function (amount) {
      if (amount === 0) {
        return 0;
      }

      if (amount === 1) {
        return 1;
      }

      amount *= 2;

      if (amount < 1) {
        return -0.5 * Math.pow(2, 10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI);
      }

      return 0.5 * Math.pow(2, -10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI) + 1;
    }
  },
  Back: {
    In: function (amount) {
      var s = 1.70158;
      return amount * amount * ((s + 1) * amount - s);
    },
    Out: function (amount) {
      var s = 1.70158;
      return --amount * amount * ((s + 1) * amount + s) + 1;
    },
    InOut: function (amount) {
      var s = 1.70158 * 1.525;

      if ((amount *= 2) < 1) {
        return 0.5 * (amount * amount * ((s + 1) * amount - s));
      }

      return 0.5 * ((amount -= 2) * amount * ((s + 1) * amount + s) + 2);
    }
  },
  Bounce: {
    In: function (amount) {
      return 1 - Easing.Bounce.Out(1 - amount);
    },
    Out: function (amount) {
      if (amount < 1 / 2.75) {
        return 7.5625 * amount * amount;
      } else if (amount < 2 / 2.75) {
        return 7.5625 * (amount -= 1.5 / 2.75) * amount + 0.75;
      } else if (amount < 2.5 / 2.75) {
        return 7.5625 * (amount -= 2.25 / 2.75) * amount + 0.9375;
      } else {
        return 7.5625 * (amount -= 2.625 / 2.75) * amount + 0.984375;
      }
    },
    InOut: function (amount) {
      if (amount < 0.5) {
        return Easing.Bounce.In(amount * 2) * 0.5;
      }

      return Easing.Bounce.Out(amount * 2 - 1) * 0.5 + 0.5;
    }
  }
};
/**
 *
 */

var Interpolation = {
  Linear: function (v, k) {
    var m = v.length - 1;
    var f = m * k;
    var i = Math.floor(f);
    var fn = Interpolation.Utils.Linear;

    if (k < 0) {
      return fn(v[0], v[1], f);
    }

    if (k > 1) {
      return fn(v[m], v[m - 1], m - f);
    }

    return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);
  },
  Bezier: function (v, k) {
    var b = 0;
    var n = v.length - 1;
    var pw = Math.pow;
    var bn = Interpolation.Utils.Bernstein;

    for (var i = 0; i <= n; i++) {
      b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
    }

    return b;
  },
  CatmullRom: function (v, k) {
    var m = v.length - 1;
    var f = m * k;
    var i = Math.floor(f);
    var fn = Interpolation.Utils.CatmullRom;

    if (v[0] === v[m]) {
      if (k < 0) {
        i = Math.floor(f = m * (1 + k));
      }

      return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);
    } else {
      if (k < 0) {
        return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
      }

      if (k > 1) {
        return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
      }

      return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);
    }
  },
  Utils: {
    Linear: function (p0, p1, t) {
      return (p1 - p0) * t + p0;
    },
    Bernstein: function (n, i) {
      var fc = Interpolation.Utils.Factorial;
      return fc(n) / fc(i) / fc(n - i);
    },
    Factorial: function () {
      var a = [1];
      return function (n) {
        var s = 1;

        if (a[n]) {
          return a[n];
        }

        for (var i = n; i > 1; i--) {
          s *= i;
        }

        a[n] = s;
        return s;
      };
    }(),
    CatmullRom: function (p0, p1, p2, p3, t) {
      var v0 = (p2 - p0) * 0.5;
      var v1 = (p3 - p1) * 0.5;
      var t2 = t * t;
      var t3 = t * t2;
      return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
    }
  }
};
/**
 * Utils
 */

var Sequence =
/** @class */
function () {
  function Sequence() {}

  Sequence._nextId = 0;

  Sequence.nextId = function () {
    return Sequence._nextId++;
  };

  return Sequence;
}();
/**
 * Tween.js - Licensed under the MIT license
 * https://github.com/tweenjs/tween.js
 * ----------------------------------------------
 *
 * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
 * Thank you all, you're awesome!
 */

/**
 * A tween (from in-between) is a concept that allows you to change the values of the properties of an object in a
 * smooth way. You just tell it which properties you want to change, which final values should they have when the
 * tween finishes running, and how long should this take, and the tweening engine will take care of finding the
 * intermediate values from the starting to the ending point.
 */


var Tween =
/** @class */
function () {
  function Tween(object, groupRef) {
    this.playing = false;
    this.paused = false;
    this.pauseStart = 0;
    this.valuesStart = {};
    this.valuesEnd = {};
    this.valuesStartRepeat = {};
    this.durationValue = 1000;
    this.repeatValue = 0;
    this.yoyoValue = false;
    this.reversed = false;
    this.delayTime = 0;
    this.startTime = 0;
    this.easingFunction = Easing.Linear.None;
    this.interpolationFunction = Interpolation.Linear;
    this.chainedTweens = [];
    this.onStartCallbackFired = false;
    this.id = Sequence.nextId();
    this.object = object;
    this.groupRef = groupRef || Tween.TWEEN;
  }

  Tween.inject = function (instance) {
    Tween.TWEEN = instance;
  };

  Tween.prototype.getId = function () {
    return this.id;
  };

  Tween.prototype.isPlaying = function () {
    return this.playing;
  };

  Tween.prototype.isPaused = function () {
    return this.paused;
  };

  Tween.prototype.to = function (properties, duration) {
    this.valuesEnd = Object.create(properties);

    if (duration !== undefined) {
      this.durationValue = duration;
    }

    return this;
  };

  Tween.prototype.duration = function (value) {
    this.durationValue = value;
    return this;
  };

  Tween.prototype.start = function (time) {
    this.groupRef.add(this);
    this.playing = true;
    this.paused = false;
    this.onStartCallbackFired = false;
    this.startTime = time !== undefined ? typeof time === 'string' ? NOW$1() + parseFloat(time) : time : NOW$1();
    this.startTime += this.delayTime;

    for (var property in this.valuesEnd) {
      // Check if an Array was provided as property value
      if (this.valuesEnd[property] instanceof Array) {
        if (this.valuesEnd[property].length === 0) {
          continue;
        } // Create a local copy of the Array with the start value at the front


        this.valuesEnd[property] = [this.object[property]].concat(this.valuesEnd[property]);
      } // If `to()` specifies a property that doesn't exist in the source object,
      // we should not set that property in the object


      if (this.object[property] === undefined) {
        continue;
      } // Save the starting value, but only once.


      if (typeof this.valuesStart[property] === 'undefined') {
        this.valuesStart[property] = this.object[property];
      }

      if (this.valuesStart[property] instanceof Array === false) {
        this.valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings
      }

      this.valuesStartRepeat[property] = this.valuesStart[property] || 0;
    }

    return this;
  };

  Tween.prototype.stop = function () {
    if (!this.playing) {
      return this;
    }

    this.groupRef.remove(this);
    this.playing = false;
    this.paused = false;

    if (this.onStopCallback) {
      this.onStopCallback(this.object);
    }

    this.stopChainedTweens();
    return this;
  };

  Tween.prototype.end = function () {
    this.update(Infinity);
    return this;
  };

  Tween.prototype.pause = function (time) {
    if (this.paused || !this.playing) {
      return this;
    }

    this.paused = true;
    this.pauseStart = time === undefined ? NOW$1() : time;
    this.groupRef.remove(this);
    return this;
  };

  Tween.prototype.resume = function (time) {
    if (!this.paused || !this.playing) {
      return this;
    }

    this.paused = false;
    this.startTime += (time === undefined ? NOW$1() : time) - this.pauseStart;
    this.pauseStart = 0;
    this.groupRef.add(this);
    return this;
  };

  Tween.prototype.stopChainedTweens = function () {
    for (var i = 0, numChainedTweens = this.chainedTweens.length; i < numChainedTweens; i++) {
      this.chainedTweens[i].stop();
    }
  };

  Tween.prototype.group = function (group) {
    this.groupRef = group;
    return this;
  };

  Tween.prototype.delay = function (amount) {
    this.delayTime = amount;
    return this;
  };

  Tween.prototype.repeat = function (times) {
    this.repeatValue = times;
    return this;
  };

  Tween.prototype.repeatDelay = function (amount) {
    this.repeatDelayTime = amount;
    return this;
  };

  Tween.prototype.yoyo = function (yoyo) {
    this.yoyoValue = yoyo;
    return this;
  };

  Tween.prototype.easing = function (easing) {
    this.easingFunction = easing;
    return this;
  };

  Tween.prototype.interpolation = function (interpolation) {
    this.interpolationFunction = interpolation;
    return this;
  };

  Tween.prototype.chain = function () {
    var tweens = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      tweens[_i] = arguments[_i];
    }

    this.chainedTweens = tweens;
    return this;
  };

  Tween.prototype.onStart = function (callback) {
    this.onStartCallback = callback;
    return this;
  };

  Tween.prototype.onUpdate = function (callback) {
    this.onUpdateCallback = callback;
    return this;
  };

  Tween.prototype.onRepeat = function (callback) {
    this.onRepeatCallback = callback;
    return this;
  };

  Tween.prototype.onComplete = function (callback) {
    this.onCompleteCallback = callback;
    return this;
  };

  Tween.prototype.onStop = function (callback) {
    this.onStopCallback = callback;
    return this;
  };
  /**
   * Tween.js doesn't run by itself. You need to tell it when to run, by explicitly calling the update method.
   * The recommended method is to do this inside your main animation loop, which should be called with
   * requestAnimationFrame for getting the best graphics performance
   *
   * If called without parameters, update will determine the current time in order to find out how long has it been
   * since the last time it ran.
   *
   * @param time
   */


  Tween.prototype.update = function (time) {
    if (time === void 0) {
      time = 0;
    }

    var property;
    var elapsed;
    var value;

    if (time < this.startTime) {
      return true;
    }

    if (this.onStartCallbackFired === false) {
      if (this.onStartCallback) {
        this.onStartCallback(this.object);
      }

      this.onStartCallbackFired = true;
    }

    elapsed = (time - this.startTime) / this.durationValue;
    elapsed = this.durationValue === 0 || elapsed > 1 ? 1 : elapsed;
    value = this.easingFunction(elapsed);

    for (property in this.valuesEnd) {
      // Don't update properties that do not exist in the source object
      if (this.valuesStart[property] === undefined) {
        continue;
      }

      var start = this.valuesStart[property] || 0;
      var end = this.valuesEnd[property];

      if (end instanceof Array) {
        this.object[property] = this.interpolationFunction(end, value);
      } else {
        // Parses relative end values with start as base (e.g.: +10, -3)
        if (typeof end === 'string') {
          if (end.charAt(0) === '+' || end.charAt(0) === '-') {
            end = start + parseFloat(end);
          } else {
            end = parseFloat(end);
          }
        } // Protect against non numeric properties.


        if (typeof end === 'number') {
          this.object[property] = start + (end - start) * value;
        }
      }
    }

    if (this.onUpdateCallback) {
      this.onUpdateCallback(this.object, elapsed);
    }

    if (elapsed === 1) {
      if (this.repeatValue > 0) {
        if (isFinite(this.repeatValue)) {
          this.repeatValue--;
        } // Reassign starting values, restart by making startTime = now


        for (property in this.valuesStartRepeat) {
          if (typeof this.valuesEnd[property] === 'string') {
            this.valuesStartRepeat[property] = this.valuesStartRepeat[property] + parseFloat(this.valuesEnd[property]);
          }

          if (this.yoyoValue) {
            var tmp = this.valuesStartRepeat[property];
            this.valuesStartRepeat[property] = this.valuesEnd[property];
            this.valuesEnd[property] = tmp;
          }

          this.valuesStart[property] = this.valuesStartRepeat[property];
        }

        if (this.yoyoValue) {
          this.reversed = !this.reversed;
        }

        if (this.repeatDelayTime !== undefined) {
          this.startTime = time + this.repeatDelayTime;
        } else {
          this.startTime = time + this.delayTime;
        }

        if (this.onRepeatCallback) {
          this.onRepeatCallback(this.object);
        }

        return true;
      } else {
        if (this.onCompleteCallback) {
          this.onCompleteCallback(this.object);
        }

        for (var i = 0, numChainedTweens = this.chainedTweens.length; i < numChainedTweens; i++) {
          // Make the chained tweens start exactly at the time they should,
          // even if the `update()` method was called way past the duration of the tween
          this.chainedTweens[i].start(this.startTime + this.durationValue);
        }

        return false;
      }
    }

    return true;
  };

  return Tween;
}();

var VERSION = '18.6.0';
/**
 * Tween.js - Licensed under the MIT license
 * https://github.com/tweenjs/tween.js
 * ----------------------------------------------
 *
 * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
 * Thank you all, you're awesome!
 */

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
/**
 * Controlling groups of tweens
 *
 * Using the TWEEN singleton to manage your tweens can cause issues in large apps with many components.
 * In these cases, you may want to create your own smaller groups of tween
 */


var Main =
/** @class */
function (_super) {
  __extends(Main, _super);

  function Main() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.version = VERSION;
    _this.now = NOW$1;
    _this.Group = Group;
    _this.Easing = Easing;
    _this.Interpolation = Interpolation;
    _this.nextId = Sequence.nextId;
    _this.Tween = Tween;
    return _this;
  }

  return Main;
}(Group);

var TWEEN = new Main();
Tween.inject(TWEEN);
var _default = TWEEN;
exports.default = _default;
},{"process":"pBGv"}],"Op6A":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GravityAnimationView = void 0;

var _EventBus = require("~/EventBus");

var _setup = require("~/setup");

var _tween = _interopRequireDefault(require("tween.ts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function drawCellAtPos(context, x, y, img) {
  var width = _setup.CELL_WIDTH + 2 * _setup.CELL_PADDING;
  var height = _setup.CELL_HEIGHT + 2 * _setup.CELL_PADDING;
  context === null || context === void 0 ? void 0 : context.clearRect(x + 5, y, width - 5, height - 5);
  context === null || context === void 0 ? void 0 : context.drawImage(img, x, y, width, height);
}

var GravityAnimationView =
/** @class */
function () {
  function GravityAnimationView(context) {
    // For tween animations.
    this.tweenValue = {
      x: 0,
      y: 0
    };
    this.tween = new _tween.default.Tween(this.tweenValue);
    this.tweenDone = true; // List of all cells modified.

    this.cellsMoved = {
      images: [],
      startPoint: {
        x: 0,
        y: 0
      }
    };
    this.context = context;

    _EventBus.EventBus.renderGravityAnimation.add(this.drawGravityAnimation.bind(this));
  }

  GravityAnimationView.prototype.drawGravityAnimation = function (cells) {
    var _a, _b;

    (_a = this.context) === null || _a === void 0 ? void 0 : _a.resetTransform();
    (_b = this.context) === null || _b === void 0 ? void 0 : _b.translate(_setup.CELL_PADDING, _setup.CELL_PADDING);
    this.cellsMoved = cells;
    this.tweenValue = {
      x: 0,
      y: 0
    };
    var endValue = {
      x: 0,
      y: cells.images.length - cells.startPoint.x
    };
    this.tween = new _tween.default.Tween(this.tweenValue).to(endValue, _setup.ANIMATION_DURATION).easing(_tween.default.Easing.Linear.None).onComplete(this.setTweenDone.bind(this)).start();
    this.tweenDone = false;
    requestAnimationFrame(this.animateGravity.bind(this));
  };

  GravityAnimationView.prototype.setTweenDone = function () {
    this.tweenDone = true;
  };

  GravityAnimationView.prototype.animateGravity = function (timeStamp) {
    var _this = this;

    _tween.default.update(timeStamp);

    this.cellsMoved.images.forEach(function (img, idx) {
      drawCellAtPos(_this.context, _this.cellsMoved.startPoint.y * (_setup.CELL_WIDTH + _setup.CELL_PADDING), (_this.tweenValue.y - idx + _this.cellsMoved.startPoint.x - 1) * (_setup.CELL_HEIGHT + _setup.CELL_PADDING), // + this.cellsMoved.startPoint.y,
      img);
    });
    if (!this.tweenDone) requestAnimationFrame(this.animateGravity.bind(this));
  };

  return GravityAnimationView;
}();

exports.GravityAnimationView = GravityAnimationView;
},{"~/EventBus":"J8Df","~/setup":"uO1H","tween.ts":"QomT"}],"n6Ez":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScoreView = void 0;

var _EventBus = require("~/EventBus");

var _setup = require("~/setup");

var ScoreView =
/** @class */
function () {
  function ScoreView(scorePanel, movesPanel) {
    this.score = 0;
    this.moves = _setup.MOVES;
    this.scoreElement = document.getElementById(scorePanel);
    this.movesElement = document.getElementById(movesPanel);
    this.printScoreAndMoves();

    _EventBus.EventBus.incrementScore.add(this.handleScoreInc.bind(this));

    _EventBus.EventBus.decrementMoves.add(this.handleMoves.bind(this));

    _EventBus.EventBus.gameOver.add(this.handleGameOver.bind(this));
  }

  ScoreView.prototype.handleScoreInc = function (newScore) {
    this.score += newScore;
    this.printScoreAndMoves();
  };

  ScoreView.prototype.handleMoves = function () {
    this.moves -= 1;

    if (this.moves < 1) {
      _EventBus.EventBus.gameOver.emit();
    } else {
      this.printScoreAndMoves();
    }
  };

  ScoreView.prototype.printScoreAndMoves = function () {
    this.scoreElement.innerText = "Score: " + this.score;
    this.movesElement.innerText = "Moves: " + this.moves;
  };

  ScoreView.prototype.handleGameOver = function () {
    var _a;

    this.scoreElement.innerText = "Game Over. You Scored " + this.score;
    (_a = this.movesElement.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(this.movesElement);
  };

  return ScoreView;
}();

exports.ScoreView = ScoreView;
},{"~/EventBus":"J8Df","~/setup":"uO1H"}],"AJwL":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwapAnimationView = void 0;

var _EventBus = require("~/EventBus");

var _setup = require("~/setup");

var _tween = _interopRequireDefault(require("tween.ts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function drawCellAtPos(context, x, y, img) {
  var width = _setup.CELL_WIDTH + 2 * _setup.CELL_PADDING;
  var height = _setup.CELL_HEIGHT + 2 * _setup.CELL_PADDING;
  context === null || context === void 0 ? void 0 : context.drawImage(img, x, y, width, height);
}

var SwapAnimationView =
/** @class */
function () {
  function SwapAnimationView(context) {
    // For tween animations.
    this.tweenValue = {
      x: 0,
      y: 0
    };
    this.initialPos = {
      first: {
        x: 0,
        y: 0
      },
      second: {
        x: 0,
        y: 0
      }
    };
    this.tween = new _tween.default.Tween(this.tweenValue);
    this.context = context;
    this.images = {
      first: new Image(),
      second: new Image()
    };

    _EventBus.EventBus.renderSwapAnimation.add(this.drawSwapAnimation.bind(this));
  }

  SwapAnimationView.prototype.drawSwapAnimation = function (params) {
    var _a, _b;

    var first = params.first,
        second = params.second;
    (_a = this.context) === null || _a === void 0 ? void 0 : _a.resetTransform();
    (_b = this.context) === null || _b === void 0 ? void 0 : _b.translate(_setup.CELL_PADDING, _setup.CELL_PADDING);
    this.images = {
      first: first.img,
      second: second.img
    };
    this.initialPos = {
      first: {
        x: first.pos.x * (_setup.CELL_PADDING + _setup.CELL_WIDTH),
        y: first.pos.y * (_setup.CELL_PADDING + _setup.CELL_HEIGHT)
      },
      second: {
        x: second.pos.x * (_setup.CELL_PADDING + _setup.CELL_WIDTH),
        y: second.pos.y * (_setup.CELL_PADDING + _setup.CELL_HEIGHT)
      }
    };
    var endValue = {
      x: first.pos.x === second.pos.x ? 0 : 1,
      y: first.pos.y === second.pos.y ? 0 : 1
    };
    this.tween = new _tween.default.Tween(this.tweenValue).to(endValue, 500).easing(_tween.default.Easing.Quadratic.InOut).start();
    requestAnimationFrame(this.animateSwap.bind(this));
  };

  SwapAnimationView.prototype.animateSwap = function (timeStamp) {
    var _a;

    _tween.default.update(timeStamp);

    var fx = this.tweenValue.x * (this.initialPos.second.x - this.initialPos.first.x) + this.initialPos.first.x;
    var fy = this.tweenValue.y * (this.initialPos.second.y - this.initialPos.first.y) + this.initialPos.first.y;
    var sx = this.tweenValue.x * (this.initialPos.first.x - this.initialPos.second.x) + this.initialPos.second.x;
    var sy = this.tweenValue.y * (this.initialPos.first.y - this.initialPos.second.y) + this.initialPos.second.y;
    var rectX = Math.min(this.initialPos.first.y, this.initialPos.second.y);
    var rectY = Math.min(this.initialPos.first.x, this.initialPos.second.x);
    var rectW = Math.abs(this.initialPos.first.y - this.initialPos.second.y) + _setup.CELL_HEIGHT + _setup.CELL_PADDING + 5;
    var rectH = Math.abs(this.initialPos.first.x - this.initialPos.second.x) + _setup.CELL_WIDTH + _setup.CELL_PADDING + 5;
    (_a = this.context) === null || _a === void 0 ? void 0 : _a.clearRect(rectX, rectY, rectW, rectH); // Draw first cell.

    drawCellAtPos(this.context, fy, fx, this.images.first); // // Draw second cell.

    drawCellAtPos(this.context, sy, sx, this.images.second); // Break the animation if tweening is done.

    if (this.tweenValue.x == 1 || this.tweenValue.y == 1) {
      this.tweenValue = {
        x: 0,
        y: 0
      };
      return;
    }

    requestAnimationFrame(this.animateSwap.bind(this));
  };

  return SwapAnimationView;
}();

exports.SwapAnimationView = SwapAnimationView;
},{"~/EventBus":"J8Df","~/setup":"uO1H","tween.ts":"QomT"}],"afWN":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CanvasView = void 0;

var _EventBus = require("~/EventBus");

var _setup = require("~/setup");

var _GravityAnimationView = require("./GravityAnimationView");

var _ScoreView = require("./ScoreView");

var _SwapAnimationView = require("./SwapAnimationView");

var CanvasView =
/** @class */
function () {
  function CanvasView(canvasName) {
    this.canvas = document.getElementById(canvasName); // this.canvas.width = BOARD_WIDTH;
    // this.canvas.height = BOARD_HEIGHT;

    this.context = this.canvas.getContext('2d');
    this.swapAnimation = new _SwapAnimationView.SwapAnimationView(this.context);
    this.gravityAnimation = new _GravityAnimationView.GravityAnimationView(this.context);
    this.scoreView = new _ScoreView.ScoreView("scoreContainer", "movesContainer");

    _EventBus.EventBus.renderBoard.add(this.drawBoard.bind(this));
  }

  CanvasView.prototype.clearCanvas = function () {
    var _a;

    (_a = this.context) === null || _a === void 0 ? void 0 : _a.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };

  CanvasView.prototype.drawBoard = function (board) {
    var _a, _b, _c;

    (_a = this.context) === null || _a === void 0 ? void 0 : _a.resetTransform();
    (_b = this.context) === null || _b === void 0 ? void 0 : _b.translate(_setup.CELL_PADDING, _setup.CELL_PADDING);
    this.clearCanvas(); // Draw all the cells.

    for (var i = 0; i < _setup.COLUMNS; ++i) {
      for (var j = 0; j < _setup.ROWS; ++j) {
        var x = (_setup.CELL_PADDING + _setup.CELL_WIDTH) * i;
        var y = (_setup.CELL_PADDING + _setup.CELL_HEIGHT) * j;
        (_c = this.context) === null || _c === void 0 ? void 0 : _c.drawImage(board.getImageAtCell({
          x: j,
          y: i
        }), x, y, _setup.CELL_WIDTH + 2 * _setup.CELL_PADDING, _setup.CELL_HEIGHT + 2 * _setup.CELL_PADDING);
      }
    }
  };

  CanvasView.prototype.cellClicked = function (pos_x, pos_y) {
    var _a, _b, _c;

    (_a = this.context) === null || _a === void 0 ? void 0 : _a.beginPath();
    (_b = this.context) === null || _b === void 0 ? void 0 : _b.rect(_setup.CELL_PADDING + pos_x * (_setup.CELL_PADDING + _setup.CELL_WIDTH), _setup.CELL_PADDING + pos_y * (_setup.CELL_PADDING + _setup.CELL_HEIGHT), _setup.CELL_WIDTH, _setup.CELL_HEIGHT);
    (_c = this.context) === null || _c === void 0 ? void 0 : _c.fill();
    console.log("Clicked ", pos_x, pos_y);
  };

  return CanvasView;
}();

exports.CanvasView = CanvasView;
},{"~/EventBus":"J8Df","~/setup":"uO1H","./GravityAnimationView":"Op6A","./ScoreView":"n6Ez","./SwapAnimationView":"AJwL"}],"X5Ri":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CandyDestroyer = void 0;

var _EventBus = require("~/EventBus");

var _setup = require("~/setup");

var _SimpleCell = require("~/models/Cells/SimpleCell");

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var CandyDestroyer =
/** @class */
function () {
  function CandyDestroyer() {
    _EventBus.EventBus.destroyCandies.add(this.handleDestroyCandies.bind(this));
  }

  CandyDestroyer.prototype.handleDestroyCandies = function (params) {
    return __awaiter(this, void 0, void 0, function () {
      var board, candies;

      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            board = params.board;
            candies = params.candies;
            candies.forEach(function (candy) {
              board = _this.destroyCandyUsingType(board, candy);
            }); // Update the global board object.

            _EventBus.EventBus.updateBoard.emit(board); // Redraw the canvas.


            _EventBus.EventBus.renderBoard.emit(board);

            return [4
            /*yield*/
            , (0, _setup.delay)(_setup.ANIMATION_DURATION / 2)];

          case 1:
            _a.sent(); // Apply gravity to board.


            _EventBus.EventBus.applyGravity.emit();

            return [2
            /*return*/
            ];
        }
      });
    });
  }; // Destroy candy using type of candy and return new board.


  CandyDestroyer.prototype.destroyCandyUsingType = function (board, pos) {
    switch (board.getTypeAtCell(pos)) {
      case 'SIMPLE':
        // For simple, just replace the given candy with empty candy.
        board.cells[pos.x][pos.y] = new _SimpleCell.SimpleCell('EMPTY');

        _EventBus.EventBus.incrementScore.emit(_setup.Scores.SIMPLE);

        break;

      case 'HARD':
        // For hard candy, destroy all in 3x3 area.
        board.cells[pos.x][pos.y] = new _SimpleCell.SimpleCell('EMPTY');

        for (var i = -1; i < 2; ++i) {
          for (var j = -1; j < 2; ++j) {
            // board.cells[pos.x + i][pos.y + j] = new SimpleCell('EMPTY');
            if (i === 0 && j === 0) continue;
            board = this.destroyCandyUsingType(board, {
              x: pos.x + i,
              y: pos.y + j
            });
          }
        }

        _EventBus.EventBus.incrementScore.emit(_setup.Scores.HARD);

        break;

      case 'STRIPED_H':
        // for horizontal striped, destroy a horizontal strip.
        for (var i = 0; i < _setup.COLUMNS; ++i) {
          board.cells[pos.x][i] = new _SimpleCell.SimpleCell('EMPTY');
        }

        _EventBus.EventBus.incrementScore.emit(_setup.Scores.STRIPED_H);

        break;

      case 'STRIPED_V':
        // for vertical striped, destroy a vertical strip.
        for (var i = 0; i < _setup.ROWS; ++i) {
          board.cells[i][pos.y] = new _SimpleCell.SimpleCell('EMPTY');
        }

        _EventBus.EventBus.incrementScore.emit(_setup.Scores.STRIPED_V);

        break;

      case 'MULTICOLORED':
        board.cells[pos.x][pos.y] = new _SimpleCell.SimpleCell('EMPTY');

        _EventBus.EventBus.incrementScore.emit(_setup.Scores.MULTICOLORED);

        break;

      default:
        break;
    }

    return board;
  };

  return CandyDestroyer;
}();

exports.CandyDestroyer = CandyDestroyer;
},{"~/EventBus":"J8Df","~/setup":"uO1H","~/models/Cells/SimpleCell":"NuwN"}],"DKG4":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GravityHandler = void 0;

var _EventBus = require("~/EventBus");

var _SimpleCell = require("~/models/Cells/SimpleCell");

var _setup = require("~/setup");

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

// After some candies are destroyed, this class will cause candies to move down.
var GravityHandler =
/** @class */
function () {
  function GravityHandler(board) {
    this.board = board;

    _EventBus.EventBus.applyGravity.add(this.applyGravityToBoard.bind(this));

    _EventBus.EventBus.updateBoard.add(this.handleAddBoard.bind(this));
  }

  GravityHandler.prototype.handleAddBoard = function (board) {
    this.board = board;
  };

  GravityHandler.prototype.applyGravityToBoard = function () {
    return __awaiter(this, void 0, void 0, function () {
      var cellsModified, i, j, i;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!true) return [3
            /*break*/
            , 2];
            cellsModified = false; // Fill all empty cells.

            for (i = 0; i < _setup.ROWS - 1; ++i) {
              for (j = 0; j < _setup.COLUMNS; ++j) {
                if (this.board.getColorAtCell({
                  x: i + 1,
                  y: j
                }) == 'EMPTY') {
                  this.board.cells[i + 1][j] = this.board.cells[i][j];
                  this.board.cells[i][j] = new _SimpleCell.SimpleCell('EMPTY');
                  cellsModified = true;
                }
              }
            } // Fill first row using source cells.


            for (i = 0; i < _setup.COLUMNS; ++i) {
              if (this.board.getColorAtCell({
                x: 0,
                y: i
              }) == 'EMPTY') {
                this.board.cells[0][i] = this.board.sourceCells[i].generateRandomCandy();
              }
            }

            if (cellsModified === false) {
              if (checkBoardPostGravity(this.board)) {
                _EventBus.EventBus.destroyCandyMatches.emit(this.board);
              } else {
                return [3
                /*break*/
                , 2];
              }
            }

            _EventBus.EventBus.renderBoard.emit(this.board);

            return [4
            /*yield*/
            , (0, _setup.delay)(150)];

          case 1:
            _a.sent();

            return [3
            /*break*/
            , 0];

          case 2:
            // Check board for matching candies.
            _EventBus.EventBus.destroyCandyMatches.emit(this.board); // Update the board and re-render.


            _EventBus.EventBus.updateBoard.emit(this.board); // Render the board.


            _EventBus.EventBus.renderBoard.emit(this.board);

            return [2
            /*return*/
            ];
        }
      });
    });
  };

  return GravityHandler;
}();

exports.GravityHandler = GravityHandler;

function checkBoardPostGravity(board) {
  // Loops through all cells to check if they match.
  for (var i = 0; i < _setup.ROWS; ++i) {
    for (var j = 0; j < _setup.COLUMNS; ++j) {
      if (checkIfCandiesMatch(board, {
        x: i,
        y: j
      })) {
        return true;
      }
    }
  }

  return false;
}

function checkIfCandiesMatch(board, cellPos) {
  /*
                    ( top2 )
                    ( top1 )
    (left2) (left1) (cellPos) (right1) (right2)
                    (bottom1)
                    (bottom2)
   */
  // cellPos = {x: cellPos.y, y: cellPos.x};
  var top1 = {
    x: cellPos.x - 1,
    y: cellPos.y
  };
  var top2 = {
    x: cellPos.x - 2,
    y: cellPos.y
  };
  var bottom1 = {
    x: cellPos.x + 1,
    y: cellPos.y
  };
  var bottom2 = {
    x: cellPos.x + 2,
    y: cellPos.y
  };
  var left1 = {
    x: cellPos.x,
    y: cellPos.y - 1
  };
  var left2 = {
    x: cellPos.x,
    y: cellPos.y - 2
  };
  var right1 = {
    x: cellPos.x,
    y: cellPos.y + 1
  };
  var right2 = {
    x: cellPos.x,
    y: cellPos.y + 2
  }; // Check horizontal match with this cell in left.

  if (board.doCandiesMatch(cellPos, right1) && board.doCandiesMatch(cellPos, right2)) {
    return true;
  } // Check if horizontal match with this cell in middle.


  if (board.doCandiesMatch(cellPos, left1) && board.doCandiesMatch(cellPos, right1)) {
    return true;
  } // Check if horizontal match with this cell in right.


  if (board.doCandiesMatch(cellPos, left1) && board.doCandiesMatch(cellPos, left2)) {
    return true;
  } // Check if vertical match with this cell in top.


  if (board.doCandiesMatch(cellPos, bottom1) && board.doCandiesMatch(cellPos, bottom2)) {
    return true;
  } // Check if vertical match with this cell in middle.


  if (board.doCandiesMatch(cellPos, top1) && board.doCandiesMatch(cellPos, bottom1)) {
    return true;
  } // Check if vertical match with this cell in bottom.


  if (board.doCandiesMatch(cellPos, top1) && board.doCandiesMatch(cellPos, top2)) {
    return true;
  }

  return false;
} // Temporarily commenting this class. Will be implementing this later when developing animations.
// For now, use the simple version above.

/*
export class GravityHandler {
    private board: Board;

    constructor(board: Board) {
        this.board = board;

        EventBus.applyGravity.add (this.applyGravityToBoard.bind (this));
        EventBus.updateBoard.add (this.handleAddBoard.bind (this));
    }

    handleAddBoard (board: Board) {
        this.board = board;
    }

    async applyGravityToBoard () {
        console.log("Moving candies down");
        await delay(1000);
        const col = 8;

        for (let i = 0; i < COLUMNS; ++i) {
            if (i == col) console.log("Scanning col", i);
            
            // Pointers to store start and end point of empty cells.
            let emptyStart = 0;
            let emptyEnd = 0;
            let rowNo = 0;

            // Find start point of empty cells.
            while (this.board.getColorAtCell({x: rowNo, y: i}) !== 'EMPTY') {
                if (i == col) console.log("  Not empty at", rowNo);
                ++rowNo;

                if (rowNo >= ROWS) break;
            }

            emptyStart = rowNo;
            if (i == col) console.log("Set empty start", emptyStart);
            

            // Find end point of empty cells.
            while (this.board.getColorAtCell({x: rowNo, y: i}) === 'EMPTY') {
                if (i == col) console.log("  Still empty at", rowNo);
                ++rowNo;

                if (rowNo >= ROWS) break;
            }

            emptyEnd = rowNo - 1;
            if (i == col) console.log("Set empty end ", emptyEnd);

            // If there are no empty cells.
            if (emptyStart == ROWS && emptyEnd == ROWS) continue;

            // Based on the start and end positions, create array of new candies to slide down.
            const slideCandies: HTMLImageElement[] = [];
            
            // Now generate as many random candies as there are empty cells and add to list.
            for (let j = emptyStart; j < emptyEnd + 1; ++j) {
                if (i == col) console.log("Empty cell :: Random");
                slideCandies.push (this.board.sourceCells[i].generateRandomCandy().image);
            }

            // First add candies before empty block to this list.
            for (let j = 0; j < emptyStart; ++j) {
                const pos = {x: j, y: i};
                if (i == col) console.log("Empty cell", pos, this.board.getImageAtCell(pos));
                slideCandies.push(this.board.getImageAtCell(pos));
            }

            console.log("Candies", slideCandies);
            console.log();

            // Emit signal to apply gravity.
            EventBus.renderGravityAnimation.emit({
                images: slideCandies.reverse(),
                startPoint: {x: emptyStart, y: i}
            });

            // Wait for animaition to complete.
            await delay(600);
        }
    }
}
*/
},{"~/EventBus":"J8Df","~/models/Cells/SimpleCell":"NuwN","~/setup":"uO1H"}],"QCba":[function(require,module,exports) {
"use strict";

var _CandyMatchHandler = require("./controllers/CandyMatchHandler");

var _EventHandler = require("./controllers/EventHandler");

var _SwapHandler = require("./controllers/SwapHandler");

var _Board = require("./models/Board");

var _CanvasView = require("./views/CanvasView");

var _setup = require("./setup");

var _CandyDestroyer = require("./controllers/CandyDestroyer");

var _GravityHandler = require("./controllers/GravityHandler");

var _EventBus = require("./EventBus");

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

function main() {
  return __awaiter(this, void 0, Promise, function () {
    var baseCanvas, board, eventHandler, swapHandler, candyMatchHandler, candyDestroyer, gravityHandler;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          baseCanvas = new _CanvasView.CanvasView('playField');
          board = new _Board.Board();
          window.addEventListener('resize', function () {
            return makeResponsive(board);
          });
          makeResponsive(board);
          eventHandler = new _EventHandler.EventHandler(baseCanvas);
          swapHandler = new _SwapHandler.SwapHandler(board);
          candyMatchHandler = new _CandyMatchHandler.CandyMatchHandler();
          candyDestroyer = new _CandyDestroyer.CandyDestroyer();
          gravityHandler = new _GravityHandler.GravityHandler(board);
          return [4
          /*yield*/
          , (0, _setup.delay)(500)];

        case 1:
          _a.sent();

          baseCanvas.drawBoard(board);
          return [2
          /*return*/
          ];
      }
    });
  });
}

function makeResponsive(board) {
  var canvas = document.getElementById('playField');

  if (innerWidth < _setup.BOARD_WIDTH) {
    canvas.width = innerWidth;
  } else {
    canvas.width = _setup.BOARD_WIDTH;
  }

  canvas.height = canvas.width * (_setup.BOARD_HEIGHT / _setup.BOARD_WIDTH);

  _EventBus.EventBus.renderBoard.emit(board);
}

main();
},{"./controllers/CandyMatchHandler":"M7pn","./controllers/EventHandler":"kDdE","./controllers/SwapHandler":"YLvj","./models/Board":"jCv3","./views/CanvasView":"afWN","./setup":"uO1H","./controllers/CandyDestroyer":"X5Ri","./controllers/GravityHandler":"DKG4","./EventBus":"J8Df"}]},{},["QCba"], null)
//# sourceMappingURL=/Candy-Crush-Clone/src.3ec93489.js.map