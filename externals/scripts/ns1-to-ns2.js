//NS1 to NS2 Converter
function fixTex999tarea(textarea) {
textarea.value = textarea.value
.replaceAll("args [", "ns.args [")
.replaceAll("args[", "ns.args[")
.replaceAll("activeFragments (", "ns.activeFragments (")
.replaceAll("activeFragments(", "ns.activeFragments(")
.replaceAll("alert (", "ns.alert (")
.replaceAll("alert(", "ns.alert(")
.replaceAll("ascendMember (", "ns.ascendMember (")
.replaceAll("ascendMember(", "ns.ascendMember(")
.replaceAll("ascensionMultiplier (", "ns.ascensionMultiplier (")
.replaceAll("ascensionMultiplier(", "ns.ascensionMultiplier(")
.replaceAll("ascensionPointsGain (", "ns.ascensionPointsGain (")
.replaceAll("ascensionPointsGain(", "ns.ascensionPointsGain(")
.replaceAll("asleep (", "await ns.asleep (")
.replaceAll("asleep(", "await ns.asleep(")
.replaceAll("atExit (", "ns.atExit (")
.replaceAll("atExit(", "ns.atExit(")
.replaceAll("attempt (", "ns.attempt (")
.replaceAll("attempt(", "ns.attempt(")
.replaceAll("brutessh (", "ns.brutessh (")
.replaceAll("brutessh(", "ns.brutessh(")
.replaceAll("buy (", "ns.buy (")
.replaceAll("buy(", "ns.buy(")
.replaceAll("cacheUpgradeCost (", "ns.cacheUpgradeCost (")
.replaceAll("cacheUpgradeCost(", "ns.cacheUpgradeCost(")
.replaceAll("calculateExp (", "ns.calculateExp (")
.replaceAll("calculateExp(", "ns.calculateExp(")
.replaceAll("calculateSkill (", "ns.calculateSkill (")
.replaceAll("calculateSkill(", "ns.calculateSkill(")
.replaceAll("cancelOrder (", "ns.cancelOrder (")
.replaceAll("cancelOrder(", "ns.cancelOrder(")
.replaceAll("canPlace (", "ns.canPlace (")
.replaceAll("canPlace(", "ns.canPlace(")
.replaceAll("canRecruitMember (", "ns.canRecruitMember (")
.replaceAll("canRecruitMember(", "ns.canRecruitMember(")
.replaceAll("charge (", "ns.charge (")
.replaceAll("charge(", "ns.charge(")
.replaceAll("clear (", "ns.clear (")
.replaceAll("clear (", "ns.clear (")
.replaceAll("clear(", "ns.clear(")
.replaceAll("clear(", "ns.clear(")
.replaceAll("clearLog (", "ns.clearLog (")
.replaceAll("clearLog(", "ns.clearLog(")
.replaceAll("clearPort (", "ns.clearPort (")
.replaceAll("clearPort(", "ns.clearPort(")
.replaceAll("constants ()", "ns.constants ()")
.replaceAll("constants ()", "ns.constants ()")
.replaceAll("constants()", "ns.constants()")
.replaceAll("constants()", "ns.constants()")
.replaceAll("coreUpgradeCost (", "ns.coreUpgradeCost (")
.replaceAll("coreUpgradeCost (", "ns.coreUpgradeCost (")
.replaceAll("coreUpgradeCost(", "ns.coreUpgradeCost(")
.replaceAll("coreUpgradeCost(", "ns.coreUpgradeCost(")
.replaceAll("createGang (", "ns.createGang (")
.replaceAll("createGang(", "ns.createGang(")
.replaceAll("deleteServer (", "ns.deleteServer (")
.replaceAll("deleteServer(", "ns.deleteServer(")
.replaceAll("disableLog (", "ns.disableLog (")
.replaceAll("disableLog(", "ns.disableLog(")
.replaceAll("enableLog (", "ns.enableLog (")
.replaceAll("enableLog(", "ns.enableLog(")
.replaceAll("exec (", "ns.exec (")
.replaceAll("exec(", "ns.exec(")
.replaceAll("exit (", "ns.exit (")
.replaceAll("exit(", "ns.exit(")
.replaceAll("expandCity (", "ns.expandCity (")
.replaceAll("expandCity(", "ns.expandCity(")
.replaceAll("expandIndustry (", "ns.expandIndustry (")
.replaceAll("expandIndustry(", "ns.expandIndustry(")
.replaceAll("fileExists (", "ns.fileExists (")
.replaceAll("fileExists(", "ns.fileExists(")
.replaceAll("flags (", "ns.flags (")
.replaceAll("flags(", "ns.flags(")
.replaceAll("fragmentDefinitions (", "ns.fragmentDefinitions (")
.replaceAll("fragmentDefinitions(", "ns.fragmentDefinitions(")
.replaceAll("ftpcrack (", "ns.ftpcrack (")
.replaceAll("ftpcrack(", "ns.ftpcrack(")
.replaceAll("get (", "ns.get (")
.replaceAll("get(", "ns.get(")
.replaceAll("getActionAutolevel (", "ns.getActionAutolevel (")
.replaceAll("getActionAutolevel(", "ns.getActionAutolevel(")
.replaceAll("getActionCountRemaining (", "ns.getActionCountRemaining (")
.replaceAll("getActionCountRemaining(", "ns.getActionCountRemaining(")
.replaceAll("getActionCurrentLevel (", "ns.getActionCurrentLevel (")
.replaceAll("getActionCurrentLevel(", "ns.getActionCurrentLevel(")
.replaceAll("getActionEstimatedSuccessChance (", "ns.getActionEstimatedSuccessChance (")
.replaceAll("getActionEstimatedSuccessChance(", "ns.getActionEstimatedSuccessChance(")
.replaceAll("getActionMaxLevel (", "ns.getActionMaxLevel (")
.replaceAll("getActionMaxLevel(", "ns.getActionMaxLevel(")
.replaceAll("getActionRepGain (", "ns.getActionRepGain (")
.replaceAll("getActionRepGain(", "ns.getActionRepGain(")
.replaceAll("getActionTime (", "ns.getActionTime (")
.replaceAll("getActionTime(", "ns.getActionTime(")
.replaceAll("getAscensionResult (", "ns.getAscensionResult (")
.replaceAll("getAscensionResult(", "ns.getAscensionResult(")
.replaceAll("getAskPrice (", "ns.getAskPrice (")
.replaceAll("getAskPrice(", "ns.getAskPrice(")
.replaceAll("getBidPrice (", "ns.getBidPrice (")
.replaceAll("getBidPrice(", "ns.getBidPrice(")
.replaceAll("getBitNodeMultipliers (", "ns.getBitNodeMultipliers (")
.replaceAll("getBitNodeMultipliers(", "ns.getBitNodeMultipliers(")
.replaceAll("getBlackOpNames (", "ns.getBlackOpNames (")
.replaceAll("getBlackOpNames(", "ns.getBlackOpNames(")
.replaceAll("getBlackOpRank (", "ns.getBlackOpRank (")
.replaceAll("getBlackOpRank(", "ns.getBlackOpRank(")
.replaceAll("getBonusTime (", "ns.getBonusTime (")
.replaceAll("getBonusTime (", "ns.getBonusTime (")
.replaceAll("getBonusTime(", "ns.getBonusTime(")
.replaceAll("getBonusTime(", "ns.getBonusTime(")
.replaceAll("getCacheUpgradeCost (", "ns.getCacheUpgradeCost (")
.replaceAll("getCacheUpgradeCost(", "ns.getCacheUpgradeCost(")
.replaceAll("getChanceToWinClash (", "ns.getChanceToWinClash (")
.replaceAll("getChanceToWinClash(", "ns.getChanceToWinClash(")
.replaceAll("getCity (", "ns.getCity (")
.replaceAll("getCity(", "ns.getCity(")
.replaceAll("getCityChaos (", "ns.getCityChaos (")
.replaceAll("getCityChaos(", "ns.getCityChaos(")
.replaceAll("getCityCommunities (", "ns.getCityCommunities (")
.replaceAll("getCityCommunities(", "ns.getCityCommunities(")
.replaceAll("getCityEstimatedPopulation (", "ns.getCityEstimatedPopulation (")
.replaceAll("getCityEstimatedPopulation(", "ns.getCityEstimatedPopulation(")
.replaceAll("getContractNames (", "ns.getContractNames (")
.replaceAll("getContractNames(", "ns.getContractNames(")
.replaceAll("getContractType (", "ns.getContractType (")
.replaceAll("getContractType(", "ns.getContractType(")
.replaceAll("getCoreUpgradeCost (", "ns.getCoreUpgradeCost (")
.replaceAll("getCoreUpgradeCost(", "ns.getCoreUpgradeCost(")
.replaceAll("getCorporation (", "ns.getCorporation (")
.replaceAll("getCorporation(", "ns.getCorporation(")
.replaceAll("getCurrentAction (", "ns.getCurrentAction (")
.replaceAll("getCurrentAction(", "ns.getCurrentAction(")
.replaceAll("getData (", "ns.getData (")
.replaceAll("getData(", "ns.getData(")
.replaceAll("getDescription (", "ns.getDescription (")
.replaceAll("getDescription(", "ns.getDescription(")
.replaceAll("getDivision (", "ns.getDivision (")
.replaceAll("getDivision(", "ns.getDivision(")
.replaceAll("getEquipmentCost (", "ns.getEquipmentCost (")
.replaceAll("getEquipmentCost(", "ns.getEquipmentCost(")
.replaceAll("getEquipmentNames (", "ns.getEquipmentNames (")
.replaceAll("getEquipmentNames(", "ns.getEquipmentNames(")
.replaceAll("getEquipmentStats (", "ns.getEquipmentStats (")
.replaceAll("getEquipmentStats(", "ns.getEquipmentStats(")
.replaceAll("getEquipmentType (", "ns.getEquipmentType (")
.replaceAll("getEquipmentType(", "ns.getEquipmentType(")
.replaceAll("getFavorToDonate (", "ns.getFavorToDonate (")
.replaceAll("getFavorToDonate(", "ns.getFavorToDonate(")
.replaceAll("getForecast (", "ns.getForecast (")
.replaceAll("getForecast(", "ns.getForecast(")
.replaceAll("getGangInformation (", "ns.getGangInformation (")
.replaceAll("getGangInformation(", "ns.getGangInformation(")
.replaceAll("getGeneralActionNames (", "ns.getGeneralActionNames (")
.replaceAll("getGeneralActionNames(", "ns.getGeneralActionNames(")
.replaceAll("getGrowTime (", "ns.getGrowTime (")
.replaceAll("getGrowTime(", "ns.getGrowTime(")
.replaceAll("getHackingLevel (", "ns.getHackingLevel (")
.replaceAll("getHackingLevel(", "ns.getHackingLevel(")
.replaceAll("getHackingMultipliers (", "ns.getHackingMultipliers (")
.replaceAll("getHackingMultipliers(", "ns.getHackingMultipliers(")
.replaceAll("getHacknetMultipliers (", "ns.getHacknetMultipliers (")
.replaceAll("getHacknetMultipliers(", "ns.getHacknetMultipliers(")
.replaceAll("getHackTime (", "ns.getHackTime (")
.replaceAll("getHackTime(", "ns.getHackTime(")
.replaceAll("getHashUpgradeLevel (", "ns.getHashUpgradeLevel (")
.replaceAll("getHashUpgradeLevel(", "ns.getHashUpgradeLevel(")
.replaceAll("getHashUpgrades (", "ns.getHashUpgrades (")
.replaceAll("getHashUpgrades(", "ns.getHashUpgrades(")
.replaceAll("getHostname (", "ns.getHostname (")
.replaceAll("getHostname(", "ns.getHostname(")
.replaceAll("getInformation (", "ns.getInformation (")
.replaceAll("getInformation(", "ns.getInformation(")
.replaceAll("getLevelUpgradeCost (", "ns.getLevelUpgradeCost (")
.replaceAll("getLevelUpgradeCost(", "ns.getLevelUpgradeCost(")
.replaceAll("getMaxShares (", "ns.getMaxShares (")
.replaceAll("getMaxShares(", "ns.getMaxShares(")
.replaceAll("getMemberInformation (", "ns.getMemberInformation (")
.replaceAll("getMemberInformation(", "ns.getMemberInformation(")
.replaceAll("getMemberNames (", "ns.getMemberNames (")
.replaceAll("getMemberNames(", "ns.getMemberNames(")
.replaceAll("getNodeStats (", "ns.getNodeStats (")
.replaceAll("getNodeStats(", "ns.getNodeStats(")
.replaceAll("getNumSleeves (", "ns.getNumSleeves (")
.replaceAll("getNumSleeves(", "ns.getNumSleeves(")
.replaceAll("getNumTriesRemaining (", "ns.getNumTriesRemaining (")
.replaceAll("getNumTriesRemaining(", "ns.getNumTriesRemaining(")
.replaceAll("getOperationNames (", "ns.getOperationNames (")
.replaceAll("getOperationNames(", "ns.getOperationNames(")
.replaceAll("getOrders (", "ns.getOrders (")
.replaceAll("getOrders(", "ns.getOrders(")
.replaceAll("getOtherGangInformation (", "ns.getOtherGangInformation (")
.replaceAll("getOtherGangInformation(", "ns.getOtherGangInformation(")
.replaceAll("getOwnedSourceFiles (", "ns.getOwnedSourceFiles (")
.replaceAll("getOwnedSourceFiles(", "ns.getOwnedSourceFiles(")
.replaceAll("getPlayer (", "ns.getPlayer (")
.replaceAll("getPlayer(", "ns.getPlayer(")
.replaceAll("getPortHandle (", "ns.getPortHandle (")
.replaceAll("getPortHandle(", "ns.getPortHandle(")
.replaceAll("getPosition (", "ns.getPosition (")
.replaceAll("getPosition(", "ns.getPosition(")
.replaceAll("getPrice (", "ns.getPrice (")
.replaceAll("getPrice(", "ns.getPrice(")
.replaceAll("getPurchaseCost (", "ns.getPurchaseCost (")
.replaceAll("getPurchaseCost(", "ns.getPurchaseCost(")
.replaceAll("getPurchasedServerCost (", "ns.getPurchasedServerCost (")
.replaceAll("getPurchasedServerCost(", "ns.getPurchasedServerCost(")
.replaceAll("getPurchasedServerLimit (", "ns.getPurchasedServerLimit (")
.replaceAll("getPurchasedServerLimit(", "ns.getPurchasedServerLimit(")
.replaceAll("getPurchasedServerMaxRam (", "ns.getPurchasedServerMaxRam (")
.replaceAll("getPurchasedServerMaxRam(", "ns.getPurchasedServerMaxRam(")
.replaceAll("getPurchasedServers (", "ns.getPurchasedServers (")
.replaceAll("getPurchasedServers(", "ns.getPurchasedServers(")
.replaceAll("getPurchaseNodeCost (", "ns.getPurchaseNodeCost (")
.replaceAll("getPurchaseNodeCost(", "ns.getPurchaseNodeCost(")
.replaceAll("getRamUpgradeCost (", "ns.getRamUpgradeCost (")
.replaceAll("getRamUpgradeCost(", "ns.getRamUpgradeCost(")
.replaceAll("getRank (", "ns.getRank (")
.replaceAll("getRank(", "ns.getRank(")
.replaceAll("getRunningScript (", "ns.getRunningScript (")
.replaceAll("getRunningScript(", "ns.getRunningScript(")
.replaceAll("getSaleGain (", "ns.getSaleGain (")
.replaceAll("getSaleGain(", "ns.getSaleGain(")
.replaceAll("getScriptExpGain (", "ns.getScriptExpGain (")
.replaceAll("getScriptExpGain(", "ns.getScriptExpGain(")
.replaceAll("getScriptIncome (", "ns.getScriptIncome (")
.replaceAll("getScriptIncome(", "ns.getScriptIncome(")
.replaceAll("getScriptLogs (", "ns.getScriptLogs (")
.replaceAll("getScriptLogs(", "ns.getScriptLogs(")
.replaceAll("getScriptName (", "ns.getScriptName (")
.replaceAll("getScriptName(", "ns.getScriptName(")
.replaceAll("getScriptRam (", "ns.getScriptRam (")
.replaceAll("getScriptRam(", "ns.getScriptRam(")
.replaceAll("getServer (", "ns.getServer (")
.replaceAll("getServer(", "ns.getServer(")
.replaceAll("getServerBaseSecurityLevel (", "ns.getServerBaseSecurityLevel (")
.replaceAll("getServerBaseSecurityLevel(", "ns.getServerBaseSecurityLevel(")
.replaceAll("getServerGrowth (", "ns.getServerGrowth (")
.replaceAll("getServerGrowth(", "ns.getServerGrowth(")
.replaceAll("getServerMaxMoney (", "ns.getServerMaxMoney (")
.replaceAll("getServerMaxMoney(", "ns.getServerMaxMoney(")
.replaceAll("getServerMaxRam (", "ns.getServerMaxRam (")
.replaceAll("getServerMaxRam(", "ns.getServerMaxRam(")
.replaceAll("getServerMinSecurityLevel (", "ns.getServerMinSecurityLevel (")
.replaceAll("getServerMinSecurityLevel(", "ns.getServerMinSecurityLevel(")
.replaceAll("getServerMoneyAvailable (", "ns.getServerMoneyAvailable (")
.replaceAll("getServerMoneyAvailable(", "ns.getServerMoneyAvailable(")
.replaceAll("getServerNumPortsRequired (", "ns.getServerNumPortsRequired (")
.replaceAll("getServerNumPortsRequired(", "ns.getServerNumPortsRequired(")
.replaceAll("getServerRam (", "ns.getServerRam (")
.replaceAll("getServerRam(", "ns.getServerRam(")
.replaceAll("getServerRequiredHackingLevel (", "ns.getServerRequiredHackingLevel (")
.replaceAll("getServerRequiredHackingLevel(", "ns.getServerRequiredHackingLevel(")
.replaceAll("getServerSecurityLevel (", "ns.getServerSecurityLevel (")
.replaceAll("getServerSecurityLevel(", "ns.getServerSecurityLevel(")
.replaceAll("getServerUsedRam (", "ns.getServerUsedRam (")
.replaceAll("getServerUsedRam(", "ns.getServerUsedRam(")
.replaceAll("getSkillLevel (", "ns.getSkillLevel (")
.replaceAll("getSkillLevel(", "ns.getSkillLevel(")
.replaceAll("getSkillNames (", "ns.getSkillNames (")
.replaceAll("getSkillNames(", "ns.getSkillNames(")
.replaceAll("getSkillPoints (", "ns.getSkillPoints (")
.replaceAll("getSkillPoints(", "ns.getSkillPoints(")
.replaceAll("getSkillUpgradeCost (", "ns.getSkillUpgradeCost (")
.replaceAll("getSkillUpgradeCost(", "ns.getSkillUpgradeCost(")
.replaceAll("getSleeveAugmentations (", "ns.getSleeveAugmentations (")
.replaceAll("getSleeveAugmentations(", "ns.getSleeveAugmentations(")
.replaceAll("getSleevePurchasableAugs (", "ns.getSleevePurchasableAugs (")
.replaceAll("getSleevePurchasableAugs(", "ns.getSleevePurchasableAugs(")
.replaceAll("getSleeveStats (", "ns.getSleeveStats (")
.replaceAll("getSleeveStats(", "ns.getSleeveStats(")
.replaceAll("getStamina (", "ns.getStamina (")
.replaceAll("getStamina(", "ns.getStamina(")
.replaceAll("getStudyMult (", "ns.getStudyMult (")
.replaceAll("getStudyMult(", "ns.getStudyMult(")
.replaceAll("getSymbols (", "ns.getSymbols (")
.replaceAll("getSymbols(", "ns.getSymbols(")
.replaceAll("getTask (", "ns.getTask (")
.replaceAll("getTask(", "ns.getTask(")
.replaceAll("getTaskNames (", "ns.getTaskNames (")
.replaceAll("getTaskNames(", "ns.getTaskNames(")
.replaceAll("getTaskStats (", "ns.getTaskStats (")
.replaceAll("getTaskStats(", "ns.getTaskStats(")
.replaceAll("getTeamSize (", "ns.getTeamSize (")
.replaceAll("getTeamSize(", "ns.getTeamSize(")
.replaceAll("getTheme (", "ns.getTheme (")
.replaceAll("getTheme(", "ns.getTheme(")
.replaceAll("getTimeSinceLastAug (", "ns.getTimeSinceLastAug (")
.replaceAll("getTimeSinceLastAug(", "ns.getTimeSinceLastAug(")
.replaceAll("getTrainingMult (", "ns.getTrainingMult (")
.replaceAll("getTrainingMult(", "ns.getTrainingMult(")
.replaceAll("getVolatility (", "ns.getVolatility (")
.replaceAll("getVolatility(", "ns.getVolatility(")
.replaceAll("getWeakenTime (", "ns.getWeakenTime (")
.replaceAll("getWeakenTime(", "ns.getWeakenTime(")
.replaceAll("grow (", "await ns.grow (")
.replaceAll("grow(", "await ns.grow(")
.replaceAll("growPercent (", "ns.growPercent (")
.replaceAll("growPercent(", "ns.growPercent(")
.replaceAll("growthAnalyze (", "ns.growthAnalyze (")
.replaceAll("growthAnalyze(", "ns.growthAnalyze(")
.replaceAll("growthAnalyzeSecurity (", "ns.growthAnalyzeSecurity (")
.replaceAll("growthAnalyzeSecurity(", "ns.growthAnalyzeSecurity(")
.replaceAll("growTime (", "ns.growTime (")
.replaceAll("growTime(", "ns.growTime(")
.replaceAll("hack (", "await ns.hack (")
.replaceAll("hack(", "await ns.hack(")
.replaceAll("hackAnalyze (", "ns.hackAnalyze (")
.replaceAll("hackAnalyze(", "ns.hackAnalyze(")
.replaceAll("hackAnalyzeChance (", "ns.hackAnalyzeChance (")
.replaceAll("hackAnalyzeChance(", "ns.hackAnalyzeChance(")
.replaceAll("hackAnalyzeSecurity (", "ns.hackAnalyzeSecurity (")
.replaceAll("hackAnalyzeSecurity(", "ns.hackAnalyzeSecurity(")
.replaceAll("hackAnalyzeThreads (", "ns.hackAnalyzeThreads (")
.replaceAll("hackAnalyzeThreads(", "ns.hackAnalyzeThreads(")
.replaceAll("hackChance (", "ns.hackChance (")
.replaceAll("hackChance(", "ns.hackChance(")
.replaceAll("hackExp (", "ns.hackExp (")
.replaceAll("hackExp(", "ns.hackExp(")
.replaceAll("hacknetNodeCost (", "ns.hacknetNodeCost (")
.replaceAll("hacknetNodeCost(", "ns.hacknetNodeCost(")
.replaceAll("hacknetServerCost (", "ns.hacknetServerCost (")
.replaceAll("hacknetServerCost(", "ns.hacknetServerCost(")
.replaceAll("hackPercent (", "ns.hackPercent (")
.replaceAll("hackPercent(", "ns.hackPercent(")
.replaceAll("hackTime (", "ns.hackTime (")
.replaceAll("hackTime(", "ns.hackTime(")
.replaceAll("hashCapacity (", "ns.hashCapacity (")
.replaceAll("hashCapacity(", "ns.hashCapacity(")
.replaceAll("hashCost (", "ns.hashCost (")
.replaceAll("hashCost(", "ns.hashCost(")
.replaceAll("hashGainRate (", "ns.hashGainRate (")
.replaceAll("hashGainRate(", "ns.hashGainRate(")
.replaceAll("hashUpgradeCost (", "ns.hashUpgradeCost (")
.replaceAll("hashUpgradeCost(", "ns.hashUpgradeCost(")
.replaceAll("hasRootAccess (", "ns.hasRootAccess (")
.replaceAll("hasRootAccess(", "ns.hasRootAccess(")
.replaceAll("height (", "ns.height (")
.replaceAll("height(", "ns.height(")
.replaceAll("httpworm (", "ns.httpworm (")
.replaceAll("httpworm(", "ns.httpworm(")
.replaceAll("inGang (", "ns.inGang (")
.replaceAll("inGang(", "ns.inGang(")
.replaceAll("isLogEnabled (", "ns.isLogEnabled (")
.replaceAll("isLogEnabled(", "ns.isLogEnabled(")
.replaceAll("isRunning (", "ns.isRunning (")
.replaceAll("isRunning(", "ns.isRunning(")
.replaceAll("issueDividends (", "ns.issueDividends (")
.replaceAll("issueDividends(", "ns.issueDividends(")
.replaceAll("joinBladeburnerDivision (", "ns.joinBladeburnerDivision (")
.replaceAll("joinBladeburnerDivision(", "ns.joinBladeburnerDivision(")
.replaceAll("joinBladeburnerFaction (", "ns.joinBladeburnerFaction (")
.replaceAll("joinBladeburnerFaction(", "ns.joinBladeburnerFaction(")
.replaceAll("kill (", "ns.kill (")
.replaceAll("kill(", "ns.kill(")
.replaceAll("killall (", "ns.killall (")
.replaceAll("killall(", "ns.killall(")
.replaceAll("levelUpgrade (", "ns.levelUpgrade (")
.replaceAll("levelUpgrade(", "ns.levelUpgrade(")
.replaceAll("levelUpgradeCost (", "ns.levelUpgradeCost (")
.replaceAll("levelUpgradeCost (", "ns.levelUpgradeCost (")
.replaceAll("levelUpgradeCost(", "ns.levelUpgradeCost(")
.replaceAll("levelUpgradeCost(", "ns.levelUpgradeCost(")
.replaceAll("ls (", "ns.ls (")
.replaceAll("ls(", "ns.ls(")
.replaceAll("maxNumNodes (", "ns.maxNumNodes (")
.replaceAll("maxNumNodes(", "ns.maxNumNodes(")
.replaceAll("moneyGain (", "ns.moneyGain (")
.replaceAll("moneyGain(", "ns.moneyGain(")
.replaceAll("moneyGainRate (", "ns.moneyGainRate (")
.replaceAll("moneyGainRate(", "ns.moneyGainRate(")
.replaceAll("nFormat (", "ns.nFormat (")
.replaceAll("nFormat(", "ns.nFormat(")
.replaceAll("nuke (", "ns.nuke (")
.replaceAll("nuke(", "ns.nuke(")
.replaceAll("numHashes (", "ns.numHashes (")
.replaceAll("numHashes(", "ns.numHashes(")
.replaceAll("numNodes (", "ns.numNodes (")
.replaceAll("numNodes(", "ns.numNodes(")
.replaceAll("peek (", "ns.peek (")
.replaceAll("peek(", "ns.peek(")
.replaceAll("place (", "ns.place (")
.replaceAll("place(", "ns.place(")
.replaceAll("placeOrder (", "ns.placeOrder (")
.replaceAll("placeOrder(", "ns.placeOrder(")
.replaceAll("print (", "ns.print (")
.replaceAll("print(", "ns.print(")
.replaceAll("prompt (", "await ns.prompt (")
.replaceAll("prompt(", "await ns.prompt(")
.replaceAll("ps (", "ns.ps (")
.replaceAll("ps(", "ns.ps(")
.replaceAll("purchase4SMarketData (", "ns.purchase4SMarketData (")
.replaceAll("purchase4SMarketData(", "ns.purchase4SMarketData(")
.replaceAll("purchase4SMarketDataTixApi (", "ns.purchase4SMarketDataTixApi (")
.replaceAll("purchase4SMarketDataTixApi(", "ns.purchase4SMarketDataTixApi(")
.replaceAll("purchaseEquipment (", "ns.purchaseEquipment (")
.replaceAll("purchaseEquipment(", "ns.purchaseEquipment(")
.replaceAll("purchaseNode (", "ns.purchaseNode (")
.replaceAll("purchaseNode(", "ns.purchaseNode(")
.replaceAll("purchaseServer (", "ns.purchaseServer (")
.replaceAll("purchaseServer(", "ns.purchaseServer(")
.replaceAll("purchaseSleeveAug (", "ns.purchaseSleeveAug (")
.replaceAll("purchaseSleeveAug(", "ns.purchaseSleeveAug(")
.replaceAll("ramUpgradeCost (", "ns.ramUpgradeCost (")
.replaceAll("ramUpgradeCost (", "ns.ramUpgradeCost (")
.replaceAll("ramUpgradeCost(", "ns.ramUpgradeCost(")
.replaceAll("ramUpgradeCost(", "ns.ramUpgradeCost(")
.replaceAll("read (", "ns.read (")
.replaceAll("read(", "ns.read(")
.replaceAll("readPort (", "ns.readPort (")
.replaceAll("readPort(", "ns.readPort(")
.replaceAll("recruitMember (", "ns.recruitMember (")
.replaceAll("recruitMember(", "ns.recruitMember(")
.replaceAll("relaysmtp (", "ns.relaysmtp (")
.replaceAll("relaysmtp(", "ns.relaysmtp(")
.replaceAll("remove (", "ns.remove (")
.replaceAll("remove(", "ns.remove(")
.replaceAll("respectGain (", "ns.respectGain (")
.replaceAll("respectGain(", "ns.respectGain(")
.replaceAll("rm (", "ns.rm (")
.replaceAll("rm(", "ns.rm(")
.replaceAll("run (", "ns.run (")
.replaceAll("run(", "ns.run(")
.replaceAll("scan (", "ns.scan (")
.replaceAll("scan(", "ns.scan(")
.replaceAll("scp (", "await ns.scp (")
.replaceAll("scp(", "await ns.scp(")
.replaceAll("scriptKill (", "ns.scriptKill (")
.replaceAll("scriptKill(", "ns.scriptKill(")
.replaceAll("scriptRunning (", "ns.scriptRunning (")
.replaceAll("scriptRunning(", "ns.scriptRunning(")
.replaceAll("sell (", "ns.sell (")
.replaceAll("sell(", "ns.sell(")
.replaceAll("sellShort (", "ns.sellShort (")
.replaceAll("sellShort(", "ns.sellShort(")
.replaceAll("serverExists (", "ns.serverExists (")
.replaceAll("serverExists(", "ns.serverExists(")
.replaceAll("setActionAutolevel (", "ns.setActionAutolevel (")
.replaceAll("setActionAutolevel(", "ns.setActionAutolevel(")
.replaceAll("setActionLevel (", "ns.setActionLevel (")
.replaceAll("setActionLevel(", "ns.setActionLevel(")
.replaceAll("setMemberTask (", "ns.setMemberTask (")
.replaceAll("setMemberTask(", "ns.setMemberTask(")
.replaceAll("setTeamSize (", "ns.setTeamSize (")
.replaceAll("setTeamSize(", "ns.setTeamSize(")
.replaceAll("setTerritoryWarfare (", "ns.setTerritoryWarfare (")
.replaceAll("setTerritoryWarfare(", "ns.setTerritoryWarfare(")
.replaceAll("setToCommitCrime (", "ns.setToCommitCrime (")
.replaceAll("setToCommitCrime(", "ns.setToCommitCrime(")
.replaceAll("setToCompanyWork (", "ns.setToCompanyWork (")
.replaceAll("setToCompanyWork(", "ns.setToCompanyWork(")
.replaceAll("setToFactionWork (", "ns.setToFactionWork (")
.replaceAll("setToFactionWork(", "ns.setToFactionWork(")
.replaceAll("setToGymWorkout (", "ns.setToGymWorkout (")
.replaceAll("setToGymWorkout(", "ns.setToGymWorkout(")
.replaceAll("setToShockRecovery (", "ns.setToShockRecovery (")
.replaceAll("setToShockRecovery(", "ns.setToShockRecovery(")
.replaceAll("setToSynchronize (", "ns.setToSynchronize (")
.replaceAll("setToSynchronize(", "ns.setToSynchronize(")
.replaceAll("setToUniversityCourse (", "ns.setToUniversityCourse (")
.replaceAll("setToUniversityCourse(", "ns.setToUniversityCourse(")
.replaceAll("short (", "ns.short (")
.replaceAll("short(", "ns.short(")
.replaceAll("sleep (", "ns.sleep (")
.replaceAll("sleep(", "ns.sleep(")
.replaceAll("spawn (", "ns.spawn (")
.replaceAll("spawn(", "ns.spawn(")
.replaceAll("spendHashes (", "ns.spendHashes (")
.replaceAll("spendHashes(", "ns.spendHashes(")
.replaceAll("sprintf (", "ns.sprintf (")
.replaceAll("sprintf(", "ns.sprintf(")
.replaceAll("sqlinject (", "ns.sqlinject (")
.replaceAll("sqlinject(", "ns.sqlinject(")
.replaceAll("startAction (", "ns.startAction (")
.replaceAll("startAction(", "ns.startAction(")
.replaceAll("stopBladeburnerAction (", "ns.stopBladeburnerAction (")
.replaceAll("stopBladeburnerAction(", "ns.stopBladeburnerAction(")
.replaceAll("switchCity (", "ns.switchCity (")
.replaceAll("switchCity(", "ns.switchCity(")
.replaceAll("tail (", "ns.tail (")
.replaceAll("tail(", "ns.tail(")
.replaceAll("tFormat (", "ns.tFormat (")
.replaceAll("tFormat(", "ns.tFormat(")
.replaceAll("toast (", "ns.toast (")
.replaceAll("toast(", "ns.toast(")
.replaceAll("tprint (", "ns.tprint (")
.replaceAll("tprint(", "ns.tprint(")
.replaceAll("tprintf (", "ns.tprintf (")
.replaceAll("tprintf(", "ns.tprintf(")
.replaceAll("travel (", "ns.travel (")
.replaceAll("travel(", "ns.travel(")
.replaceAll("tryWritePort (", "ns.tryWritePort (")
.replaceAll("tryWritePort(", "ns.tryWritePort(")
.replaceAll("unlockUpgrade (", "ns.unlockUpgrade (")
.replaceAll("unlockUpgrade(", "ns.unlockUpgrade(")
.replaceAll("upgradeCache (", "ns.upgradeCache (")
.replaceAll("upgradeCache(", "ns.upgradeCache(")
.replaceAll("upgradeCore (", "ns.upgradeCore (")
.replaceAll("upgradeCore(", "ns.upgradeCore(")
.replaceAll("upgradeLevel (", "ns.upgradeLevel (")
.replaceAll("upgradeLevel(", "ns.upgradeLevel(")
.replaceAll("upgradeRam (", "ns.upgradeRam (")
.replaceAll("upgradeRam(", "ns.upgradeRam(")
.replaceAll("upgradeSkill (", "ns.upgradeSkill (")
.replaceAll("upgradeSkill(", "ns.upgradeSkill(")
.replaceAll("vsprintf (", "ns.vsprintf (")
.replaceAll("vsprintf(", "ns.vsprintf(")
.replaceAll("wantedLevelGain (", "ns.wantedLevelGain (")
.replaceAll("wantedLevelGain(", "ns.wantedLevelGain(")
.replaceAll("wantedPenalty (", "ns.wantedPenalty (")
.replaceAll("wantedPenalty(", "ns.wantedPenalty(")
.replaceAll("weaken (", "await ns.weaken (")
.replaceAll("weaken(", "await ns.weaken(")
.replaceAll("weakenAnalyze (", "ns.weakenAnalyze (")
.replaceAll("weakenAnalyze(", "ns.weakenAnalyze(")
.replaceAll("weakenTime (", "ns.weakenTime (")
.replaceAll("weakenTime(", "ns.weakenTime(")
.replaceAll("wget (", "await ns.wget (")
.replaceAll("wget(", "await ns.wget(")
.replaceAll("width (", "ns.width (")
.replaceAll("width(", "ns.width(")
.replaceAll("write (", "await ns.write (")
.replaceAll("write(", "await ns.write(")
.replaceAll("writePort (", "await ns.writePort (")
.replaceAll("writePort(", "await ns.writePort(")

if (!textarea.value.includes("@param")) {
    textarea.value  = '/** @param {NS} ns **/\nexport async function main(ns) {\n' + textarea.value  + '\n}'
}

};

function fixtext999() {
let textarea = document.getElementById("textarea3");
textarea.select();
fixTex999tarea(textarea);
}