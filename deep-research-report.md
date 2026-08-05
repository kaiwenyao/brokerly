# 六家券商美股与ETF交易费用深度对比

## 执行摘要

本报告严格采用你的既定前提：**IBKR 为美国版账户，Charles Schwab 为美国版账户；Trading 212、Trade Republic、Robinhood 和 Revolut 为欧洲版账户；不讨论开户资格、居住资格与任何税务；只计算股票和 ETF 相关交易成本。** 所有费率核对截至 **2026 年 8 月 5 日**。

综合显性佣金、外汇成本、产品性质和高频交易累积费用，核心结论如下：

| 使用场景 | 费用优势平台 | 核心原因 |
|---|---|---|
| 已经持有美元，买卖真实美股 | **Schwab US / IBKR Lite** | 普通网上美股交易佣金为 $0；买入不产生 SEC、FINRA TAF 等卖方监管费。IBKR Pro 则至少收取 $0.35 或 $1。citeturn17view1turn18search1 |
| 欧元资金，要求买真实美国本土 ETF，例如 VOO、VTI、SPY、QQQ | **Trading 212 Invest** | 官方目录明确列有美国上市的 VOO、VTI、SPY、QQQ；交易佣金为零，欧元直接交易的 FX 费为 0.15%，也可一次换成美元后长期使用美元余额。citeturn20view0turn20view3turn20view6turn20view7turn20view8 |
| 欧元兑换美元后在美国券商长期交易 | **IBKR 自动换汇或 Revolut 工作日换汇** | IBKR 自动换汇加点约 0.03%；Revolut Standard 在工作日且未超过当月换汇额度时没有明确换汇手续费，但使用 Revolut 自有浮动汇率，实际成交汇率不保证等同 ECB 中间价。citeturn17view4turn20view19 |
| 高频买卖且使用美元余额 | **IBKR Lite、Schwab US 或 Trading 212** | 三者普通合资格交易均可做到零显性佣金；Trading 212 若预先持有美元，不会每笔重复收 0.15% FX。citeturn17view1turn18search1turn20view3 |
| 只想以低金额取得美国市场价格敞口，不要求持有真正证券 | **Robinhood Europe** | 每单仅明确收取 0.10% EUR/USD FX 费，但购买的是 Robinhood Europe 发行的衍生品 Stock Token，不是 AAPL、VOO 等实际股票或 ETF。citeturn20view13turn20view14 |
| 定期买欧洲注册 UCITS ETF | **Revolut 投资计划或 Trade Republic** | Revolut 的部分 ETP 投资计划买单免佣；Trade Republic 单笔通常为 €1，适合把金额合并成较少、较大的订单。两者都不应被视为直接购买美国本土 VOO。citeturn21search1turn20view9turn20view17 |

最重要的产品区别是：**VOO、VTI、SPY、QQQ 是美国注册、美国上市的 ETF；欧洲平台提供的“标普 500 ETF”经常是另一个独立的 UCITS 基金，而不是 VOO；Robinhood Europe 的 ETF Token 更不是 ETF 份额，而是衍生合约。** Tracking index 相同不代表证券、基金注册地、ISIN、基金资产、费用率、分红方式或交易场所相同。citeturn20view8turn20view13turn20view17

## 研究口径与产品性质

### 价格及汇率假设

为使六个平台可以使用相同基准进行计算，示例采用以下时点价格：

| 项目 | 基准 |
|---|---:|
| AAPL | **$309.12/股** |
| VOO | **$709.35/股** |
| EUR/USD | **€1 = $1.1554** |
| 基准日期 | **2026 年 8 月 5 日** |

AAPL 和 VOO 使用 2026 年 8 月 5 日约 16:26 UTC 的市场价格；EUR/USD 使用欧洲央行当日参考汇率。ECB 明确说明其参考汇率主要用于信息和估值，并非可保证成交的交易汇率。citeturn0finance0turn0finance1turn15search0turn15search6

所有例子均作以下处理：

- 假设使用网上自主下单，而不是电话或人工经纪服务。
- 买入例子不含 SEC Section 31、FINRA TAF，因为这些通常只在**卖出**美国证券时收取。
- 不把买卖价差计为固定金额，因为价差会随交易时点、市场流动性、订单类型和执行场所变化。
- 不纳入 ETF 内部年度管理费或 TER；该费用反映在基金净值中，不是在下单时额外从现金余额扣除。
- 不计算银行卡发卡行、SWIFT 中转行、收款银行或非平台收取的费用。
- 结果四舍五入至美分或欧分；真实成交确认书可能因汇率、分笔成交和费用取整产生数美分差异。

### 美国本土 ETF、UCITS ETF 与 Token 的差别

