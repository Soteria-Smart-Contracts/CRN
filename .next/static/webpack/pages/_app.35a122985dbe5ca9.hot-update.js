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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ConnectButton\": function() { return /* binding */ ConnectButton; }\n/* harmony export */ });\n/* harmony import */ var E_work_Blockchain_wedgarten_abi_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var E_work_Blockchain_wedgarten_abi_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(E_work_Blockchain_wedgarten_abi_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @walletconnect/web3-provider */ \"./node_modules/@walletconnect/web3-provider/dist/esm/index.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _abi_classicRwards_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../abi/classicRwards.json */ \"./abi/classicRwards.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/process/browser.js\");\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\n// import { contractAddress } from \"../config/contractAddress\";\n// import { contractABI } from \"../config/abi\";\nfunction ConnectButton(param) {\n    var setContract = param.setContract;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), provider = ref[0], setProvider = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), network1 = ref1[0], setNetwork = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), address1 = ref2[0], setAddress = ref2[1];\n    var web3Modal;\n    var CHAIN_ID = process.env.NEXT_PUBLIC_CHAIN_ID ? Number(process.env.NEXT_PUBLIC_CHAIN_ID) : 56;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        listenToProviderEvents();\n        console.log(\"fsdf\");\n        function listenToProviderEvents() {\n            return _listenToProviderEvents.apply(this, arguments);\n        }\n        function _listenToProviderEvents() {\n            _listenToProviderEvents = _asyncToGenerator(E_work_Blockchain_wedgarten_abi_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var handleAccountsChanged, handleChainChanged, handleDisconnect;\n                return E_work_Blockchain_wedgarten_abi_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            handleAccountsChanged = function _handleAccountsChanged(accounts) {\n                                setAddress(accounts[0]);\n                            };\n                            handleChainChanged = function _handleChainChanged() {\n                                debugger;\n                                // https://docs.ethers.io/v5/concepts/best-practices/#best-practices--network-changes\n                                window.location.reload();\n                            };\n                            handleDisconnect = function _handleDisconnect() {\n                                resetConnection();\n                            };\n                            if (!provider) {\n                                _ctx.next = 11;\n                                break;\n                            }\n                            provider.on(\"accountsChanged\", handleAccountsChanged);\n                            provider.on(\"chainChanged\", handleChainChanged);\n                            provider.on(\"disconnect\", handleDisconnect);\n                            return _ctx.abrupt(\"return\", function() {\n                                if (provider.removeListener) {\n                                    provider.removeListener(\"accountsChanged\", handleAccountsChanged);\n                                    provider.removeListener(\"chainChanged\", handleChainChanged);\n                                    provider.removeListener(\"disconnect\", handleDisconnect);\n                                }\n                            });\n                        case 11:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return _listenToProviderEvents.apply(this, arguments);\n        }\n    });\n    if (true) {\n        var providerOptions = {\n            walletconnect: {\n                package: _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                options: {\n                    rpc: {\n                        4: \"https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161\",\n                        56: \"https://bsc-dataseed.binance.org/\",\n                        97: \"https://data-seed-prebsc-1-s1.binance.org:8545\"\n                    }\n                }\n            }\n        };\n        web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_3___default())({\n            network: \"mainnet\",\n            cacheProvider: true,\n            providerOptions: providerOptions\n        });\n    }\n    return (network1 === null || network1 === void 0 ? void 0 : network1.chainId) === CHAIN_ID && address1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n        onClick: resetConnection,\n        align: \"center\",\n        color: \"#C66CFF\",\n        border: \"1px solid #C66CFF\",\n        backgroundColor: \"#0B3552\",\n        w: \"175px\",\n        h: \"50px\",\n        children: \"BNB DISCONNECT\"\n    }, void 0, false, {\n        fileName: \"E:\\\\work\\\\Blockchain\\\\wedgarten(abi)\\\\test\\\\components\\\\ConnectButton.js\",\n        lineNumber: 76,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n        onClick: connectWallet,\n        align: \"center\",\n        color: \"#C66CFF\",\n        border: \"1px solid #C66CFF\",\n        backgroundColor: \"#0B3552\",\n        w: \"150px\",\n        h: \"50px\",\n        children: \"BNB CONNECT\"\n    }, void 0, false, {\n        fileName: \"E:\\\\work\\\\Blockchain\\\\wedgarten(abi)\\\\test\\\\components\\\\ConnectButton.js\",\n        lineNumber: 88,\n        columnNumber: 5\n    }, this);\n    function connectWallet() {\n        return _connectWallet.apply(this, arguments);\n    }\n    function _connectWallet() {\n        _connectWallet = _asyncToGenerator(E_work_Blockchain_wedgarten_abi_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee1() {\n            var instance, _provider, signer, address, network, getContracts, _getContracts;\n            return E_work_Blockchain_wedgarten_abi_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx1) {\n                while(1)switch(_ctx1.prev = _ctx1.next){\n                    case 0:\n                        getContracts = function _getContracts1() {\n                            return _getContracts.apply(this, arguments);\n                        };\n                        _getContracts = function __getContracts() {\n                            _getContracts = _asyncToGenerator(E_work_Blockchain_wedgarten_abi_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                                var _contract;\n                                return E_work_Blockchain_wedgarten_abi_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                    while(1)switch(_ctx.prev = _ctx.next){\n                                        case 0:\n                                            _contract = new ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.Contract(_abi_classicRwards_json__WEBPACK_IMPORTED_MODULE_5__.address, _abi_classicRwards_json__WEBPACK_IMPORTED_MODULE_5__.abi, signer);\n                                            setContract(_contract);\n                                        case 2:\n                                        case \"end\":\n                                            return _ctx.stop();\n                                    }\n                                }, _callee);\n                            }));\n                            return _getContracts.apply(this, arguments);\n                        };\n                        _ctx1.prev = 2;\n                        _ctx1.next = 5;\n                        return web3Modal.connect();\n                    case 5:\n                        instance = _ctx1.sent;\n                        _ctx1.next = 8;\n                        return instance.enable();\n                    case 8:\n                        setProvider(instance);\n                        _provider = new ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.providers.Web3Provider(instance);\n                        signer = _provider.getSigner();\n                        _ctx1.next = 13;\n                        return signer.getAddress();\n                    case 13:\n                        address = _ctx1.sent;\n                        setAddress(address);\n                        console.log(address);\n                        _ctx1.next = 18;\n                        return _provider.getNetwork();\n                    case 18:\n                        network = _ctx1.sent;\n                        setNetwork(network);\n                        console.log(network);\n                        if (!(network.chainId !== CHAIN_ID)) {\n                            _ctx1.next = 24;\n                            break;\n                        }\n                        alert(\"Please, change to Binance network\");\n                        return _ctx1.abrupt(\"return\");\n                    case 24:\n                        getContracts();\n                        ;\n                        ;\n                        _ctx1.next = 32;\n                        break;\n                    case 29:\n                        _ctx1.prev = 29;\n                        _ctx1.t0 = _ctx1[\"catch\"](2);\n                        if (_ctx1.t0.message === \"User closed modal\" || _ctx1.t0.message === \"User Rejected\") {\n                            console.log(_ctx1.t0.message);\n                        } else {\n                            console.error(_ctx1.t0);\n                        }\n                    case 32:\n                    case \"end\":\n                        return _ctx1.stop();\n                }\n            }, _callee1, null, [\n                [\n                    2,\n                    29\n                ]\n            ]);\n        }));\n        return _connectWallet.apply(this, arguments);\n    }\n    function resetConnection() {\n        return _resetConnection.apply(this, arguments);\n    }\n    function _resetConnection() {\n        _resetConnection = _asyncToGenerator(E_work_Blockchain_wedgarten_abi_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return E_work_Blockchain_wedgarten_abi_test_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        console.log(\"disconnecting from provider\", address1, provider, network1);\n                        _ctx.next = 3;\n                        return web3Modal.clearCachedProvider();\n                    case 3:\n                        if (!((provider === null || provider === void 0 ? void 0 : provider.disconnect) && typeof provider.disconnect === \"function\")) {\n                            _ctx.next = 7;\n                            break;\n                        }\n                        console.log(\"disconnecting from provider\");\n                        _ctx.next = 7;\n                        return provider.disconnect();\n                    case 7:\n                        localStorage.clear();\n                        setAddress([\n                            \"\"\n                        ]);\n                        setProvider(null);\n                        setContract(null);\n                        setNetwork({});\n                        _ctx.next = 14;\n                        return web3Modal.off();\n                    case 14:\n                        console.log(\"disconnected\");\n                    case 15:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _resetConnection.apply(this, arguments);\n    }\n}\n_s(ConnectButton, \"87+P0V9Wgw7TOySFtLM/79fzNds=\");\n_c = ConnectButton;\nvar _c;\n$RefreshReg$(_c, \"ConnectButton\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTlCLFFBQVEsV0FBeUIsQ0FBQzs7Ozt3QkFDaENULE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQTZCLDhCQUFFVixRQUFPLEVBQUVKLFFBQVEsRUFBRUUsUUFBTzs7K0JBRy9ESSxTQUFTLENBQUNtRCxtQkFBbUI7OytCQUMvQnpELFFBQVEsYUFBUkEsUUFBUSxLQUFSQSxJQUFJLENBQUpBLENBQW9CLEdBQXBCQSxJQUFJLENBQUpBLENBQW9CLEdBQXBCQSxRQUFRLENBQUUwRCxVQUFVLEtBQUksTUFBTSxDQUFDMUQsUUFBUSxDQUFDMEQsVUFBVSxLQUFLLENBQVU7Ozs7d0JBQ25FN0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBNkI7OytCQUNuQ2QsUUFBUSxDQUFDMEQsVUFBVTs7d0JBRTNCQyxZQUFZLENBQUNDLEtBQUs7d0JBRWxCdkQsVUFBVSxDQUFDLENBQUM7NEJBQUEsQ0FBRTt3QkFBQSxDQUFDO3dCQUNmSixXQUFXLENBQUMsSUFBSTt3QkFDaEJGLFdBQVcsQ0FBQyxJQUFJO3dCQUNoQkksVUFBVSxDQUFDLENBQUMsQ0FBQzs7K0JBQ1BHLFNBQVMsQ0FBQ3VELEdBQUc7O3dCQUVuQmhELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQWM7Ozs7OztRQUM1QixDQUFDO2VBbEJjUSxnQkFBZTs7QUFtQmhDLENBQUM7R0F6SmV4QixhQUFhO0tBQWJBLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db25uZWN0QnV0dG9uLmpzPzZkZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgV2ViM01vZGFsIGZyb20gXCJ3ZWIzbW9kYWxcIjtcclxuaW1wb3J0IFdhbGxldENvbm5lY3RQcm92aWRlciBmcm9tIFwiQHdhbGxldGNvbm5lY3Qvd2ViMy1wcm92aWRlclwiO1xyXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCBDbGFzc2ljUmV3YXJkcyBmcm9tIFwiLi4vYWJpL2NsYXNzaWNSd2FyZHMuanNvblwiO1xyXG5cclxuLy8gaW1wb3J0IHsgY29udHJhY3RBZGRyZXNzIH0gZnJvbSBcIi4uL2NvbmZpZy9jb250cmFjdEFkZHJlc3NcIjtcclxuLy8gaW1wb3J0IHsgY29udHJhY3RBQkkgfSBmcm9tIFwiLi4vY29uZmlnL2FiaVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENvbm5lY3RCdXR0b24oeyBzZXRDb250cmFjdCB9KSB7XHJcbiAgY29uc3QgW3Byb3ZpZGVyLCBzZXRQcm92aWRlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbbmV0d29yaywgc2V0TmV0d29ya10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbYWRkcmVzcywgc2V0QWRkcmVzc10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBsZXQgd2ViM01vZGFsO1xyXG4gIGNvbnN0IENIQUlOX0lEID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ0hBSU5fSURcclxuICAgID8gTnVtYmVyKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NIQUlOX0lEKVxyXG4gICAgOiA1NjtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxpc3RlblRvUHJvdmlkZXJFdmVudHMoKTtcclxuICAgIGNvbnNvbGUubG9nKFwiZnNkZlwiKTtcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBsaXN0ZW5Ub1Byb3ZpZGVyRXZlbnRzKCkge1xyXG4gICAgICBpZiAocHJvdmlkZXIpIHtcclxuICAgICAgICBwcm92aWRlci5vbihcImFjY291bnRzQ2hhbmdlZFwiLCBoYW5kbGVBY2NvdW50c0NoYW5nZWQpO1xyXG4gICAgICAgIHByb3ZpZGVyLm9uKFwiY2hhaW5DaGFuZ2VkXCIsIGhhbmRsZUNoYWluQ2hhbmdlZCk7XHJcbiAgICAgICAgcHJvdmlkZXIub24oXCJkaXNjb25uZWN0XCIsIGhhbmRsZURpc2Nvbm5lY3QpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHByb3ZpZGVyLnJlbW92ZUxpc3RlbmVyKSB7XHJcbiAgICAgICAgICAgIHByb3ZpZGVyLnJlbW92ZUxpc3RlbmVyKFwiYWNjb3VudHNDaGFuZ2VkXCIsIGhhbmRsZUFjY291bnRzQ2hhbmdlZCk7XHJcbiAgICAgICAgICAgIHByb3ZpZGVyLnJlbW92ZUxpc3RlbmVyKFwiY2hhaW5DaGFuZ2VkXCIsIGhhbmRsZUNoYWluQ2hhbmdlZCk7XHJcbiAgICAgICAgICAgIHByb3ZpZGVyLnJlbW92ZUxpc3RlbmVyKFwiZGlzY29ubmVjdFwiLCBoYW5kbGVEaXNjb25uZWN0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVBY2NvdW50c0NoYW5nZWQoYWNjb3VudHMpIHtcclxuICAgICAgICAgIHNldEFkZHJlc3MoYWNjb3VudHNbMF0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlQ2hhaW5DaGFuZ2VkKCkge1xyXG4gICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgICAvLyBodHRwczovL2RvY3MuZXRoZXJzLmlvL3Y1L2NvbmNlcHRzL2Jlc3QtcHJhY3RpY2VzLyNiZXN0LXByYWN0aWNlcy0tbmV0d29yay1jaGFuZ2VzXHJcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVEaXNjb25uZWN0KCkge1xyXG4gICAgICAgICAgcmVzZXRDb25uZWN0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBjb25zdCBwcm92aWRlck9wdGlvbnMgPSB7XHJcbiAgICAgIHdhbGxldGNvbm5lY3Q6IHtcclxuICAgICAgICBwYWNrYWdlOiBXYWxsZXRDb25uZWN0UHJvdmlkZXIsXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgcnBjOiB7XHJcbiAgICAgICAgICAgIDQ6IFwiaHR0cHM6Ly9yaW5rZWJ5LmluZnVyYS5pby92My85YWEzZDk1YjNiYzQ0MGZhODhlYTEyZWFhNDQ1NjE2MVwiLCAvLyByaW5rZWJ5ICB0ZXN0bmV0XHJcbiAgICAgICAgICAgIDU2OiBcImh0dHBzOi8vYnNjLWRhdGFzZWVkLmJpbmFuY2Uub3JnL1wiLCAvLyBiaW5hbmNlIG1haW5uZXRcclxuICAgICAgICAgICAgOTc6IFwiaHR0cHM6Ly9kYXRhLXNlZWQtcHJlYnNjLTEtczEuYmluYW5jZS5vcmc6ODU0NVwiLCAvLyBiaW5hbmNlIHRlc3RuZXRcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgICB3ZWIzTW9kYWwgPSBuZXcgV2ViM01vZGFsKHtcclxuICAgICAgbmV0d29yazogXCJtYWlubmV0XCIsXHJcbiAgICAgIGNhY2hlUHJvdmlkZXI6IHRydWUsXHJcbiAgICAgIHByb3ZpZGVyT3B0aW9ucyxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG5ldHdvcms/LmNoYWluSWQgPT09IENIQUlOX0lEICYmIGFkZHJlc3MgPyAoXHJcbiAgICA8QnV0dG9uXHJcbiAgICAgIG9uQ2xpY2s9e3Jlc2V0Q29ubmVjdGlvbn1cclxuICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICBjb2xvcj1cIiNDNjZDRkZcIlxyXG4gICAgICBib3JkZXI9XCIxcHggc29saWQgI0M2NkNGRlwiXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcj1cIiMwQjM1NTJcIlxyXG4gICAgICB3PVwiMTc1cHhcIlxyXG4gICAgICBoPVwiNTBweFwiXHJcbiAgICA+XHJcbiAgICAgIEJOQiBESVNDT05ORUNUXHJcbiAgICA8L0J1dHRvbj5cclxuICApIDogKFxyXG4gICAgPEJ1dHRvblxyXG4gICAgICBvbkNsaWNrPXtjb25uZWN0V2FsbGV0fVxyXG4gICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgIGNvbG9yPVwiI0M2NkNGRlwiXHJcbiAgICAgIGJvcmRlcj1cIjFweCBzb2xpZCAjQzY2Q0ZGXCJcclxuICAgICAgYmFja2dyb3VuZENvbG9yPVwiIzBCMzU1MlwiXHJcbiAgICAgIHc9XCIxNTBweFwiXHJcbiAgICAgIGg9XCI1MHB4XCJcclxuICAgID5cclxuICAgICAgQk5CIENPTk5FQ1RcclxuICAgIDwvQnV0dG9uPlxyXG4gICk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3RXYWxsZXQoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBpbnN0YW5jZSA9IGF3YWl0IHdlYjNNb2RhbC5jb25uZWN0KCk7XHJcbiAgICAgIGF3YWl0IGluc3RhbmNlLmVuYWJsZSgpO1xyXG5cclxuICAgICAgc2V0UHJvdmlkZXIoaW5zdGFuY2UpO1xyXG4gICAgICBjb25zdCBfcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoaW5zdGFuY2UpO1xyXG5cclxuICAgICAgY29uc3Qgc2lnbmVyID0gX3Byb3ZpZGVyLmdldFNpZ25lcigpO1xyXG5cclxuICAgICAgY29uc3QgYWRkcmVzcyA9IGF3YWl0IHNpZ25lci5nZXRBZGRyZXNzKCk7XHJcbiAgICAgIHNldEFkZHJlc3MoYWRkcmVzcyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGFkZHJlc3MpO1xyXG4gICAgICBjb25zdCBuZXR3b3JrID0gYXdhaXQgX3Byb3ZpZGVyLmdldE5ldHdvcmsoKTtcclxuICAgICAgc2V0TmV0d29yayhuZXR3b3JrKTtcclxuICAgICAgY29uc29sZS5sb2cobmV0d29yayk7XHJcblxyXG4gICAgICBpZiAobmV0d29yay5jaGFpbklkICE9PSBDSEFJTl9JRCkge1xyXG4gICAgICAgIGFsZXJ0KFwiUGxlYXNlLCBjaGFuZ2UgdG8gQmluYW5jZSBuZXR3b3JrXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgZ2V0Q29udHJhY3RzKCk7XHJcblxyXG4gICAgICBhc3luYyBmdW5jdGlvbiBnZXRDb250cmFjdHMoKSB7XHJcbiAgICAgICAgY29uc3QgX2NvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChcclxuICAgICAgICAgIENsYXNzaWNSZXdhcmRzLmFkZHJlc3MsXHJcbiAgICAgICAgICBDbGFzc2ljUmV3YXJkcy5hYmksXHJcbiAgICAgICAgICBzaWduZXJcclxuICAgICAgICApO1xyXG4gICAgICAgIHNldENvbnRyYWN0KF9jb250cmFjdCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBlcnJvci5tZXNzYWdlID09PSBcIlVzZXIgY2xvc2VkIG1vZGFsXCIgfHxcclxuICAgICAgICBlcnJvci5tZXNzYWdlID09PSBcIlVzZXIgUmVqZWN0ZWRcIlxyXG4gICAgICApIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gcmVzZXRDb25uZWN0aW9uKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJkaXNjb25uZWN0aW5nIGZyb20gcHJvdmlkZXJcIiwgYWRkcmVzcywgcHJvdmlkZXIsIG5ldHdvcmspO1xyXG4gICAgLy8gZGVidWdnZXI7XHJcblxyXG4gICAgYXdhaXQgd2ViM01vZGFsLmNsZWFyQ2FjaGVkUHJvdmlkZXIoKTtcclxuICAgIGlmIChwcm92aWRlcj8uZGlzY29ubmVjdCAmJiB0eXBlb2YgcHJvdmlkZXIuZGlzY29ubmVjdCA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZGlzY29ubmVjdGluZyBmcm9tIHByb3ZpZGVyXCIpO1xyXG4gICAgICBhd2FpdCBwcm92aWRlci5kaXNjb25uZWN0KCk7XHJcbiAgICB9XHJcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuXHJcbiAgICBzZXRBZGRyZXNzKFtcIlwiXSk7XHJcbiAgICBzZXRQcm92aWRlcihudWxsKTtcclxuICAgIHNldENvbnRyYWN0KG51bGwpO1xyXG4gICAgc2V0TmV0d29yayh7fSk7XHJcbiAgICBhd2FpdCB3ZWIzTW9kYWwub2ZmKCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJkaXNjb25uZWN0ZWRcIik7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIldlYjNNb2RhbCIsIldhbGxldENvbm5lY3RQcm92aWRlciIsImV0aGVycyIsIkJ1dHRvbiIsIkNsYXNzaWNSZXdhcmRzIiwiQ29ubmVjdEJ1dHRvbiIsInNldENvbnRyYWN0IiwicHJvdmlkZXIiLCJzZXRQcm92aWRlciIsIm5ldHdvcmsiLCJzZXROZXR3b3JrIiwiYWRkcmVzcyIsInNldEFkZHJlc3MiLCJ3ZWIzTW9kYWwiLCJDSEFJTl9JRCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19DSEFJTl9JRCIsIk51bWJlciIsImxpc3RlblRvUHJvdmlkZXJFdmVudHMiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQWNjb3VudHNDaGFuZ2VkIiwiaGFuZGxlQ2hhaW5DaGFuZ2VkIiwiaGFuZGxlRGlzY29ubmVjdCIsImFjY291bnRzIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJyZXNldENvbm5lY3Rpb24iLCJvbiIsInJlbW92ZUxpc3RlbmVyIiwicHJvdmlkZXJPcHRpb25zIiwid2FsbGV0Y29ubmVjdCIsInBhY2thZ2UiLCJvcHRpb25zIiwicnBjIiwiY2FjaGVQcm92aWRlciIsImNoYWluSWQiLCJvbkNsaWNrIiwiYWxpZ24iLCJjb2xvciIsImJvcmRlciIsImJhY2tncm91bmRDb2xvciIsInciLCJoIiwiY29ubmVjdFdhbGxldCIsImluc3RhbmNlIiwiX3Byb3ZpZGVyIiwic2lnbmVyIiwiZ2V0Q29udHJhY3RzIiwiX2NvbnRyYWN0IiwiQ29udHJhY3QiLCJhYmkiLCJjb25uZWN0IiwiZW5hYmxlIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwiZ2V0U2lnbmVyIiwiZ2V0QWRkcmVzcyIsImdldE5ldHdvcmsiLCJhbGVydCIsIm1lc3NhZ2UiLCJlcnJvciIsImNsZWFyQ2FjaGVkUHJvdmlkZXIiLCJkaXNjb25uZWN0IiwibG9jYWxTdG9yYWdlIiwiY2xlYXIiLCJvZmYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ConnectButton.js\n");

/***/ })

});