var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
define("data/levels-data", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.levelsData = invertLights({
        '1': {
            width: 5, height: 5,
            lights: [
                1, 1, 0, 1, 1,
                1, 0, 1, 0, 1,
                0, 1, 1, 1, 0,
                1, 0, 1, 0, 1,
                1, 1, 0, 1, 1
            ],
            next: '2'
        },
        '2': {
            width: 5, height: 5,
            lights: [
                0, 1, 0, 1, 0,
                1, 1, 0, 1, 1,
                0, 1, 0, 1, 0,
                1, 0, 1, 0, 1,
                1, 0, 1, 0, 1
            ],
            next: '3'
        },
        '3': {
            width: 5, height: 5,
            lights: [
                1, 0, 0, 0, 1,
                1, 1, 0, 1, 1,
                0, 0, 1, 0, 0,
                1, 0, 1, 0, 0,
                1, 0, 1, 1, 0
            ],
            next: '4'
        },
        '4': {
            width: 5, height: 5,
            lights: [
                1, 1, 0, 1, 1,
                0, 0, 0, 0, 0,
                1, 1, 0, 1, 1,
                0, 0, 0, 0, 1,
                1, 1, 0, 0, 0
            ],
            next: '5'
        },
        '5': {
            width: 5, height: 5,
            lights: [
                1, 1, 1, 1, 1,
                1, 1, 1, 1, 1,
                1, 1, 1, 1, 1,
                1, 1, 1, 1, 1,
                1, 1, 1, 1, 1
            ],
            next: '6'
        },
        '6': {
            width: 5, height: 5,
            lights: [
                1, 1, 0, 0, 0,
                1, 1, 0, 0, 0,
                0, 0, 0, 0, 0,
                0, 0, 0, 1, 1,
                0, 0, 0, 1, 1
            ],
            next: '7'
        },
        '7': {
            width: 5, height: 5,
            lights: [
                0, 0, 0, 0, 0,
                0, 1, 1, 1, 0,
                1, 1, 1, 1, 1,
                0, 1, 1, 1, 0,
                0, 0, 0, 0, 0
            ],
            next: '8'
        },
        '8': {
            width: 5, height: 5,
            lights: [
                0, 0, 0, 0, 0,
                0, 1, 1, 1, 0,
                0, 1, 1, 1, 0,
                0, 1, 1, 1, 0,
                0, 0, 0, 0, 0
            ],
            next: '9'
        },
        '9': {
            width: 5, height: 5,
            lights: [
                1, 1, 0, 1, 1,
                1, 1, 0, 1, 1,
                0, 0, 0, 0, 0,
                1, 1, 0, 1, 1,
                1, 1, 0, 1, 1
            ],
            next: '10'
        },
        '10': {
            width: 5, height: 5,
            lights: [
                1, 1, 1, 1, 1,
                0, 1, 1, 1, 0,
                0, 0, 1, 0, 0,
                0, 1, 1, 1, 0,
                1, 1, 1, 1, 1
            ],
            next: '11'
        },
        '11': {
            width: 5, height: 5,
            lights: [
                1, 1, 1, 1, 1,
                1, 0, 0, 0, 1,
                1, 0, 0, 0, 1,
                1, 0, 0, 0, 1,
                1, 1, 1, 1, 1
            ],
            next: '12'
        },
        '12': {
            width: 5, height: 5,
            lights: [
                0, 0, 1, 1, 1,
                0, 0, 0, 1, 1,
                1, 0, 0, 0, 1,
                1, 1, 0, 0, 0,
                1, 1, 1, 0, 0
            ],
            next: null
        },
    });
    function invertLights(levelsData) {
        for (var levelDataKey in levelsData) {
            if (!levelsData.hasOwnProperty(levelDataKey))
                continue;
            levelsData[levelDataKey].lights = levelsData[levelDataKey].lights.map(function (n) { return !n; });
        }
        return levelsData;
    }
});
define("util", ["require", "exports"], function (require, exports) {
    "use strict";
    function assert(cond, message) {
        if (message === void 0) { message = 'Assertion failed'; }
        if (!cond) {
            throw new Error(message);
        }
    }
    exports.assert = assert;
});
define("lightsout", ["require", "exports", "util"], function (require, exports, util_1) {
    "use strict";
    var LightsOut = (function () {
        function LightsOut(w, h, litFractionOrArray, winState) {
            util_1.assert(w > 0);
            util_1.assert(h > 0);
            if (litFractionOrArray == null) {
                litFractionOrArray = 0.5;
            }
            if (winState == null) {
                winState = false;
            }
            this.winState = winState;
            this.w = w;
            this.h = h;
            if (typeof litFractionOrArray === 'number') {
                this.field = new Array(w * h);
                for (var i = 0; i < this.field.length; ++i) {
                    this.field[i] = Math.random() < litFractionOrArray;
                }
                if (litFractionOrArray < 1.0 && this.isSolved()) {
                    var x = Math.floor(Math.random() * this.w);
                    var y = Math.floor(Math.random() * this.h);
                    this.toggleOne(x, y);
                }
            }
            else if (Array.isArray(litFractionOrArray)) {
                util_1.assert(litFractionOrArray.length === w * h);
                this.field = litFractionOrArray;
            }
            else {
                throw new Error('You must pass a fraction or an array');
            }
        }
        LightsOut.prototype.isInBounds = function (x, y) {
            return (x >= 0) && (x < this.w) && (y >= 0) && (y < this.h);
        };
        LightsOut.prototype.isPointInBounds = function (point) {
            return this.isInBounds(point[0], point[1]);
        };
        LightsOut.prototype.toggleOne = function (x, y) {
            util_1.assert(this.isInBounds(x, y));
            var index = y * this.w + x;
            util_1.assert(index >= 0);
            util_1.assert(index < this.field.length);
            util_1.assert(this.field[index] !== void 0);
            this.field[index] = !this.field[index];
        };
        LightsOut.prototype.toggle = function (x, y) {
            var neighbours = [
                [x, y - 1],
                [x + 1, y],
                [x, y + 1],
                [x - 1, y]
            ].filter(this.isPointInBounds.bind(this));
            this.toggleOne(x, y);
            for (var i = 0; i < neighbours.length; ++i) {
                this.toggleOne(neighbours[i][0], neighbours[i][1]);
            }
        };
        LightsOut.prototype.isSolved = function () {
            for (var i = 0; i < this.field.length; ++i) {
                if (this.field[i] != this.winState) {
                    return false;
                }
            }
            return true;
        };
        return LightsOut;
    }());
    exports.LightsOut = LightsOut;
});
define("storage", ["require", "exports"], function (require, exports) {
    "use strict";
    var fakeStorageImplementation = {
        __data: {},
        setItem: function (key, value) {
            this.__data[key] = value;
        },
        getItem: function (key) {
            if (this.__data.hasOwnProperty(key)) {
                return this.__data[key];
            }
            return null;
        },
        removeItem: function (key) {
            delete this.__data[key];
        },
        clear: function () {
            this.__data = {};
        }
    };
    function isLocalStorageAvailable() {
        try {
            var storage = window.localStorage;
            var test = '$$$__local_storage_test___$$$';
            storage.setItem(test, test);
            storage.removeItem(test);
            return true;
        }
        catch (e) {
            return false;
        }
    }
    exports.storage = isLocalStorageAvailable()
        ? window.localStorage
        : fakeStorageImplementation;
});
define("components/screens/mainmenu", ["require", "exports", 'react', "routing"], function (require, exports, React, routing_1) {
    "use strict";
    var MainMenuScreen = (function (_super) {
        __extends(MainMenuScreen, _super);
        function MainMenuScreen(props) {
            _super.call(this, props);
        }
        MainMenuScreen.prototype.render = function () {
            return (React.createElement("div", {className: "screen screen--mainmenu"}, 
                React.createElement("h1", {className: "mainmenu__logo"}, "Lights On!"), 
                React.createElement("ul", {className: "mainmenu__items"}, 
                    React.createElement("li", {className: "mainmenu__item"}, 
                        React.createElement("button", {onClick: routing_1.getRouteCallback('levelselect'), className: "mainmenu__item-button"}, "Play")
                    ), 
                    React.createElement("li", {className: "mainmenu__item"}, 
                        React.createElement("button", {onClick: routing_1.getRouteCallback('options'), className: "mainmenu__item-button"}, "Options")
                    ))));
        };
        return MainMenuScreen;
    }(React.Component));
    exports.MainMenuScreen = MainMenuScreen;
});
define("components/lightsoutboard", ["require", "exports", 'react'], function (require, exports, React) {
    "use strict";
    var LightsOutBoard = (function (_super) {
        __extends(LightsOutBoard, _super);
        function LightsOutBoard(props) {
            _super.call(this, props);
            this.state = {
                solved: false,
                turns: 0,
                cells: new Array(props.lightsOut.w * props.lightsOut.h)
            };
            this.lightsOut = props.lightsOut;
            this.handleClick = this.handleClick.bind(this);
        }
        LightsOutBoard.prototype.componentDidMount = function () {
            this.updateFieldState();
        };
        LightsOutBoard.prototype.updateFieldState = function () {
            this.setState({
                cells: this.lightsOut.field,
                solved: this.lightsOut.isSolved()
            });
        };
        LightsOutBoard.prototype.handleClick = function (event) {
            var cellX = parseInt(event.target.getAttribute('data-x'));
            var cellY = parseInt(event.target.getAttribute('data-y'));
            this.lightsOut.toggle(cellX, cellY);
            var newTurns = this.state.turns + 1;
            var isSolved = this.lightsOut.isSolved();
            this.setState({ turns: newTurns });
            this.updateFieldState();
            if (this.props.onTurn) {
                this.props.onTurn(newTurns, isSolved);
            }
            if (isSolved && this.props.onSolve) {
                this.props.onSolve(newTurns);
            }
        };
        LightsOutBoard.prototype.render = function () {
            var lightsOut = this.props.lightsOut;
            var rows = [];
            for (var j = 0; j < lightsOut.h; ++j) {
                var rowCells = [];
                for (var i = 0; i < lightsOut.w; ++i) {
                    var cellState = this.state.cells[j * lightsOut.w + i];
                    var className = 'lights-out-board__cell ' +
                        (cellState
                            ? 'lights-out-board__cell--on'
                            : 'lights-out-board__cell--off');
                    rowCells.push(React.createElement("td", {"data-x": i, "data-y": j, onClick: this.handleClick, className: className}));
                }
                rows.push(React.createElement("tr", {className: 'lights-out-board__row'}, rowCells));
            }
            var tableClass = 'lights-out-board ' + (this.state.solved
                ? 'lights-out-board--solved'
                : '');
            return React.createElement("table", {className: tableClass}, rows);
        };
        return LightsOutBoard;
    }(React.Component));
    exports.LightsOutBoard = LightsOutBoard;
});
define("components/screens/playscreen", ["require", "exports", 'react', "routing", "storage", "components/lightsoutboard"], function (require, exports, React, routing_2, storage_1, lightsoutboard_1) {
    "use strict";
    var PlayScreen = (function (_super) {
        __extends(PlayScreen, _super);
        function PlayScreen(props) {
            _super.call(this, props);
            this.state = {
                turns: 0,
                solved: false
            };
            this.handleTurn = this.handleTurn.bind(this);
            this.handleSolve = this.handleSolve.bind(this);
        }
        PlayScreen.prototype.handleTurn = function (turns, solved) {
            this.setState({
                turns: turns,
                solved: solved
            });
        };
        PlayScreen.prototype.handleSolve = function (turns) {
            if (this.props.levelId) {
                var solved = JSON.parse(storage_1.storage.getItem('solved') || '{}');
                solved[this.props.levelId] = { turns: turns };
                storage_1.storage.setItem('solved', JSON.stringify(solved));
            }
            routing_2.route('success', { turns: turns, nextLevelId: this.props.nextLevelId });
        };
        PlayScreen.prototype.render = function () {
            return (React.createElement("div", {className: "screen screen--play"}, 
                React.createElement("p", null, "Turn on all the lights!"), 
                React.createElement("p", null, 
                    "Turns made: ", 
                    this.state.turns.toString()), 
                React.createElement(lightsoutboard_1.LightsOutBoard, {lightsOut: this.props.lightsOut, onTurn: this.handleTurn, onSolve: this.handleSolve}), 
                React.createElement("button", {onClick: routing_2.getRouteCallback('levelselect'), className: "btn"}, "Exit")));
        };
        return PlayScreen;
    }(React.Component));
    exports.PlayScreen = PlayScreen;
});
define("components/screens/levelselect", ["require", "exports", 'react', "routing", "storage", "lightsout", "data/levels-data"], function (require, exports, React, routing_3, storage_2, lightsout_1, levels_data_1) {
    "use strict";
    function getPlayLevelCallback(levelId) {
        var levelData = levels_data_1.levelsData[levelId];
        return function () {
            routing_3.route('play', {
                lightsOut: new lightsout_1.LightsOut(levelData.width, levelData.height, levelData.lights.slice(0), true),
                levelId: levelId,
                nextLevelId: levelData.next
            });
        };
    }
    var LevelSelectScreen = (function (_super) {
        __extends(LevelSelectScreen, _super);
        function LevelSelectScreen(props) {
            _super.call(this, props);
        }
        LevelSelectScreen.prototype.render = function () {
            var solved = JSON.parse(storage_2.storage.getItem('solved') || '{}');
            var levelIds = Object.keys(levels_data_1.levelsData).sort(function (a, b) { return parseFloat(a) - parseFloat(b); });
            return (React.createElement("div", {className: "screen screen--levelselect"}, 
                React.createElement("h2", null, "Select level"), 
                React.createElement("div", {className: "levelselect__levels"}, levelIds.map(function (level) {
                    return React.createElement("div", {className: "levelselect__level"}, 
                        React.createElement("button", {className: "btn-level " + (solved[level] ? 'btn-level--solved' : ''), onClick: getPlayLevelCallback(level)}, level)
                    );
                })), 
                React.createElement("div", {className: "levelselect__navigation"}, 
                    React.createElement("button", {className: "btn", onClick: routing_3.getRouteCallback('customgame')}, "Custom game..."), 
                    React.createElement("button", {className: "btn", onClick: routing_3.getRouteCallback('mainmenu')}, "Back"))));
        };
        return LevelSelectScreen;
    }(React.Component));
    exports.LevelSelectScreen = LevelSelectScreen;
});
define("components/screens/custom-game-setup", ["require", "exports", 'react', "routing", "lightsout"], function (require, exports, React, routing_4, lightsout_2) {
    "use strict";
    var CustomGameSetupScreen = (function (_super) {
        __extends(CustomGameSetupScreen, _super);
        function CustomGameSetupScreen(props) {
            _super.call(this, props);
            this.state = {
                width: 5,
                height: 5,
                litFraction: 0.3
            };
            this.handleStartGameClick = this.handleStartGameClick.bind(this);
            this.handleWidthChange = this.handleWidthChange.bind(this);
            this.handleHeightChange = this.handleHeightChange.bind(this);
            this.handleLitFractionChange = this.handleLitFractionChange.bind(this);
        }
        CustomGameSetupScreen.prototype.handleStartGameClick = function () {
            var lightsOut = new lightsout_2.LightsOut(this.state.width, this.state.height, this.state.litFraction, true);
            routing_4.route('play', { lightsOut: lightsOut });
        };
        CustomGameSetupScreen.prototype.handleWidthChange = function (event) {
            this.setState({ width: parseInt(event.target.value) });
        };
        CustomGameSetupScreen.prototype.handleHeightChange = function (event) {
            this.setState({ height: parseInt(event.target.value) });
        };
        CustomGameSetupScreen.prototype.handleLitFractionChange = function (event) {
            this.setState({ litFraction: parseInt(event.target.value) / 100 });
        };
        CustomGameSetupScreen.prototype.render = function () {
            return (React.createElement("div", {className: "screen screen--customgame"}, 
                React.createElement("h2", null, "Custom game setup"), 
                React.createElement("table", {className: "customgame__settings"}, 
                    React.createElement("tr", null, 
                        React.createElement("td", null, 
                            React.createElement("label", {htmlFor: "width"}, "Width")
                        ), 
                        React.createElement("td", null, 
                            React.createElement("input", {className: "customgame__spinner", onChange: this.handleWidthChange, value: this.state.width.toString(), type: "number", name: "width"})
                        )), 
                    React.createElement("tr", null, 
                        React.createElement("td", null, 
                            React.createElement("label", {htmlFor: "height"}, "Height")
                        ), 
                        React.createElement("td", null, 
                            React.createElement("input", {className: "customgame__spinner", onChange: this.handleHeightChange, value: this.state.height.toString(), type: "number", name: "height"})
                        )), 
                    React.createElement("tr", null, 
                        React.createElement("td", null, 
                            React.createElement("label", {htmlFor: "litFraction"}, "Lit %")
                        ), 
                        React.createElement("td", null, 
                            React.createElement("input", {className: "customgame__spinner", onChange: this.handleLitFractionChange, value: Math.round(this.state.litFraction * 100), min: "5", max: "95", step: "1", type: "number", name: "litFraction"})
                        ))), 
                React.createElement("div", null, 
                    React.createElement("button", {className: "btn", onClick: this.handleStartGameClick}, "Start game"), 
                    React.createElement("button", {className: "btn", onClick: routing_4.getRouteCallback('levelselect')}, "Back"))));
        };
        return CustomGameSetupScreen;
    }(React.Component));
    exports.CustomGameSetupScreen = CustomGameSetupScreen;
});
define("components/screens/options", ["require", "exports", 'react', "storage", "routing"], function (require, exports, React, storage_3, routing_5) {
    "use strict";
    function handleResetProgress() {
        routing_5.route('prompt-options', {
            text: 'Are you sure you want to delete your whole progress? This action cannot be undone.',
            options: [
                {
                    text: 'Yes, delete my progress',
                    callback: function () {
                        storage_3.storage.setItem('solved', '{}');
                        routing_5.route('options');
                    }
                },
                {
                    text: 'No, back to options',
                    callback: function () {
                        routing_5.route('options');
                    }
                }
            ]
        });
    }
    var OptionsScreen = (function (_super) {
        __extends(OptionsScreen, _super);
        function OptionsScreen(props) {
            _super.call(this, props);
            this.state = {
                soundOn: JSON.parse(storage_3.storage.getItem('soundOn') || 'true')
            };
            this.handleToggleSound = this.handleToggleSound.bind(this);
        }
        OptionsScreen.prototype.handleToggleSound = function () {
            var soundOn = JSON.parse(storage_3.storage.getItem('soundOn') || 'true');
            soundOn = !soundOn;
            storage_3.storage.setItem('soundOn', JSON.stringify(soundOn));
            this.setState({ soundOn: soundOn });
        };
        OptionsScreen.prototype.render = function () {
            return (React.createElement("div", {className: "screen screen--options"}, 
                React.createElement("h2", null, "Options"), 
                React.createElement("div", {className: "options__items"}, 
                    React.createElement("div", {className: "options__item"}, 
                        React.createElement("button", {onClick: this.handleToggleSound, className: "btn btn-fullwidth btn-option"}, 
                            "Sound: ", 
                            this.state.soundOn ? 'on' : 'off')
                    ), 
                    React.createElement("div", {className: "options__item"}, 
                        React.createElement("button", {onClick: handleResetProgress, className: "btn btn-fullwidth btn-option"}, "Reset progress")
                    )), 
                React.createElement("div", null, 
                    React.createElement("button", {className: "btn", onClick: routing_5.getRouteCallback('mainmenu')}, "Back")
                )));
        };
        return OptionsScreen;
    }(React.Component));
    exports.OptionsScreen = OptionsScreen;
});
define("components/screens/success", ["require", "exports", 'react', "routing", "data/levels-data", "lightsout"], function (require, exports, React, routing_6, levels_data_2, lightsout_3) {
    "use strict";
    function getPlayLevelCallback(levelId) {
        var levelData = levels_data_2.levelsData[levelId];
        return function () {
            routing_6.route('play', {
                lightsOut: new lightsout_3.LightsOut(levelData.width, levelData.height, levelData.lights.slice(0), true),
                levelId: levelId,
                nextLevelId: levelData.next
            });
        };
    }
    function SuccessScreen(props) {
        var nextLevelButton = props.nextLevelId
            ? React.createElement("button", {className: "btn", onClick: getPlayLevelCallback(props.nextLevelId)}, "Next level")
            : null;
        return (React.createElement("div", {className: "screen screen--success"}, 
            React.createElement("h2", null, "Success!"), 
            React.createElement("p", null, 
                "You have completed the level in ", 
                props.turns, 
                " turns!"), 
            React.createElement("button", {className: "btn", onClick: routing_6.getRouteCallback('levelselect')}, "Exit"), 
            nextLevelButton));
    }
    exports.SuccessScreen = SuccessScreen;
});
define("components/screens/prompt-options", ["require", "exports", 'react'], function (require, exports, React) {
    "use strict";
    function PromptOptionsScreen(props) {
        var title = props.title ? React.createElement("h2", null, props.title) : null;
        var text = React.createElement("p", null, props.text);
        var options = [];
        for (var i = 0; i < props.options.length; ++i) {
            options.push(React.createElement("div", {className: "prompt-options__item"}, 
                React.createElement("button", {onClick: props.options[i].callback, className: "btn btn-fullwidth btn-prompt-options"}, props.options[i].text)
            ));
        }
        return (React.createElement("div", {className: "screen screen--prompt-options"}, 
            title, 
            text, 
            React.createElement("div", {className: "prompt-options__items"}, options)));
    }
    exports.PromptOptionsScreen = PromptOptionsScreen;
});
define("components/routable-app", ["require", "exports", 'react', "components/screens/mainmenu", "components/screens/playscreen", "components/screens/levelselect", "components/screens/custom-game-setup", "components/screens/options", "components/screens/success", "components/screens/prompt-options"], function (require, exports, React, mainmenu_1, playscreen_1, levelselect_1, custom_game_setup_1, options_1, success_1, prompt_options_1) {
    "use strict";
    var ReactCSSTransitionGroup = React['addons'].CSSTransitionGroup;
    var RoutableApp = (function (_super) {
        __extends(RoutableApp, _super);
        function RoutableApp(props) {
            _super.call(this, props);
            this.pathToComponent = {
                'levelselect': levelselect_1.LevelSelectScreen,
                'mainmenu': mainmenu_1.MainMenuScreen,
                'customgame': custom_game_setup_1.CustomGameSetupScreen,
                'options': options_1.OptionsScreen,
                'success': success_1.SuccessScreen,
                'play': playscreen_1.PlayScreen
            };
        }
        RoutableApp.prototype.getContent = function () {
            switch (this.props.path) {
                case 'levelselect':
                    return React.createElement(levelselect_1.LevelSelectScreen, {key: this.props.path});
                case 'mainmenu':
                    return React.createElement(mainmenu_1.MainMenuScreen, {key: this.props.path});
                case 'customgame':
                    return React.createElement(custom_game_setup_1.CustomGameSetupScreen, {key: this.props.path});
                case 'options':
                    return React.createElement(options_1.OptionsScreen, {key: this.props.path});
                case 'success':
                    return React.createElement(success_1.SuccessScreen, __assign({key: this.props.path}, this.props.pageParams));
                case 'play':
                    return React.createElement(playscreen_1.PlayScreen, __assign({key: this.props.path}, this.props.pageParams));
                case 'prompt-options':
                    return React.createElement(prompt_options_1.PromptOptionsScreen, __assign({key: this.props.path}, this.props.pageParams));
            }
        };
        RoutableApp.prototype.render = function () {
            return (React.createElement("div", null, 
                React.createElement(ReactCSSTransitionGroup, {component: "div", transitionName: "page-transition", transitionEnterTimeout: 400, transitionLeaveTimeout: 400}, this.getContent())
            ));
        };
        return RoutableApp;
    }(React.Component));
    exports.RoutableApp = RoutableApp;
});
define("routing", ["require", "exports", 'react', 'react-dom', "components/routable-app"], function (require, exports, React, ReactDOM, routable_app_1) {
    "use strict";
    var getContainer = (function () {
        var container = null;
        function getContainer() {
            if (!container) {
                container = document.getElementById('container');
            }
            return container;
        }
        return getContainer;
    })();
    function route(path, pageParams) {
        if (pageParams === void 0) { pageParams = {}; }
        console.log('rendering...');
        ReactDOM.render(React.createElement(routable_app_1.RoutableApp, {path: path, pageParams: pageParams}), getContainer());
    }
    exports.route = route;
    exports.getRouteCallback = (function () {
        var callbacks = {};
        function getRouteCallback(path) {
            if (!callbacks[path]) {
                callbacks[path] = route.bind(null, path, {});
            }
            return callbacks[path];
        }
        return getRouteCallback;
    })();
});
define("app", ["require", "exports", "routing"], function (require, exports, routing_7) {
    "use strict";
    function preloadImages() {
        var urls = [
            '/assets/img/lamp_off_black.png',
            '/assets/img/lamp_off_black_rays.png',
            '/assets/img/lamp_on.png'
        ];
        var preloaded = [];
        for (var i = 0; i < urls.length; ++i) {
            var img = new Image();
            img.src = urls[i];
            preloaded.push(img);
        }
        return preloaded;
    }
    var preloadedHolder = preloadImages();
    function main() {
        console.log('Hello, world!');
        routing_7.route('mainmenu');
    }
    main();
});