| 类型 | 实际持有什么 | VOO 示例 | 主要区别 |
|---|---|---|---|
| 美国本土 ETF | 美国注册基金的实际 ETF 份额，通常在 NYSE Arca 或 Nasdaq 交易 | VOO、VTI、SPY、QQQ | 美国 ISIN、美国基金法律实体、美元交易；投资者持有相应 ETF 的实际权益 |
| UCITS ETF | 爱尔兰、卢森堡等地注册的独立欧洲基金份额 | VUSA、VUAA、VUAG 等可能跟踪 S&P 500 | 与 VOO 不是同一证券；ISIN、TER、分红或累积方式、交易币种和跟踪结构可能不同 |
| 合成 UCITS ETF | 通过互换等衍生合约复制指数的 UCITS 基金 | 取决于具体基金 | 仍是真实基金份额，但指数敞口主要来自衍生品；不能把所有 UCITS ETF 都称为合成 |
| Robinhood Stock Token | 与 Robinhood Europe 订立的衍生合约 | 可能存在跟踪某股票或 ETF 的 Token | 不拥有基础股票或 ETF，不具有传统股东投票权，不能转至其他证券账户或链上钱包 |

Trading 212 的官方产品目录同时列有美国本土 VOO、VTI、QQQ 等，也列有欧洲 UCITS 替代品；Revolut Europe 明确表示其 ETF 范围为在欧盟注册的非复杂 ETF；Robinhood Europe 明确表示 Stock Tokens 是衍生合约而非实际股票或 ETF。citeturn20view6turn20view7turn20view8turn20view13turn20view14turn20view17

### ETF 支持情况总览

| 项目 | IBKR US | Schwab US | Trading 212 欧洲版 | Trade Republic 欧洲版 | Robinhood 欧洲版 | Revolut Trading 欧洲版 |
|---|---|---|---|---|---|---|
| 美股 | 真实股票 | 真实股票 | Invest 账户为真实股票；CFD 不纳入本报告 | 真实证券；碎股交易由特定执行机制处理 | **不是股票，仅 Stock Token 衍生品** | 真实股票，客户为受益所有人 |
| 美国本土 ETF | **支持** | **支持** | **官方目录明确支持部分美国本土 ETF** | 官方公开页仅称超过 2,000 只 ETF，准确目录在 app；公开资料未确认 VOO 等 | **不持有 ETF，仅可能提供跟踪 ETF 的 Token** | **不支持美国本土 ETF；提供欧盟注册 ETF** |
| VOO | 是 | 是 | 是，官方列示 NYSE VOO | **未公开/未找到明确官方确认** | 公开目录只在 app；即使存在也是 Token | 否；应使用独立的 UCITS 替代品 |
| VTI | 是 | 是 | 是，官方列示 NYSE VTI | 未公开/未找到 | 同上，仅可能是 Token | 否 |
| SPY | 是 | 是 | 是，官方产品页可查 | 未公开/未找到 | 同上，仅可能是 Token | 否 |
| QQQ | 是 | 是 | 是，官方列示 Nasdaq、ISIN US46090E1038 | 未公开/未找到 | 同上，仅可能是 Token | 否 |
| UCITS ETF | 支持欧洲市场产品 | Schwab Global 等渠道可能提供外国证券，但不属于普通美国免佣交易的同一执行路径 | 支持大量 UCITS ETF | 核心 ETF 产品范围，准确清单依 app | 不提供传统 UCITS ETF 持仓 | 支持欧盟注册非复杂 ETF |
| 碎股 | 多数合资格股票和 ETF 支持 | Schwab Stock Slices 主要针对 S&P 500 股票；ETF 碎股能力有限 | 股票和 ETF 可从低金额购买 | 部分股票和 ETF 最低 €1，碎股市价单执行 | 支持 Token 碎片，最低约 €1 | 支持部分股票和 ETF 碎股 |

Trading 212、Trade Republic、Robinhood 和 Revolut 的具体证券范围可能随账户所属欧洲实体、产品审批和 app 目录变化；这不是开户资格问题，而是**同一品牌不同账户实体可能展示不同产品清单**。Trade Republic 官方明确表示，并非其交易合作方列出的所有 ETF 都一定可在 Trade Republic 交易。citeturn20view8turn20view12turn20view13turn20view17turn21search4turn21search9

## 全部费用横向比较

下表所有网页及费率均于 **2026 年 8 月 5 日**核对。若官方网页没有单列某项收费，则标记为“未单列”或“未公开/未找到”，而不是推定绝对不存在。

