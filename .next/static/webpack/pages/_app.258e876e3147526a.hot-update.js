"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/ConnectButton.js":
/*!*************************************!*\
  !*** ./components/ConnectButton.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ConnectButton\": function() { return /* binding */ ConnectButton; }\n/* harmony export */ });\n/* harmony import */ var E_work_Blockchain_wedgarten_abi_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var E_work_Blockchain_wedgarten_abi_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(E_work_Blockchain_wedgarten_abi_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @walletconnect/web3-provider */ \"./node_modules/@walletconnect/web3-provider/dist/esm/index.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _abi_classicRwards_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../abi/classicRwards.json */ \"./abi/classicRwards.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/process/browser.js\");\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\n// import { contractAddress } from \"../config/contractAddress\";\n// import { contractABI } from \"../config/abi\";\nfunction ConnectButton(param) {\n    var setContract = param.setContract;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), provider = ref[0], setProvider = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), network1 = ref1[0], setNetwork = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), address1 = ref2[0], setAddress = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), mainC = ref3[0], setMainC = ref3[1];\n    var web3Modal;\n    var CHAIN_ID = process.env.NEXT_PUBLIC_CHAIN_ID ? Number(process.env.NEXT_PUBLIC_CHAIN_ID) : 97;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        listenToProviderEvents();\n        function listenToProviderEvents() {\n            return _listenToProviderEvents.apply(this, arguments);\n        }\n        function _listenToProviderEvents() {\n            _listenToProviderEvents = _asyncToGenerator(E_work_Blockchain_wedgarten_abi_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var handleAccountsChanged, handleChainChanged, handleDisconnect;\n                return E_work_Blockchain_wedgarten_abi_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            handleAccountsChanged = function _handleAccountsChanged(accounts) {\n                                setAddress(accounts[0]);\n                            };\n                            handleChainChanged = function _handleChainChanged() {\n                                debugger;\n                                // https://docs.ethers.io/v5/concepts/best-practices/#best-practices--network-changes\n                                window.location.reload();\n                            };\n                            handleDisconnect = function _handleDisconnect() {\n                                resetConnection();\n                            };\n                            if (!provider) {\n                                _ctx.next = 11;\n                                break;\n                            }\n                            provider.on(\"accountsChanged\", handleAccountsChanged);\n                            provider.on(\"chainChanged\", handleChainChanged);\n                            provider.on(\"disconnect\", handleDisconnect);\n                            return _ctx.abrupt(\"return\", function() {\n                                if (provider.removeListener) {\n                                    provider.removeListener(\"accountsChanged\", handleAccountsChanged);\n                                    provider.removeListener(\"chainChanged\", handleChainChanged);\n                                    provider.removeListener(\"disconnect\", handleDisconnect);\n                                }\n                            });\n                        case 11:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return _listenToProviderEvents.apply(this, arguments);\n        }\n    }, []);\n    if (true) {\n        var providerOptions = {\n            walletconnect: {\n                package: _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                options: {\n                    rpc: {\n                        4: \"https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161\",\n                        56: \"https://bsc-dataseed.binance.org/\",\n                        97: \"https://data-seed-prebsc-1-s1.binance.org:8545\"\n                    }\n                }\n            }\n        };\n        web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_3___default())({\n            network: \"mainnet\",\n            cacheProvider: true,\n            providerOptions: providerOptions\n        });\n    }\n    return (network1 === null || network1 === void 0 ? void 0 : network1.chainId) === CHAIN_ID && address1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n        onClick: resetConnection,\n        align: \"center\",\n        color: \"#C66CFF\",\n        border: \"1px solid #C66CFF\",\n        backgroundColor: \"#0B3552\",\n        w: \"175px\",\n        h: \"50px\",\n        children: \"BNB DISCONNECT\"\n    }, void 0, false, {\n        fileName: \"E:\\\\work\\\\Blockchain\\\\wedgarten(abi)\\\\test\\\\components\\\\ConnectButton.js\",\n        lineNumber: 76,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n        onClick: connectWallet,\n        align: \"center\",\n        color: \"#C66CFF\",\n        border: \"1px solid #C66CFF\",\n        backgroundColor: \"#0B3552\",\n        w: \"150px\",\n        h: \"50px\",\n        children: \"BNB CONNECT\"\n    }, void 0, false, {\n        fileName: \"E:\\\\work\\\\Blockchain\\\\wedgarten(abi)\\\\test\\\\components\\\\ConnectButton.js\",\n        lineNumber: 88,\n        columnNumber: 5\n    }, this);\n    function connectWallet() {\n        return _connectWallet.apply(this, arguments);\n    }\n    function _connectWallet() {\n        _connectWallet = _asyncToGenerator(E_work_Blockchain_wedgarten_abi_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee1() {\n            var instance, _provider, signer, address, network, getContracts, _getContracts;\n            return E_work_Blockchain_wedgarten_abi_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx1) {\n                while(1)switch(_ctx1.prev = _ctx1.next){\n                    case 0:\n                        getContracts = function _getContracts1() {\n                            return _getContracts.apply(this, arguments);\n                        };\n                        _getContracts = function __getContracts() {\n                            _getContracts = _asyncToGenerator(E_work_Blockchain_wedgarten_abi_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                                var _contract;\n                                return E_work_Blockchain_wedgarten_abi_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                    while(1)switch(_ctx.prev = _ctx.next){\n                                        case 0:\n                                            _contract = new ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.Contract(_abi_classicRwards_json__WEBPACK_IMPORTED_MODULE_5__.address, _abi_classicRwards_json__WEBPACK_IMPORTED_MODULE_5__.abi, signer);\n                                            setContract(_contract);\n                                            setMainC(_contract);\n                                        case 3:\n                                        case \"end\":\n                                            return _ctx.stop();\n                                    }\n                                }, _callee);\n                            }));\n                            return _getContracts.apply(this, arguments);\n                        };\n                        _ctx1.prev = 2;\n                        _ctx1.next = 5;\n                        return web3Modal.connect();\n                    case 5:\n                        instance = _ctx1.sent;\n                        _ctx1.next = 8;\n                        return instance.enable();\n                    case 8:\n                        setProvider(instance);\n                        _provider = new ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.providers.Web3Provider(instance);\n                        signer = _provider.getSigner();\n                        _ctx1.next = 13;\n                        return signer.getAddress();\n                    case 13:\n                        address = _ctx1.sent;\n                        setAddress(address);\n                        console.log(address);\n                        _ctx1.next = 18;\n                        return _provider.getNetwork();\n                    case 18:\n                        network = _ctx1.sent;\n                        setNetwork(network);\n                        console.log(network);\n                        if (!(network.chainId !== CHAIN_ID)) {\n                            _ctx1.next = 24;\n                            break;\n                        }\n                        alert(\"Please, change to Binance network\");\n                        return _ctx1.abrupt(\"return\");\n                    case 24:\n                        _ctx1.next = 26;\n                        return getContracts();\n                    case 26:\n                        ;\n                        ;\n                        _ctx1.next = 30;\n                        return setContracts(signer);\n                    case 30:\n                        _ctx1.next = 35;\n                        break;\n                    case 32:\n                        _ctx1.prev = 32;\n                        _ctx1.t0 = _ctx1[\"catch\"](2);\n                        if (_ctx1.t0.message === \"User closed modal\" || _ctx1.t0.message === \"User Rejected\") {\n                            console.log(_ctx1.t0.message);\n                        } else {\n                            console.error(_ctx1.t0);\n                        }\n                    case 35:\n                    case \"end\":\n                        return _ctx1.stop();\n                }\n            }, _callee1, null, [\n                [\n                    2,\n                    32\n                ]\n            ]);\n        }));\n        return _connectWallet.apply(this, arguments);\n    }\n    function resetConnection() {\n        return _resetConnection.apply(this, arguments);\n    }\n    function _resetConnection() {\n        _resetConnection = _asyncToGenerator(E_work_Blockchain_wedgarten_abi_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return E_work_Blockchain_wedgarten_abi_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        console.log(\"disconnecting from provider\", address1, provider, network1);\n                        _ctx.next = 3;\n                        return web3Modal.clearCachedProvider();\n                    case 3:\n                        if (!((provider === null || provider === void 0 ? void 0 : provider.disconnect) && typeof provider.disconnect === \"function\")) {\n                            _ctx.next = 7;\n                            break;\n                        }\n                        console.log(\"disconnecting from provider\");\n                        _ctx.next = 7;\n                        return provider.disconnect();\n                    case 7:\n                        localStorage.clear();\n                        setAddress([\n                            \"\"\n                        ]);\n                        setProvider(null);\n                        setContract(null);\n                        setNetwork({});\n                        _ctx.next = 14;\n                        return web3Modal.off();\n                    case 14:\n                        console.log(\"disconnected\");\n                    case 15:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _resetConnection.apply(this, arguments);\n    }\n    function setContracts(signer) {\n        return _setContracts.apply(this, arguments);\n    }\n    function _setContracts() {\n        _setContracts = _asyncToGenerator(E_work_Blockchain_wedgarten_abi_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(signer) {\n            var _contract;\n            return E_work_Blockchain_wedgarten_abi_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.t0 = mainC;\n                        if (!_ctx.t0) {\n                            _ctx.next = 8;\n                            break;\n                        }\n                        _ctx.t1 = Number;\n                        _ctx.next = 5;\n                        return mainC.totalSupply();\n                    case 5:\n                        _ctx.t2 = _ctx.sent;\n                        _ctx.t3 = (0, _ctx.t1)(_ctx.t2);\n                        _ctx.t0 = _ctx.t3 >= 91;\n                    case 8:\n                        if (!_ctx.t0) {\n                            _ctx.next = 10;\n                            break;\n                        }\n                        {\n                            _contract = new ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.Contract(_abi_classicRwards_json__WEBPACK_IMPORTED_MODULE_5__.subAddress, _abi_classicRwards_json__WEBPACK_IMPORTED_MODULE_5__.abi, signer);\n                            setContract(_contract);\n                        }\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _setContracts.apply(this, arguments);\n    }\n}\n_s(ConnectButton, \"UUYC9u4QEEGu8m7jcKdMqvQ7wOU=\");\n_c = ConnectButton;\nvar _c;\n$RefreshReg$(_c, \"ConnectButton\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Nvbm5lY3RCdXR0b24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFDVjtBQUMrQjtBQUNqQztBQUNVO0FBQ2E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEQsRUFBK0Q7QUFDL0QsRUFBK0M7QUFFeEMsU0FBU08sYUFBYSxDQUFDLEtBQWUsRUFBRSxDQUFDO1FBQWhCQyxXQUFXLEdBQWIsS0FBZSxDQUFiQSxXQUFXOztJQUN6QyxHQUFLLENBQTJCUixHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUF0Q1MsUUFBUSxHQUFpQlQsR0FBYyxLQUE3QlUsV0FBVyxHQUFJVixHQUFjO0lBQzlDLEdBQUssQ0FBeUJBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQXBDVyxRQUFPLEdBQWdCWCxJQUFjLEtBQTVCWSxVQUFVLEdBQUlaLElBQWM7SUFDNUMsR0FBSyxDQUF5QkEsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FBcENhLFFBQU8sR0FBZ0JiLElBQWMsS0FBNUJjLFVBQVUsR0FBSWQsSUFBYztJQUM1QyxHQUFLLENBQXFCQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUFoQ2UsS0FBSyxHQUFjZixJQUFjLEtBQTFCZ0IsUUFBUSxHQUFJaEIsSUFBYztJQUN4QyxHQUFHLENBQUNpQixTQUFTO0lBQ2IsR0FBSyxDQUFDQyxRQUFRLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxvQkFBb0IsR0FDN0NDLE1BQU0sQ0FBQ0gsT0FBTyxDQUFDQyxHQUFHLENBQUNDLG9CQUFvQixJQUN2QyxFQUFFO0lBRU5wQixnREFBUyxDQUFDLFFBQVEsR0FBRixDQUFDO1FBQ2ZzQixzQkFBc0I7aUJBRVBBLHNCQUFzQjttQkFBdEJBLHVCQUFzQjs7aUJBQXRCQSx1QkFBc0I7WUFBdEJBLHVCQUFzQixxS0FBckMsUUFBUSxXQUFnQyxDQUFDO29CQWM1QkMscUJBQXFCLEVBSXJCQyxrQkFBa0IsRUFNbEJDLGdCQUFnQjs7Ozs0QkFWaEJGLHFCQUFxQixHQUE5QixRQUFRLENBQUNBLHNCQUFxQixDQUFDRyxRQUFRLEVBQUUsQ0FBQztnQ0FDeENiLFVBQVUsQ0FBQ2EsUUFBUSxDQUFDLENBQUM7NEJBQ3ZCLENBQUM7NEJBRVFGLGtCQUFrQixHQUEzQixRQUFRLENBQUNBLG1CQUFrQixHQUFHLENBQUM7Z0NBQzdCLFFBQVM7Z0NBQ1QsRUFBcUY7Z0NBQ3JGRyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsTUFBTTs0QkFDeEIsQ0FBQzs0QkFFUUosZ0JBQWdCLEdBQXpCLFFBQVEsQ0FBQ0EsaUJBQWdCLEdBQUcsQ0FBQztnQ0FDM0JLLGVBQWU7NEJBQ2pCLENBQUM7aUNBekJDdEIsUUFBUTs7Ozs0QkFDVkEsUUFBUSxDQUFDdUIsRUFBRSxDQUFDLENBQWlCLGtCQUFFUixxQkFBcUI7NEJBQ3BEZixRQUFRLENBQUN1QixFQUFFLENBQUMsQ0FBYyxlQUFFUCxrQkFBa0I7NEJBQzlDaEIsUUFBUSxDQUFDdUIsRUFBRSxDQUFDLENBQVksYUFBRU4sZ0JBQWdCO3lEQUVuQyxRQUFRLEdBQUYsQ0FBQztnQ0FDWixFQUFFLEVBQUVqQixRQUFRLENBQUN3QixjQUFjLEVBQUUsQ0FBQztvQ0FDNUJ4QixRQUFRLENBQUN3QixjQUFjLENBQUMsQ0FBaUIsa0JBQUVULHFCQUFxQjtvQ0FDaEVmLFFBQVEsQ0FBQ3dCLGNBQWMsQ0FBQyxDQUFjLGVBQUVSLGtCQUFrQjtvQ0FDMURoQixRQUFRLENBQUN3QixjQUFjLENBQUMsQ0FBWSxhQUFFUCxnQkFBZ0I7Z0NBQ3hELENBQUM7NEJBQ0gsQ0FBQzs7Ozs7O1lBZ0JMLENBQUM7bUJBNUJjSCx1QkFBc0I7O0lBNkJ2QyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsRUFBRSxFQUFFLElBQTZCLEVBQUUsQ0FBQztRQUNsQyxHQUFLLENBQUNXLGVBQWUsR0FBRyxDQUFDO1lBQ3ZCQyxhQUFhLEVBQUUsQ0FBQztnQkFDZEMsT0FBTyxFQUFFakMsb0VBQXFCO2dCQUM5QmtDLE9BQU8sRUFBRSxDQUFDO29CQUNSQyxHQUFHLEVBQUUsQ0FBQztBQUNKLHlCQUFDLEVBQUUsQ0FBK0Q7QUFDbEUsMEJBQUUsRUFBRSxDQUFtQztBQUN2QywwQkFBRSxFQUFFLENBQWdEO29CQUN0RCxDQUFDO2dCQUNILENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztRQUNEckIsU0FBUyxHQUFHLEdBQUcsQ0FBQ2Ysa0RBQVMsQ0FBQyxDQUFDO1lBQ3pCUyxPQUFPLEVBQUUsQ0FBUztZQUNsQjRCLGFBQWEsRUFBRSxJQUFJO1lBQ25CTCxlQUFlLEVBQWZBLGVBQWU7UUFDakIsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNLEVBQUN2QixRQUFPLGFBQVBBLFFBQU8sS0FBUEEsSUFBSSxDQUFKQSxDQUFnQixHQUFoQkEsSUFBSSxDQUFKQSxDQUFnQixHQUFoQkEsUUFBTyxDQUFFNkIsT0FBTyxNQUFLdEIsUUFBUSxJQUFJTCxRQUFPLCtFQUM1Q1Isb0RBQU07UUFDTG9DLE9BQU8sRUFBRVYsZUFBZTtRQUN4QlcsS0FBSyxFQUFDLENBQVE7UUFDZEMsS0FBSyxFQUFDLENBQVM7UUFDZkMsTUFBTSxFQUFDLENBQW1CO1FBQzFCQyxlQUFlLEVBQUMsQ0FBUztRQUN6QkMsQ0FBQyxFQUFDLENBQU87UUFDVEMsQ0FBQyxFQUFDLENBQU07a0JBQ1QsQ0FFRDs7Ozs7MkZBRUMxQyxvREFBTTtRQUNMb0MsT0FBTyxFQUFFTyxhQUFhO1FBQ3RCTixLQUFLLEVBQUMsQ0FBUTtRQUNkQyxLQUFLLEVBQUMsQ0FBUztRQUNmQyxNQUFNLEVBQUMsQ0FBbUI7UUFDMUJDLGVBQWUsRUFBQyxDQUFTO1FBQ3pCQyxDQUFDLEVBQUMsQ0FBTztRQUNUQyxDQUFDLEVBQUMsQ0FBTTtrQkFDVCxDQUVEOzs7Ozs7YUFHYUMsYUFBYTtlQUFiQSxjQUFhOzthQUFiQSxjQUFhO1FBQWJBLGNBQWEscUtBQTVCLFFBQVEsWUFBdUIsQ0FBQztnQkFFdEJDLFFBQVEsRUFJUkMsU0FBUyxFQUVUQyxNQUFNLEVBRU50QyxPQUFPLEVBR1BGLE9BQU8sRUFXRXlDLFlBQVksRUFBWkEsYUFBWTs7Ozt3QkFBWkEsWUFBWSxZQUFaQSxjQUFZO21DQUFaQSxhQUFZOzt3QkFBWkEsYUFBWSxZQUFaQSxjQUFZOzRCQUFaQSxhQUFZLHFLQUEzQixRQUFRLFdBQXNCLENBQUM7b0NBQ3ZCQyxTQUFTOzs7OzRDQUFUQSxTQUFTLEdBQUcsR0FBRyxDQUFDakQsbURBQWUsQ0FDbkNFLDREQUFzQixFQUN0QkEsd0RBQWtCLEVBQ2xCNkMsTUFBTTs0Q0FFUjNDLFdBQVcsQ0FBQzZDLFNBQVM7NENBQ3JCckMsUUFBUSxDQUFDcUMsU0FBUzs7Ozs7OzRCQUNwQixDQUFDO21DQVJjRCxhQUFZOzs7OytCQXRCSm5DLFNBQVMsQ0FBQ3VDLE9BQU87O3dCQUFsQ1AsUUFBUTs7K0JBQ1JBLFFBQVEsQ0FBQ1EsTUFBTTs7d0JBRXJCL0MsV0FBVyxDQUFDdUMsUUFBUTt3QkFDZEMsU0FBUyxHQUFHLEdBQUcsQ0FBQzlDLGlFQUE2QixDQUFDNkMsUUFBUTt3QkFFdERFLE1BQU0sR0FBR0QsU0FBUyxDQUFDVSxTQUFTOzsrQkFFWlQsTUFBTSxDQUFDVSxVQUFVOzt3QkFBakNoRCxPQUFPO3dCQUNiQyxVQUFVLENBQUNELE9BQU87d0JBQ2xCaUQsT0FBTyxDQUFDQyxHQUFHLENBQUNsRCxPQUFPOzsrQkFDR3FDLFNBQVMsQ0FBQ2MsVUFBVTs7d0JBQXBDckQsT0FBTzt3QkFDYkMsVUFBVSxDQUFDRCxPQUFPO3dCQUNsQm1ELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDcEQsT0FBTzs4QkFFZkEsT0FBTyxDQUFDNkIsT0FBTyxLQUFLdEIsUUFBUTs7Ozt3QkFDOUIrQyxLQUFLLENBQUMsQ0FBbUM7Ozs7K0JBSXJDYixZQUFZOzs7OzsrQkFXWmMsWUFBWSxDQUFDZixNQUFNOzs7Ozs7O3dCQUV6QixFQUFFLFdBQ01nQixPQUFPLEtBQUssQ0FBbUIsK0JBQy9CQSxPQUFPLEtBQUssQ0FBZSxnQkFDakMsQ0FBQzs0QkFDREwsT0FBTyxDQUFDQyxHQUFHLFVBQU9JLE9BQU87d0JBQzNCLENBQUMsTUFBTSxDQUFDOzRCQUNOTCxPQUFPLENBQUNNLEtBQUs7d0JBQ2YsQ0FBQzs7Ozs7Ozs7Ozs7UUFFTCxDQUFDO2VBNUNjcEIsY0FBYTs7YUE4Q2JqQixlQUFlO2VBQWZBLGdCQUFlOzthQUFmQSxnQkFBZTtRQUFmQSxnQkFBZSxxS0FBOUIsUUFBUSxXQUF5QixDQUFDOzs7O3dCQUNoQytCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQTZCLDhCQUFFbEQsUUFBTyxFQUFFSixRQUFRLEVBQUVFLFFBQU87OytCQUcvRE0sU0FBUyxDQUFDb0QsbUJBQW1COzsrQkFDL0I1RCxRQUFRLGFBQVJBLFFBQVEsS0FBUkEsSUFBSSxDQUFKQSxDQUFvQixHQUFwQkEsSUFBSSxDQUFKQSxDQUFvQixHQUFwQkEsUUFBUSxDQUFFNkQsVUFBVSxLQUFJLE1BQU0sQ0FBQzdELFFBQVEsQ0FBQzZELFVBQVUsS0FBSyxDQUFVOzs7O3dCQUNuRVIsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBNkI7OytCQUNuQ3RELFFBQVEsQ0FBQzZELFVBQVU7O3dCQUUzQkMsWUFBWSxDQUFDQyxLQUFLO3dCQUVsQjFELFVBQVUsQ0FBQyxDQUFDOzRCQUFBLENBQUU7d0JBQUEsQ0FBQzt3QkFDZkosV0FBVyxDQUFDLElBQUk7d0JBQ2hCRixXQUFXLENBQUMsSUFBSTt3QkFDaEJJLFVBQVUsQ0FBQyxDQUFDLENBQUM7OytCQUNQSyxTQUFTLENBQUN3RCxHQUFHOzt3QkFFbkJYLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQWM7Ozs7OztRQUM1QixDQUFDO2VBbEJjaEMsZ0JBQWU7O2FBb0JmbUMsWUFBWSxDQUFDZixNQUFNO2VBQW5CZSxhQUFZOzthQUFaQSxhQUFZO1FBQVpBLGFBQVkscUtBQTNCLFFBQVEsU0FBb0JmLE1BQU0sRUFBRSxDQUFDO2dCQUUzQkUsU0FBUzs7OztrQ0FEZHRDLEtBQUs7Ozs7O2tDQUFJTyxNQUFNOzsrQkFBT1AsS0FBSyxDQUFDMkQsV0FBVzs7Ozs2Q0FBTyxFQUFFOzs7Ozs7d0JBQUUsQ0FBQzs0QkFDOUNyQixTQUFTLEdBQUcsR0FBRyxDQUFDakQsbURBQWUsQ0FDbkNFLCtEQUF5QixFQUN6QkEsd0RBQWtCLEVBQ2xCNkMsTUFBTTs0QkFFUjNDLFdBQVcsQ0FBQzZDLFNBQVM7d0JBQ3ZCLENBQUM7Ozs7OztRQUNILENBQUM7ZUFUY2EsYUFBWTs7QUFVN0IsQ0FBQztHQXRLZTNELGFBQWE7S0FBYkEsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Nvbm5lY3RCdXR0b24uanM/NmRkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBXZWIzTW9kYWwgZnJvbSBcIndlYjNtb2RhbFwiO1xyXG5pbXBvcnQgV2FsbGV0Q29ubmVjdFByb3ZpZGVyIGZyb20gXCJAd2FsbGV0Y29ubmVjdC93ZWIzLXByb3ZpZGVyXCI7XHJcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IENsYXNzaWNSZXdhcmRzIGZyb20gXCIuLi9hYmkvY2xhc3NpY1J3YXJkcy5qc29uXCI7XHJcblxyXG4vLyBpbXBvcnQgeyBjb250cmFjdEFkZHJlc3MgfSBmcm9tIFwiLi4vY29uZmlnL2NvbnRyYWN0QWRkcmVzc1wiO1xyXG4vLyBpbXBvcnQgeyBjb250cmFjdEFCSSB9IGZyb20gXCIuLi9jb25maWcvYWJpXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ29ubmVjdEJ1dHRvbih7IHNldENvbnRyYWN0IH0pIHtcclxuICBjb25zdCBbcHJvdmlkZXIsIHNldFByb3ZpZGVyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtuZXR3b3JrLCBzZXROZXR3b3JrXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFthZGRyZXNzLCBzZXRBZGRyZXNzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFttYWluQywgc2V0TWFpbkNdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgbGV0IHdlYjNNb2RhbDtcclxuICBjb25zdCBDSEFJTl9JRCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NIQUlOX0lEXHJcbiAgICA/IE51bWJlcihwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DSEFJTl9JRClcclxuICAgIDogOTc7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsaXN0ZW5Ub1Byb3ZpZGVyRXZlbnRzKCk7XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gbGlzdGVuVG9Qcm92aWRlckV2ZW50cygpIHtcclxuICAgICAgaWYgKHByb3ZpZGVyKSB7XHJcbiAgICAgICAgcHJvdmlkZXIub24oXCJhY2NvdW50c0NoYW5nZWRcIiwgaGFuZGxlQWNjb3VudHNDaGFuZ2VkKTtcclxuICAgICAgICBwcm92aWRlci5vbihcImNoYWluQ2hhbmdlZFwiLCBoYW5kbGVDaGFpbkNoYW5nZWQpO1xyXG4gICAgICAgIHByb3ZpZGVyLm9uKFwiZGlzY29ubmVjdFwiLCBoYW5kbGVEaXNjb25uZWN0KTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgIGlmIChwcm92aWRlci5yZW1vdmVMaXN0ZW5lcikge1xyXG4gICAgICAgICAgICBwcm92aWRlci5yZW1vdmVMaXN0ZW5lcihcImFjY291bnRzQ2hhbmdlZFwiLCBoYW5kbGVBY2NvdW50c0NoYW5nZWQpO1xyXG4gICAgICAgICAgICBwcm92aWRlci5yZW1vdmVMaXN0ZW5lcihcImNoYWluQ2hhbmdlZFwiLCBoYW5kbGVDaGFpbkNoYW5nZWQpO1xyXG4gICAgICAgICAgICBwcm92aWRlci5yZW1vdmVMaXN0ZW5lcihcImRpc2Nvbm5lY3RcIiwgaGFuZGxlRGlzY29ubmVjdCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlQWNjb3VudHNDaGFuZ2VkKGFjY291bnRzKSB7XHJcbiAgICAgICAgICBzZXRBZGRyZXNzKGFjY291bnRzWzBdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZUNoYWluQ2hhbmdlZCgpIHtcclxuICAgICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgICAgLy8gaHR0cHM6Ly9kb2NzLmV0aGVycy5pby92NS9jb25jZXB0cy9iZXN0LXByYWN0aWNlcy8jYmVzdC1wcmFjdGljZXMtLW5ldHdvcmstY2hhbmdlc1xyXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlRGlzY29ubmVjdCgpIHtcclxuICAgICAgICAgIHJlc2V0Q29ubmVjdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGNvbnN0IHByb3ZpZGVyT3B0aW9ucyA9IHtcclxuICAgICAgd2FsbGV0Y29ubmVjdDoge1xyXG4gICAgICAgIHBhY2thZ2U6IFdhbGxldENvbm5lY3RQcm92aWRlcixcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICBycGM6IHtcclxuICAgICAgICAgICAgNDogXCJodHRwczovL3JpbmtlYnkuaW5mdXJhLmlvL3YzLzlhYTNkOTViM2JjNDQwZmE4OGVhMTJlYWE0NDU2MTYxXCIsIC8vIHJpbmtlYnkgIHRlc3RuZXRcclxuICAgICAgICAgICAgNTY6IFwiaHR0cHM6Ly9ic2MtZGF0YXNlZWQuYmluYW5jZS5vcmcvXCIsIC8vIGJpbmFuY2UgbWFpbm5ldFxyXG4gICAgICAgICAgICA5NzogXCJodHRwczovL2RhdGEtc2VlZC1wcmVic2MtMS1zMS5iaW5hbmNlLm9yZzo4NTQ1XCIsIC8vIGJpbmFuY2UgdGVzdG5ldFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICAgIHdlYjNNb2RhbCA9IG5ldyBXZWIzTW9kYWwoe1xyXG4gICAgICBuZXR3b3JrOiBcIm1haW5uZXRcIixcclxuICAgICAgY2FjaGVQcm92aWRlcjogdHJ1ZSxcclxuICAgICAgcHJvdmlkZXJPcHRpb25zLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbmV0d29yaz8uY2hhaW5JZCA9PT0gQ0hBSU5fSUQgJiYgYWRkcmVzcyA/IChcclxuICAgIDxCdXR0b25cclxuICAgICAgb25DbGljaz17cmVzZXRDb25uZWN0aW9ufVxyXG4gICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgIGNvbG9yPVwiI0M2NkNGRlwiXHJcbiAgICAgIGJvcmRlcj1cIjFweCBzb2xpZCAjQzY2Q0ZGXCJcclxuICAgICAgYmFja2dyb3VuZENvbG9yPVwiIzBCMzU1MlwiXHJcbiAgICAgIHc9XCIxNzVweFwiXHJcbiAgICAgIGg9XCI1MHB4XCJcclxuICAgID5cclxuICAgICAgQk5CIERJU0NPTk5FQ1RcclxuICAgIDwvQnV0dG9uPlxyXG4gICkgOiAoXHJcbiAgICA8QnV0dG9uXHJcbiAgICAgIG9uQ2xpY2s9e2Nvbm5lY3RXYWxsZXR9XHJcbiAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgY29sb3I9XCIjQzY2Q0ZGXCJcclxuICAgICAgYm9yZGVyPVwiMXB4IHNvbGlkICNDNjZDRkZcIlxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I9XCIjMEIzNTUyXCJcclxuICAgICAgdz1cIjE1MHB4XCJcclxuICAgICAgaD1cIjUwcHhcIlxyXG4gICAgPlxyXG4gICAgICBCTkIgQ09OTkVDVFxyXG4gICAgPC9CdXR0b24+XHJcbiAgKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFdhbGxldCgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gYXdhaXQgd2ViM01vZGFsLmNvbm5lY3QoKTtcclxuICAgICAgYXdhaXQgaW5zdGFuY2UuZW5hYmxlKCk7XHJcblxyXG4gICAgICBzZXRQcm92aWRlcihpbnN0YW5jZSk7XHJcbiAgICAgIGNvbnN0IF9wcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihpbnN0YW5jZSk7XHJcblxyXG4gICAgICBjb25zdCBzaWduZXIgPSBfcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XHJcblxyXG4gICAgICBjb25zdCBhZGRyZXNzID0gYXdhaXQgc2lnbmVyLmdldEFkZHJlc3MoKTtcclxuICAgICAgc2V0QWRkcmVzcyhhZGRyZXNzKTtcclxuICAgICAgY29uc29sZS5sb2coYWRkcmVzcyk7XHJcbiAgICAgIGNvbnN0IG5ldHdvcmsgPSBhd2FpdCBfcHJvdmlkZXIuZ2V0TmV0d29yaygpO1xyXG4gICAgICBzZXROZXR3b3JrKG5ldHdvcmspO1xyXG4gICAgICBjb25zb2xlLmxvZyhuZXR3b3JrKTtcclxuXHJcbiAgICAgIGlmIChuZXR3b3JrLmNoYWluSWQgIT09IENIQUlOX0lEKSB7XHJcbiAgICAgICAgYWxlcnQoXCJQbGVhc2UsIGNoYW5nZSB0byBCaW5hbmNlIG5ldHdvcmtcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhd2FpdCBnZXRDb250cmFjdHMoKTtcclxuXHJcbiAgICAgIGFzeW5jIGZ1bmN0aW9uIGdldENvbnRyYWN0cygpIHtcclxuICAgICAgICBjb25zdCBfY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxyXG4gICAgICAgICAgQ2xhc3NpY1Jld2FyZHMuYWRkcmVzcyxcclxuICAgICAgICAgIENsYXNzaWNSZXdhcmRzLmFiaSxcclxuICAgICAgICAgIHNpZ25lclxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc2V0Q29udHJhY3QoX2NvbnRyYWN0KTtcclxuICAgICAgICBzZXRNYWluQyhfY29udHJhY3QpO1xyXG4gICAgICB9XHJcbiAgICAgIGF3YWl0IHNldENvbnRyYWN0cyhzaWduZXIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGVycm9yLm1lc3NhZ2UgPT09IFwiVXNlciBjbG9zZWQgbW9kYWxcIiB8fFxyXG4gICAgICAgIGVycm9yLm1lc3NhZ2UgPT09IFwiVXNlciBSZWplY3RlZFwiXHJcbiAgICAgICkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiByZXNldENvbm5lY3Rpb24oKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImRpc2Nvbm5lY3RpbmcgZnJvbSBwcm92aWRlclwiLCBhZGRyZXNzLCBwcm92aWRlciwgbmV0d29yayk7XHJcbiAgICAvLyBkZWJ1Z2dlcjtcclxuXHJcbiAgICBhd2FpdCB3ZWIzTW9kYWwuY2xlYXJDYWNoZWRQcm92aWRlcigpO1xyXG4gICAgaWYgKHByb3ZpZGVyPy5kaXNjb25uZWN0ICYmIHR5cGVvZiBwcm92aWRlci5kaXNjb25uZWN0ID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJkaXNjb25uZWN0aW5nIGZyb20gcHJvdmlkZXJcIik7XHJcbiAgICAgIGF3YWl0IHByb3ZpZGVyLmRpc2Nvbm5lY3QoKTtcclxuICAgIH1cclxuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG5cclxuICAgIHNldEFkZHJlc3MoW1wiXCJdKTtcclxuICAgIHNldFByb3ZpZGVyKG51bGwpO1xyXG4gICAgc2V0Q29udHJhY3QobnVsbCk7XHJcbiAgICBzZXROZXR3b3JrKHt9KTtcclxuICAgIGF3YWl0IHdlYjNNb2RhbC5vZmYoKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcImRpc2Nvbm5lY3RlZFwiKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIHNldENvbnRyYWN0cyhzaWduZXIpIHtcclxuICAgIGlmKG1haW5DICYmIE51bWJlcihhd2FpdCBtYWluQy50b3RhbFN1cHBseSgpKSA+PSA5MSkge1xyXG4gICAgICBjb25zdCBfY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxyXG4gICAgICAgIENsYXNzaWNSZXdhcmRzLnN1YkFkZHJlc3MsXHJcbiAgICAgICAgQ2xhc3NpY1Jld2FyZHMuYWJpLFxyXG4gICAgICAgIHNpZ25lclxyXG4gICAgICApO1xyXG4gICAgICBzZXRDb250cmFjdChfY29udHJhY3QpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJXZWIzTW9kYWwiLCJXYWxsZXRDb25uZWN0UHJvdmlkZXIiLCJldGhlcnMiLCJCdXR0b24iLCJDbGFzc2ljUmV3YXJkcyIsIkNvbm5lY3RCdXR0b24iLCJzZXRDb250cmFjdCIsInByb3ZpZGVyIiwic2V0UHJvdmlkZXIiLCJuZXR3b3JrIiwic2V0TmV0d29yayIsImFkZHJlc3MiLCJzZXRBZGRyZXNzIiwibWFpbkMiLCJzZXRNYWluQyIsIndlYjNNb2RhbCIsIkNIQUlOX0lEIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0NIQUlOX0lEIiwiTnVtYmVyIiwibGlzdGVuVG9Qcm92aWRlckV2ZW50cyIsImhhbmRsZUFjY291bnRzQ2hhbmdlZCIsImhhbmRsZUNoYWluQ2hhbmdlZCIsImhhbmRsZURpc2Nvbm5lY3QiLCJhY2NvdW50cyIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwicmVzZXRDb25uZWN0aW9uIiwib24iLCJyZW1vdmVMaXN0ZW5lciIsInByb3ZpZGVyT3B0aW9ucyIsIndhbGxldGNvbm5lY3QiLCJwYWNrYWdlIiwib3B0aW9ucyIsInJwYyIsImNhY2hlUHJvdmlkZXIiLCJjaGFpbklkIiwib25DbGljayIsImFsaWduIiwiY29sb3IiLCJib3JkZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ3IiwiaCIsImNvbm5lY3RXYWxsZXQiLCJpbnN0YW5jZSIsIl9wcm92aWRlciIsInNpZ25lciIsImdldENvbnRyYWN0cyIsIl9jb250cmFjdCIsIkNvbnRyYWN0IiwiYWJpIiwiY29ubmVjdCIsImVuYWJsZSIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsImdldFNpZ25lciIsImdldEFkZHJlc3MiLCJjb25zb2xlIiwibG9nIiwiZ2V0TmV0d29yayIsImFsZXJ0Iiwic2V0Q29udHJhY3RzIiwibWVzc2FnZSIsImVycm9yIiwiY2xlYXJDYWNoZWRQcm92aWRlciIsImRpc2Nvbm5lY3QiLCJsb2NhbFN0b3JhZ2UiLCJjbGVhciIsIm9mZiIsInRvdGFsU3VwcGx5Iiwic3ViQWRkcmVzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ConnectButton.js\n");

/***/ })

});