| 费用项目 | IBKR US | Schwab US | Trading 212 欧洲版 | Trade Republic 欧洲版 | Robinhood 欧洲版 | Revolut 欧洲版 |
|---|---|---|---|---|---|---|
| **普通美股及美国 ETF 佣金** | Lite：$0；Pro Fixed：$0.005/股，最低 $1、最高成交额 1%；Pro Tiered：$0.0005–$0.0035/股，最低 $0.35，另加外部费用。citeturn17view1 | 网上交易美国上市股票及 ETF：$0；人工经纪服务通常另加 $25，自动电话约 $5。citeturn18search1turn18search6 | Invest：佣金 $0；主要平台收费为 FX。citeturn20view5turn20view8 | 不收“订单佣金”，每笔通常收 **€1 外部结算费**；碎股同样 €1，另有价差和第三方费用。citeturn20view9turn21search4 | Stock Tokens 不收交易佣金；只明确收每单 0.10% FX，但产品不是实际股票或 ETF。citeturn20view13turn20view14 | 每月免佣额度：Standard 1 笔、Plus 3 笔、Premium 5 笔、Metal/Ultra 10 笔；超额后 Standard/Plus/Premium/Metal 为 0.25% 或 €1 取高，Ultra/Trading Pro 为 0.12% 或 €1 取高。citeturn21search1 |
| **SEC Section 31** | 美国证券卖出时可能转嫁；现行法定费率为卖出金额的 $0.0000206，即每百万美元 $20.60。Fixed 已包含监管费，Tiered 直接转嫁。citeturn10search0turn17view1 | 美国证券卖出时转嫁，不在买入时收取。citeturn12search1turn12search9 | 官方帮助页仍显示旧值 $0.0000278×卖出额；该页与 2026 年 4 月 4 日起 SEC 的 $0.0000206 现行费率不一致，应以订单预览和实际成交单为准。citeturn20view1turn10search0 | 对通过欧洲执行场所交易的证券未单列美国 SEC 费；Direct Price 若选择其他全球场所，具体第三方费用应以订单预览为准。citeturn20view11turn21search4 | 不直接购买美国证券，因此不向客户单列 SEC 股票卖出费。citeturn20view13 | 美国上市股票卖出时会从卖出款中扣除适用监管费。citeturn20view18 |
| **FINRA TAF** | Tiered/适用账户按卖出股数转嫁；2026 年券商费率页普遍列 $0.000195/股、每笔最高 $9.79。citeturn12search0 | 卖出美国股票及 ETF 时转嫁；Schwab 当前页面列 $0.000195/股、最高 $9.79。citeturn12search9 | 官方帮助页列 $0.000195×卖出股数。citeturn20view1 | 未单列美国 FINRA TAF | 不适用直接证券交易 | 美国上市股票卖出时可能扣除；平台当前页面列 2026 年 TAF。citeturn12search2turn20view18 |
| **交易所、ECN及流动性费用** | Lite 通常不单列；Pro Fixed 包含；Pro Tiered 按实际场所费用和返佣转嫁，可能产生费用或返还。citeturn17view0turn17view1 | 普通网上交易不单列；仍承担市场买卖价差。 | 普通 Invest 交易未单列美国交易所费；订单预览会显示适用费用。citeturn20view4 | €1 外部结算费之外，官方明确提示可能有价差和第三方费用。citeturn21search4 | 无直接交易所费用；Token 定价跟踪基础证券。 | 普通订单未单列交易所费；美股卖方监管费另计。 |
| **清算、结算、CAT等费用** | Pro Fixed 已包含；Tiered 可能包括 NSCC/DTC、CAT 和其他外部费用。IBKR 当前费率表列出的典型清算项约为 $0.00020/股，CAT 约 $0.000003/股。citeturn12search0turn17view1 | 普通零佣交易不单列客户清算费 | 不单列清算费 | €1 被定义为外部结算成本；碎股另有潜在第三方成本。citeturn20view9turn21search4 | 不单列 | 不单列；托管费为零。citeturn21search1 |
| **EUR→USD 换汇** | 自动换汇：汇率加减约 0.03%，无另收佣金；手动现货 FX 起步约 0.20 个基点，最低 $2/单。citeturn17view4turn17view5 | Schwab Global Account 公布的小额换汇档位为约 1%；标准账户或人工处理的实际汇率报价可能依交易路径而异。citeturn0search10turn18search5 | 现货汇率加 0.15%；可持有 EUR 和 USD，预先换汇后不会每笔重复转换。citeturn20view0turn20view3 | 股票和 ETF 通常以欧元报价和结算，没有可单独提取的 USD 余额；外币收入自动换成 EUR，相关成本可能反映于换汇或报价。citeturn21search0 | 每次买入和卖出均自动 EUR/USD 转换并加 0.10%；不能把该功能当作可提取 USD 的独立换汇服务。citeturn20view13turn20view14 | Standard 在工作日、当月换汇额度内不收明确换汇费；周末 1%；超过计划公平使用额度可能收费。使用 Revolut 自有浮动汇率。citeturn20view19turn6search0 |
| **平台或账户管理费** | 最低余额 $0，维护费 $0，无 inactivity fee。citeturn17view1turn16search17 | 无账户和交易最低额；标准经纪账户维护费 $0。citeturn18search1turn18search5 | 不收平台费和托管费；无 inactivity fee。citeturn20view4turn2search19 | 官方费用页未列一般证券账户月费；主要显性证券交易费为每笔 €1。 | 官方称除每单 0.10% FX 外无其他 Robinhood 费用。citeturn20view13 | Standard 计划为免费；Plus、Premium、Metal、Ultra 为可选付费计划，费率和权益依国家而异。爱尔兰当前示例为 Plus €3.99/月、Premium €8.99/月、Metal €15.99/月、Ultra 约 €55/月。citeturn21search7turn21search11 |
| **托管费** | $0 标准账户维护费 | $0 标准账户维护费 | $0 | 未找到单独托管费项目 | Token 由 Robinhood Europe 记录，非传统证券托管 | $0；但转出证券至第三方通常收 $35/持仓。citeturn21search1 |
| **市场数据费** | Cboe One 与 IEX 的美国股票/ETF 非整合实时数据免费；完整 NBBO/整合行情或专业数据包需订阅，专业客户价格更高。citeturn16search2turn13search9 | 个人非专业客户通常可获得实时行情；Nasdaq TotalView 等深度数据可能需要满足条件或付费。citeturn13search5turn13search20 | 未找到普通 Invest 行情的独立订阅费 | Best Price 会比较实时可交易报价；未找到普通 app 行情单独月费。citeturn20view11 | 未找到单独行情费 | 未找到普通交易行情的单独月费 |
| **股票融资利率** | Lite：IBKR 基准利率约加 2.5%；Pro 起步约为基准加 1.5%，借款越大加点越低。实际基准会变化。citeturn17view1turn17view2 | 当前美元保证金融资：低于 $25,000 约 11.825%；$25,000–49,999 为 11.325%；$50,000–99,999 为 10.375%；$100,000–249,999 为 10.325%；$250,000–499,999 为 10.075%；更大金额协商。citeturn14search0 | Invest 账户不提供股票保证金融资；CFD 隔夜利息不属于本报告范围。citeturn20view4 | 未找到普通证券账户保证金融资费率；按现金证券账户处理 | Stock Tokens 页面未公布股票保证金融资安排；按全额预付 Token 处理 | 普通股票/ETF 服务未公布保证金借款费率；按现金交易处理 |
| **其他容易忽视的费用** | Lite 的夜盘、部分开收盘竞价、低价股或超出特定比例的特殊订单可能转为 Fixed 费率；定投也可能使用 Fixed 佣金。citeturn17view0turn17view5 | 人工经纪 $25；ADR、外国证券或特殊服务可能另收费。citeturn18search6turn18search20 | 银行卡、Apple Pay、Google Pay 等累计入金前 €2,000 免费，超过后收 0.7%；银行转账免费。citeturn20view2 | 碎股每笔仍 €1；ETF 自身管理费内含于产品价格；成交价差可能比 €1 更重要。citeturn20view9turn21search4 | 买入和卖出都会发生 0.10% FX，完整买卖一轮名义 FX 成本约 0.20%，还要承受 Token 发行人风险。citeturn20view14 | 超过免费订单数量后最低 €1；ADR 通常可有 $0.01–$0.05/股年度转嫁费；转出 $35/持仓。citeturn21search1 |
| **“免佣”收入来源或隐性成本** | IBKR Lite 官方说明其可通过订单流付款支持零佣金；Pro Tiered/Fixed 则通过显性佣金和执行费用收费。citeturn16search8 | Schwab 官方承认从流动性提供方和交易场所获得订单流付款或返佣；这不是客户账单上的单独费用，也不等于直接加宽证券报价。citeturn19search1turn19search8 | 官方称 Invest 主要收入为 0.15% FX 和股票出借收益；CFD 点差属于另一个产品。citeturn20view5 | €1 之外仍有市场价差、第三方成本和可能的执行场所经济利益。citeturn21search4 | 主要显性收费就是每单 0.10% FX；不存在实际证券转入转出能力。citeturn20view13 | 通过超额交易佣金、付费计划、FX 和其他金融服务收费；并非所有用户都是真正“无限免佣”。citeturn21search1turn20view19 |

### 国家和账户类型差异

IBKR US 最大差异是 **Lite 与 Pro**：Lite 普通美国上市股票和 ETF 为零佣金，但部分特殊交易会转为 Fixed；Pro Fixed 每笔最低 $1，Pro Tiered 每笔最低 $0.35 并转嫁外部费用。citeturn17view0turn17view1

Trading 212 欧洲 Invest 账户的 FX 费为 0.15%，而其澳大利亚实体官方列出的 FX 费为 0.40%；本报告只使用欧洲版 0.15%。可持有的基础货币也可能因账户实体而不同。citeturn2search0turn20view3

Trade Republic 欧元区页面通常列 €1 外部结算费；采用其他基础货币的国家可能以当地货币收取相近固定费，例如部分波兰页面列 4 PLN。准确金额应以该账户下单确认页为准。citeturn1search10turn20view9

Revolut 的免费订单数量、最低交易费、换汇额度和付费计划价格均随国家及计划变化。本报告采用 **Revolut Ireland/euro-area** 官方页面作为欧元账户代表。citeturn21search1turn20view19

## AAPL 与 VOO 买入成本实例

### 使用现有美元余额

在美元余额已经存在的情况下，买入不需要换汇；SEC 和 FINRA 费用均为零，因为本例是买入。

| 平台及费率方案 | AAPL 1 股 | AAPL 10 股 | VOO 1 股 | VOO 10 股 |
|---|---:|---:|---:|---:|
| **IBKR Lite** | 成交 $309.12 + 佣金 $0 = **$309.12** | $3,091.20 + $0 = **$3,091.20** | $709.35 + $0 = **$709.35** | $7,093.50 + $0 = **$7,093.50** |
| **IBKR Pro Fixed** | $309.12 + 最低佣金 $1 = **$310.12** | $3,091.20 + $1 = **$3,092.20** | $709.35 + $1 = **$710.35** | $7,093.50 + $1 = **$7,094.50** |
| **IBKR Pro Tiered** | $309.12 + 至少约 $0.35 + 变量外部费，约 **$309.47 起** | $3,091.20 + 至少约 $0.35，约 **$3,091.55 起** | 约 **$709.70 起** | 约 **$7,093.85 起** |
| **Schwab US 网上交易** | $309.12 + $0 = **$309.12** | $3,091.20 + $0 = **$3,091.20** | $709.35 + $0 = **$709.35** | $7,093.50 + $0 = **$7,093.50** |
| **Trading 212，选择 USD 余额结算** | $309.12 + $0 = **$309.12** | $3,091.20 + $0 = **$3,091.20** | $709.35 + $0 = **$709.35** | $7,093.50 + $0 = **$7,093.50** |
| **Trade Republic** | 以交易场所的 EUR 报价成交，不可按美国 AAPL 美元报价给出精确金额；费用为 **实际 EUR 成交额 + €1 + 价差/第三方费** | 同左，每张订单仍主要是 **€1 + 价差** | VOO 是否直接可交易，公开官方目录未确认 | 同左 |
| **Robinhood Europe** | 不能用 USD 现金买一股实际 AAPL；只能买等值 AAPL Stock Token，另收 0.10% FX | 同左 | 不能持有实际 VOO；若 app 有相应 Token，也只是衍生品 | 同左 |
| **Revolut Europe** | AAPL 为实际美股；若处于月度免费订单额度内，**$309.12 等值**；超额后另收至少 €1 | 免费额度内为 $3,091.20 等值；超额后佣金为订单额 0.25% 或 €1 取高 | 美国本土 VOO 不提供 | 美国本土 VOO 不提供 |

IBKR 费率来自其 Lite、Pro Fixed 和 Pro Tiered 官方价目；Schwab 的美国上市股票和 ETF 网上交易佣金为 $0；Trading 212 Invest 佣金为零且多币种账户可直接用美元余额下单。citeturn17view1turn18search1turn20view3turn20view5

### 直接从欧元余额支付

以下 EUR 金额使用 ECB 参考汇率 €1=$1.1554 计算，并把平台明确列出的换汇加点纳入。由于实际报价会随市场变化，表中是**同一时点的可比估算**，不是限价成交保证。

| 平台及换汇路径 | AAPL 1 股 | AAPL 10 股 | VOO 1 股 | VOO 10 股 |
|---|---:|---:|---:|---:|
| **IBKR Lite 自动换汇 0.03%** | $309.12 ÷（1.1554×99.97%）= **€267.62** | **€2,676.24** | **€614.13** | **€6,141.27** |
| **IBKR Pro Fixed + 自动换汇** | ($309.12+$1) ÷（1.1554×99.97%）= **€268.49** | **€2,677.11** | **€614.99** | **€6,142.14** |
| **Schwab 小额 FX 档位约 1%** | $309.12 ÷（1.1554×99%）= **€270.25** | **€2,702.46** | **€620.14** | **€6,201.45** |
| **Trading 212 直接 EUR 下单，FX 0.15%** | $309.12 ÷（1.1554×99.85%）= **€267.95** | **€2,679.46** | **€614.87** | **€6,148.66** |
| **Trade Republic 理论中间价估算** | 理论中间价 €267.54 + €1 = **€268.54 起**，另加实际价差 | €2,675.44 + €1 = **€2,676.44 起**，另加价差 | VOO 公开目录未确认；不可给出可靠实盘数 | 同左 |
| **Robinhood AAPL/ETF Token，FX 0.10%** | 若 AAPL Token 可见：$309.12 ÷（1.1554×99.90%）= **€267.81** | **€2,678.12** | 若有 VOO Token：**€614.56**；但不是 VOO 份额 | **€6,145.58**；但不是 VOO 份额 |
| **Revolut Standard，第一笔免费订单** | 工作日且当月 €1,000 换汇额度未使用：约 **€267.54**；实际按 Revolut 汇率 | 理论 EUR 额 €2,675.44；超过 €1,000 的 €1,675.44 若按 1% fair-use fee，约加 €16.75，总计 **€2,692.19** | 不提供美国 VOO | 不提供美国 VOO |

若 Revolut Standard 的月度免费交易订单已经使用完，AAPL 1 股还需加 **€1**，总计约 **€268.54**；AAPL 10 股的交易佣金约为 €2,675.44×0.25%=**€6.69**，叠加上述超额 FX 后约为 **€2,698.88**。Revolut 的真实结果还会受到其自有换汇报价影响。citeturn21search1turn20view19

### VOO 不可用时的等值 ETF 例子

对于 Revolut，VOO 本身不可买。假设改买一只**以欧元交易、在欧盟注册的 S&P 500 UCITS ETF**，并投资 €1,000：

| 情形 | 费用 |
|---|---:|
| 当月免费订单额度内 | ETF 成交金额 €1,000 + 佣金 €0 + FX €0 = **€1,000** |
| 免费额度用完，Standard 计划 | €1,000 + 0.25%佣金 €2.50 = **€1,002.50** |
| 使用符合条件的 Revolut ETP 投资计划 | 平台买入佣金可能为 €0；ETF 自身 TER 仍存在 |

这只是“跟踪同一指数的投资替代”，并不意味着所持证券变成 VOO。Revolut 明确将 ETF 范围限定为欧盟注册的非复杂 ETF。citeturn20view17turn21search1

对于 Trade Republic，若购买 €1,000 的可用 UCITS ETF，普通单笔订单的已知最低现金支出通常是：

\[
€1,000\text{ 成交额}+€1\text{ 外部结算费}=€1,001
\]

实际经济成本还包括买卖价差和基金内部费用。碎股交易同样收取 €1，因此 €10 的碎股订单相当于立即承担约 10% 的固定交易费，而 €1,000 订单的固定费仅约 0.10%。citeturn20view9turn21search4

## 一千欧元兑换美元比较

### 可比假设

基准为 ECB 2026 年 8 月 5 日参考汇率：

\[
€1,000 \times 1.1554 = \$1,155.40
\]

这是无费用理论上限。以下结果只计算平台侧明确汇率加点或最低佣金，不包括银行卡发卡行、跨境汇款、中转行和收款银行费用。citeturn15search0turn15search6

### 实际到账或投资能力

| 排名 | 路径 | 平台费用假设 | 理论得到的美元 | 相对 ECB 基准损失 | 是否为可提取 USD |
|---:|---|---:|---:|---:|---|
| 1 | **Revolut Standard 工作日** | 未超过当月 €1,000 换汇额度，明确手续费 0%；实际使用 Revolut 浮动汇率 | **约 $1,155.40** | 明确费用 €0；实际汇差未知 | 是 |
| 2 | **IBKR 自动换汇用于买证券** | 0.03% 汇率加点 | **$1,155.05** | 约 €0.30 | 通常用于自动覆盖交易所需货币；不等同独立低成本现金换汇订单 |
| 3 | **Trading 212 直接兑换** | 0.15% | **$1,153.67** | €1.50 | 可在多币种 Invest 余额内持有 USD |
| 4 | **IBKR 手动现货 FX** | 0.20 bp 计算值低于最低额，因此收 $2 | **$1,153.40** | 约 €1.73 | 是 |
| 5 | **Schwab 小额换汇档位** | 约 1% | **$1,143.85** | €10.00 | 是，但入金和转换路径可能产生额外银行费用 |
| — | **Robinhood Europe 自动换汇** | 每次下单 0.10% | **$1,154.24 的 Token 购买能力** | €1.00 | **否，不形成可提取 USD 现金** |
| — | **Trade Republic** | 无独立 USD 现金余额兑换路径 | 不适用 | 不适用 | 否 |
| — | **Revolut 周末** | 1% 周末费 | **约 $1,143.85** | €10.00，另有实际汇差 | 是 |

IBKR 自动换汇的成本低于手动换汇最低 $2，但它主要是在系统为了完成交易而自动转换现金时适用；若目标是获得并长期持有明确的美元现金余额，$1,000 规模的手动 FX 订单反而会被 $2 最低佣金主导。citeturn17view4turn17view5

Trading 212 的银行卡入金还存在一项重要条件：银行卡、Apple Pay、Google Pay 等渠道的累计入金在前 €2,000 内免费，超过累计门槛后收取 0.7%。若该门槛已经用完，则本次 €1,000 会先产生 €7 入金费，只剩 €993 换汇；再扣 0.15% FX 后约得到 **$1,145.59**，会明显落后于 IBKR 手动换汇。银行转账则不收 Trading 212 入金费。citeturn20view2

### 汇率成本图

下图以“相对 ECB 理论中间价损失的欧元”等值表示，越短越便宜：

| 路径 | 估算 FX 成本 | 相对条形 |
|---|---:|---|
| Revolut 工作日、额度内 | €0 明确费用，实际汇差未知 |  |
| IBKR 自动换汇 | €0.30 | █ |
| Robinhood Token 自动换汇 | €1.00 | ████ |
| Trading 212 | €1.50 | ██████ |
| IBKR 手动 FX | €1.73 | ███████ |
| Schwab 小额 FX | €10.00 | ████████████████████████████████████████ |
| Revolut 周末 | €10.00 | ████████████████████████████████████████ |

因此，若 €1,000 仍在普通银行卡中，最合理的路径取决于最终用途：

| 最终用途 | 更合理的路径 |
|---|---|
| 想得到可自由持有、转账的美元现金 | 工作日 Revolut；其次 IBKR 手动 FX |
| 马上在 IBKR 买美股/ETF | 把 EUR 汇入 IBKR，并使用自动换汇，约 0.03% |
| 在 Trading 212 长期交易 | 在累计免费入金门槛内可用银行卡；超过后优先银行转账，再一次性以 0.15% 换为 USD |
| 在 Schwab 买证券 | 若已有其他低成本美元来源，先在外部换成美元再入金通常比 Schwab 约 1% 小额换汇更便宜 |
| 在 Robinhood Europe 投资 | 只能获得 Token 购买能力，每次买卖都发生 0.10% FX，不能作为美元兑换渠道 |
| 在 Trade Republic 投资 | 保持 EUR，购买 EUR 报价证券；该平台不适合作为 EUR→USD 现金兑换工具 |

## 不同交易频率下的费用选择

### 低频交易：每月少于十笔

若资金已经是美元，**Schwab US 和 IBKR Lite** 的显性交易费用最优：AAPL、VOO 等普通网上订单均为零佣金。两者的差异更多在执行、功能和订单流模式，而不在账单佣金。IBKR Lite 与 Schwab 均可能通过订单流付款或交易场所返佣获得收入，但这不是平台直接向客户收取的固定价差。citeturn16search8turn19search1

若资金是欧元并要求真实美国 ETF，**Trading 212** 通常最有优势：只需承担一次 0.15% 换汇，之后使用 USD 余额买卖 VOO、VTI、SPY、QQQ 不再重复换汇。相比之下，Robinhood 的 0.10% 看起来更低，但它提供的是 Token，而且买入和卖出各发生一次 FX。citeturn20view0turn20view3turn20view13

若只定期买 UCITS ETF，Revolut 每月免费订单或符合条件的 ETP 投资计划可能为零佣；Trade Republic 每笔 €1 更适合较大金额订单，不适合大量 €10–€50 的手动碎股单。citeturn21search1turn21search4

### 中频交易：每月十至五十笔

在美元已经准备好的情况下，显性费用排序大致是：

| 平台 | 中频成本表现 |
|---|---|
| Schwab US | 合资格网上美股和 ETF 仍为 $0 |
| IBKR Lite | 普通合资格交易仍为 $0，但特殊时段和订单规则需要注意 |
| Trading 212 | USD 余额交易仍为 $0；最适合预先一次换汇 |
| IBKR Pro Tiered | 每单至少约 $0.35，加外部费用；可能换取更透明的路由和返佣机制 |
| Trade Republic | 20 笔约 €20 固定费，另有价差 |
| Revolut Standard | 只有首笔免费，之后多数订单至少 €1 或 0.25% |
| Robinhood Europe | 无佣金，但每次买卖的 0.10% FX 会随换手率重复累积 |

Schwab、IBKR Lite 和 Trading 212 的显性佣金都可为零；但 Schwab 和 IBKR Lite 存在订单流付款安排，而 Trading 212 官方列示的 Invest 收入主要来自 FX 和股票出借。citeturn16search8turn19search8turn20view5

### 高频交易：每月超过五十笔

若只看显性费用，**Schwab US、IBKR Lite 和预先持有 USD 的 Trading 212**依然最便宜。IBKR Pro Tiered 更适合关注直接交易所路由、流动性返佣和执行控制的高频用户，但其每单 $0.35 最低佣金意味着 100 笔小单至少约 $35，尚未加入外部费用。citeturn17view1

Revolut Standard/Plus/Premium/Metal 在免费额度后收 0.25% 或最低 €1，频繁小单会迅速累积费用；Ultra 或 Trading Pro 的 0.12% 较低，但仍然是按成交额计费，并且需要考虑月度计划成本。citeturn21search1

Trade Republic 的 €1 固定费使 100 笔订单至少产生约 €100 明确成本；Robinhood Europe 每轮完整买卖约发生两次 0.10% FX，100% 换手一次约产生名义 0.20% 的 FX 成本，并且持有的是 Token 而非证券。citeturn21search4turn20view14

## 最终结论

| 产品偏好与频率 | 费用最优选择 | 次优选择 | 不适合的情况 |
|---|---|---|---|
| 低频美股，已有 USD | **Schwab US 或 IBKR Lite** | Trading 212 USD 余额 | IBKR Pro Fixed 的 $1 最低佣金对一股订单比例较高 |
| 中高频美股，已有 USD | **Schwab US / IBKR Lite / Trading 212** | IBKR Pro Tiered，适合更看重路由控制者 | Revolut 超额订单和 Trade Republic €1/单累积较快 |
| 直接持有 VOO、VTI、SPY、QQQ | **IBKR US、Schwab US、Trading 212** | 无明显第四选择 | Revolut 只提供 EU ETF；Robinhood 是 Token；Trade Republic 公开目录未确认 |
| 欧元资金买真实美国 ETF | **Trading 212：一次 0.15% 换汇后持有 USD** | IBKR 自动换汇约 0.03%，但 IBKR Pro 还需考虑佣金方案 | Schwab 约 1% 小额换汇明显较贵 |
| 欧元资金买 UCITS ETF | **Revolut 免费额度/投资计划** | Trade Republic，适合大额少笔 | 不应把 UCITS ETF 当成 VOO 本身 |
| 小额价格敞口，不要求证券所有权 | Robinhood Europe Token | — | 不适合要求实际 ETF 所有权、证券转户或投票权者 |
| 每月 >50 笔 | **USD 余额下的 Schwab、IBKR Lite 或 Trading 212** | IBKR Pro Tiered | Robinhood 重复 FX、Revolut 按成交额佣金、Trade Republic €1/单 |

**纯粹按交易费用看，已有美元时 Schwab US 和 IBKR Lite 最便宜；欧元资金且要求真实美国本土 ETF 时，Trading 212 的“零佣金 + 0.15% 一次性换汇 + 美元余额”组合最均衡。** IBKR 自动换汇的 0.03% 比 Trading 212 更低，但若账户是 IBKR Pro，还需要叠加每笔至少 $0.35 或 $1 的股票佣金；IBKR Lite 则可兼得零股票佣金和低自动换汇成本。citeturn17view1turn17view4turn20view0

**Schwab 的强项是美元余额下的零佣金，而不是小额 EUR→USD 换汇。** 若欧元先经 Revolut 工作日换汇或其他低成本路径转为美元，再进入 Schwab，通常会比直接使用约 1% 的小额 Schwab 换汇档位更节省平台侧 FX 成本。citeturn0search10turn20view19

**Robinhood Europe 的 0.10% 不能与传统券商的股票佣金直接横向理解。** 它销售的是 Token 衍生合约，每次买入和卖出都进行 FX，用户不持有 AAPL、VOO 等基础证券，也不具有传统证券转户能力。citeturn20view13turn20view14

**Revolut 和 Trade Republic 的核心优势是欧洲本地化、小额和 UCITS ETF 使用体验，而不是直接持有美国本土 VOO。** Revolut 的免费订单对低频用户有价值，但免费额度用完后的 0.25%/最低 €1 会使高频交易明显变贵；Trade Republic 的 €1 固定费适合合并订单，不适合大量极小额手动交易。citeturn21search1turn20view9