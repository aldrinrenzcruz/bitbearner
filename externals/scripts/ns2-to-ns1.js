//NS2 to NS1 Converter
function fixTex998tarea(textarea) {
    textarea.value = textarea.value
        .replaceAll("ns.args [", "args [")
        .replaceAll("ns.args[", "args[")
        .replaceAll("ns.alert (", "alert(")
        .replaceAll("ns.alert(", "alert(")
        .replaceAll("ns.asleep (", "asleep(")
        .replaceAll("ns.asleep(", "asleep(")
        .replaceAll("await ns.sleep (", "sleep(")
        .replaceAll("await ns.sleep(", "sleep(")
        .replaceAll("ns.atExit (", "atExit(")
        .replaceAll("ns.atExit(", "atExit(")
        .replaceAll("ns.brutessh (", "brutessh(")
        .replaceAll("ns.brutessh(", "brutessh(")
        .replaceAll("ns.cacheUpgradeCost (", "cacheUpgradeCost(")
        .replaceAll("ns.cacheUpgradeCost(", "cacheUpgradeCost(")
        .replaceAll("ns.calculateExp (", "calculateExp(")
        .replaceAll("ns.calculateExp(", "calculateExp(")
        .replaceAll("ns.calculateSkill (", "calculateSkill(")
        .replaceAll("ns.calculateSkill(", "calculateSkill(")
        .replaceAll("ns.clear (", "clear(")
        .replaceAll("ns.clear(", "clear(")
        .replaceAll("ns.clearLog (", "clearLog(")
        .replaceAll("ns.clearLog(", "clearLog(")
        .replaceAll("ns.clearPort (", "clearPort(")
        .replaceAll("ns.clearPort(", "clearPort(")
        .replaceAll("ns.deleteServer (", "deleteServer(")
        .replaceAll("ns.deleteServer(", "deleteServer(")
        .replaceAll("ns.disableLog (", "disableLog(")
        .replaceAll("ns.disableLog(", "disableLog(")
        .replaceAll("ns.enableLog (", "enableLog(")
        .replaceAll("ns.enableLog(", "enableLog(")
        .replaceAll("ns.exec (", "exec(")
        .replaceAll("ns.exec(", "exec(")
        .replaceAll("ns.exit (", "exit(")
        .replaceAll("ns.exit(", "exit(")
        .replaceAll("ns.fileExists (", "fileExists(")
        .replaceAll("ns.fileExists(", "fileExists(")
        .replaceAll("ns.flags (", "flags(")
        .replaceAll("ns.flags(", "flags(")
        .replaceAll("ns.ftpcrack (", "ftpcrack(")
        .replaceAll("ns.ftpcrack(", "ftpcrack(")
        .replaceAll("ns.getBitNodeMultipliers (", "getBitNodeMultipliers(")
        .replaceAll("ns.getBitNodeMultipliers(", "getBitNodeMultipliers(")
        .replaceAll("ns.getFavorToDonate (", "getFavorToDonate(")
        .replaceAll("ns.getFavorToDonate(", "getFavorToDonate(")
        .replaceAll("ns.getGrowTime (", "getGrowTime(")
        .replaceAll("ns.getGrowTime(", "getGrowTime(")
        .replaceAll("ns.getHackingLevel (", "getHackingLevel(")
        .replaceAll("ns.getHackingLevel(", "getHackingLevel(")
        .replaceAll("ns.getHackingMultipliers (", "getHackingMultipliers(")
        .replaceAll("ns.getHackingMultipliers(", "getHackingMultipliers(")
        .replaceAll("ns.getHacknetMultipliers (", "getHacknetMultipliers(")
        .replaceAll("ns.getHacknetMultipliers(", "getHacknetMultipliers(")
        .replaceAll("ns.getHostname (", "getHostname(")
        .replaceAll("ns.getHostname(", "getHostname(")
        .replaceAll("ns.getOwnedSourceFiles (", "getOwnedSourceFiles(")
        .replaceAll("ns.getOwnedSourceFiles(", "getOwnedSourceFiles(")
        .replaceAll("ns.getPlayer (", "getPlayer(")
        .replaceAll("ns.getPlayer(", "getPlayer(")
        .replaceAll("ns.getPortHandle (", "getPortHandle(")
        .replaceAll("ns.getPortHandle(", "getPortHandle(")
        .replaceAll("ns.getPurchasedServerCost (", "getPurchasedServerCost(")
        .replaceAll("ns.getPurchasedServerCost(", "getPurchasedServerCost(")
        .replaceAll("ns.getPurchasedServerLimit (", "getPurchasedServerLimit(")
        .replaceAll("ns.getPurchasedServerLimit(", "getPurchasedServerLimit(")
        .replaceAll("ns.getPurchasedServerMaxRam (", "getPurchasedServerMaxRam(")
        .replaceAll("ns.getPurchasedServerMaxRam(", "getPurchasedServerMaxRam(")
        .replaceAll("ns.getPurchasedServers (", "getPurchasedServers(")
        .replaceAll("ns.getPurchasedServers(", "getPurchasedServers(")
        .replaceAll("ns.getRunningScript (", "getRunningScript(")
        .replaceAll("ns.getRunningScript(", "getRunningScript(")
        .replaceAll("ns.getScriptExpGain (", "getScriptExpGain(")
        .replaceAll("ns.getScriptExpGain(", "getScriptExpGain(")
        .replaceAll("ns.getScriptIncome (", "getScriptIncome(")
        .replaceAll("ns.getScriptIncome(", "getScriptIncome(")
        .replaceAll("ns.getScriptLogs (", "getScriptLogs(")
        .replaceAll("ns.getScriptLogs(", "getScriptLogs(")
        .replaceAll("ns.getScriptName (", "getScriptName(")
        .replaceAll("ns.getScriptName(", "getScriptName(")
        .replaceAll("ns.getScriptRam (", "getScriptRam(")
        .replaceAll("ns.getScriptRam(", "getScriptRam(")
        .replaceAll("ns.getServer (", "getServer(")
        .replaceAll("ns.getServer(", "getServer(")
        .replaceAll("ns.getServerBaseSecurityLevel (", "getServerBaseSecurityLevel(")
        .replaceAll("ns.getServerBaseSecurityLevel(", "getServerBaseSecurityLevel(")
        .replaceAll("ns.getServerGrowth (", "getServerGrowth(")
        .replaceAll("ns.getServerGrowth(", "getServerGrowth(")
        .replaceAll("ns.getServerMaxMoney (", "getServerMaxMoney(")
        .replaceAll("ns.getServerMaxMoney(", "getServerMaxMoney(")
        .replaceAll("ns.getServerMaxRam (", "getServerMaxRam(")
        .replaceAll("ns.getServerMaxRam(", "getServerMaxRam(")
        .replaceAll("ns.getServerMinSecurityLevel (", "getServerMinSecurityLevel(")
        .replaceAll("ns.getServerMinSecurityLevel(", "getServerMinSecurityLevel(")
        .replaceAll("ns.getServerMoneyAvailable (", "getServerMoneyAvailable(")
        .replaceAll("ns.getServerMoneyAvailable(", "getServerMoneyAvailable(")
        .replaceAll("ns.getServerNumPortsRequired (", "getServerNumPortsRequired(")
        .replaceAll("ns.getServerNumPortsRequired(", "getServerNumPortsRequired(")
        .replaceAll("ns.getServerRam (", "getServerRam(")
        .replaceAll("ns.getServerRam(", "getServerRam(")
        .replaceAll("ns.getServerRequiredHackingLevel (", "getServerRequiredHackingLevel(")
        .replaceAll("ns.getServerRequiredHackingLevel(", "getServerRequiredHackingLevel(")
        .replaceAll("ns.getServerSecurityLevel (", "getServerSecurityLevel(")
        .replaceAll("ns.getServerSecurityLevel(", "getServerSecurityLevel(")
        .replaceAll("ns.getServerUsedRam (", "getServerUsedRam(")
        .replaceAll("ns.getServerUsedRam(", "getServerUsedRam(")
        .replaceAll("ns.getTimeSinceLastAug (", "getTimeSinceLastAug(")
        .replaceAll("ns.getTimeSinceLastAug(", "getTimeSinceLastAug(")
        .replaceAll("ns.getWeakenTime (", "getWeakenTime(")
        .replaceAll("ns.getWeakenTime(", "getWeakenTime(")
        .replaceAll("await ns.grow (", "grow(")
        .replaceAll("await ns.grow(", "grow(")
        .replaceAll("ns.growthAnalyze (", "growthAnalyze(")
        .replaceAll("ns.growthAnalyze(", "growthAnalyze(")
        .replaceAll("ns.growthAnalyzeSecurity (", "growthAnalyzeSecurity(")
        .replaceAll("ns.growthAnalyzeSecurity(", "growthAnalyzeSecurity(")
        .replaceAll("ns.growTime (", "growTime(")
        .replaceAll("ns.growTime(", "growTime(")
        .replaceAll("await ns.hack (", "hack(")
        .replaceAll("await ns.hack(", "hack(")
        .replaceAll("ns.hackAnalyze (", "hackAnalyze(")
        .replaceAll("ns.hackAnalyze(", "hackAnalyze(")
        .replaceAll("ns.hackAnalyzeChance (", "hackAnalyzeChance(")
        .replaceAll("ns.hackAnalyzeChance(", "hackAnalyzeChance(")
        .replaceAll("ns.hackAnalyzeSecurity (", "hackAnalyzeSecurity(")
        .replaceAll("ns.hackAnalyzeSecurity(", "hackAnalyzeSecurity(")
        .replaceAll("ns.hackAnalyzeThreads (", "hackAnalyzeThreads(")
        .replaceAll("ns.hackAnalyzeThreads(", "hackAnalyzeThreads(")
        .replaceAll("ns.hacknetServerCost (", "hacknetServerCost(")
        .replaceAll("ns.hacknetServerCost(", "hacknetServerCost(")
        .replaceAll("ns.hashGainRate (", "hashGainRate(")
        .replaceAll("ns.hashGainRate(", "hashGainRate(")
        .replaceAll("ns.hashUpgradeCost (", "hashUpgradeCost(")
        .replaceAll("ns.hashUpgradeCost(", "hashUpgradeCost(")
        .replaceAll("ns.hasRootAccess (", "hasRootAccess(")
        .replaceAll("ns.hasRootAccess(", "hasRootAccess(")
        .replaceAll("ns.httpworm (", "httpworm(")
        .replaceAll("ns.httpworm(", "httpworm(")
        .replaceAll("ns.isLogEnabled (", "isLogEnabled(")
        .replaceAll("ns.isLogEnabled(", "isLogEnabled(")
        .replaceAll("ns.isRunning (", "isRunning(")
        .replaceAll("ns.isRunning(", "isRunning(")
        .replaceAll("ns.kill (", "kill(")
        .replaceAll("ns.kill(", "kill(")
        .replaceAll("ns.killall (", "killall(")
        .replaceAll("ns.killall(", "killall(")
        .replaceAll("ns.ls (", "ls(")
        .replaceAll("ns.ls(", "ls(")
        .replaceAll("ns.nFormat (", "nFormat(")
        .replaceAll("ns.nFormat(", "nFormat(")
        .replaceAll("ns.nuke (", "nuke(")
        .replaceAll("ns.nuke(", "nuke(")
        .replaceAll("ns.peek (", "peek(")
        .replaceAll("ns.peek(", "peek(")
        .replaceAll("ns.print (", "print(")
        .replaceAll("ns.print(", "print(")
        .replaceAll("await ns.prompt (", "prompt(")
        .replaceAll("await ns.prompt(", "prompt(")
        .replaceAll("ns.ps (", "ps(")
        .replaceAll("ns.ps(", "ps(")
        .replaceAll("ns.purchaseServer (", "purchaseServer(")
        .replaceAll("ns.purchaseServer(", "purchaseServer(")
        .replaceAll("ns.read (", "read(")
        .replaceAll("ns.read(", "read(")
        .replaceAll("ns.readPort (", "readPort(")
        .replaceAll("ns.readPort(", "readPort(")
        .replaceAll("ns.relaysmtp (", "relaysmtp(")
        .replaceAll("ns.relaysmtp(", "relaysmtp(")
        .replaceAll("ns.rm (", "rm(")
        .replaceAll("ns.rm(", "rm(")
        .replaceAll("ns.run (", "run(")
        .replaceAll("ns.run(", "run(")
        .replaceAll("ns.scan (", "scan(")
        .replaceAll("ns.scan(", "scan(")
        .replaceAll("await ns.scp (", "scp(")
        .replaceAll("await ns.scp(", "scp(")
        .replaceAll("ns.scriptKill (", "scriptKill(")
        .replaceAll("ns.scriptKill(", "scriptKill(")
        .replaceAll("ns.scriptRunning (", "scriptRunning(")
        .replaceAll("ns.scriptRunning(", "scriptRunning(")
        .replaceAll("ns.serverExists (", "serverExists(")
        .replaceAll("ns.serverExists(", "serverExists(")
        .replaceAll("ns.sleep (", "sleep(")
        .replaceAll("ns.sleep(", "sleep(")
        .replaceAll("ns.spawn (", "spawn(")
        .replaceAll("ns.spawn(", "spawn(")
        .replaceAll("ns.sprintf (", "sprintf(")
        .replaceAll("ns.sprintf(", "sprintf(")
        .replaceAll("ns.sqlinject (", "sqlinject(")
        .replaceAll("ns.sqlinject(", "sqlinject(")
        .replaceAll("ns.tail (", "tail(")
        .replaceAll("ns.tail(", "tail(")
        .replaceAll("ns.tFormat (", "tFormat(")
        .replaceAll("ns.tFormat(", "tFormat(")
        .replaceAll("ns.toast (", "toast(")
        .replaceAll("ns.toast(", "toast(")
        .replaceAll("ns.tprint (", "tprint(")
        .replaceAll("ns.tprint(", "tprint(")
        .replaceAll("ns.tprintf (", "tprintf(")
        .replaceAll("ns.tprintf(", "tprintf(")
        .replaceAll("ns.tryWritePort (", "tryWritePort(")
        .replaceAll("ns.tryWritePort(", "tryWritePort(")
        .replaceAll("ns.unlockUpgrade (", "unlockUpgrade(")
        .replaceAll("ns.unlockUpgrade(", "unlockUpgrade(")
        .replaceAll("ns.vsprintf (", "vsprintf(")
        .replaceAll("ns.vsprintf(", "vsprintf(")
        .replaceAll("await ns.weaken (", "weaken(")
        .replaceAll("await ns.weaken(", "weaken(")
        .replaceAll("ns.weakenAnalyze (", "weakenAnalyze(")
        .replaceAll("ns.weakenAnalyze(", "weakenAnalyze(")
        .replaceAll("await ns.wget (", "wget(")
        .replaceAll("await ns.wget(", "wget(")
        .replaceAll("await ns.write (", "write(")
        .replaceAll("await ns.write(", "write(")
        .replaceAll("await ns.writePort (", "writePort(")
        .replaceAll("await ns.writePort(", "writePort(")
        .replaceAll("ns.hack (", "hack(")
        .replaceAll("ns.hack(", "hack(")
        .replaceAll("ns.grow (", "grow(")
        .replaceAll("ns.grow(", "grow(")
        .replaceAll("ns.weaken (", "weaken(")
        .replaceAll("ns.weaken(", "weaken(")
        .replaceAll("ns.sleep (", "sleep(")
        .replaceAll("ns.sleep(", "sleep(")
        .replaceAll("ns.prompt (", "prompt(")
        .replaceAll("ns.prompt(", "prompt(")
        .replaceAll("ns.wget (", "wget(")
        .replaceAll("ns.wget(", "wget(")
        .replaceAll("ns.scp (", "scp(")
        .replaceAll("ns.scp(", "scp(")
        .replaceAll("ns.write (", "write(")
        .replaceAll("ns.write(", "write(")
        .replaceAll("ns.writePort (", "writePort(")
        .replaceAll("ns.writePort(", "writePort(")

        .replaceAll("ns.bladeburner.", "bladeburner.")
        .replaceAll("ns.codingcontract.", "codingcontract.")
        .replaceAll("ns.corporation.", "corporation.")
        .replaceAll("ns.formulas.", "formulas.")
        .replaceAll("ns.gang.", "gang.")
        .replaceAll("ns.hacknet.", "hacknet.")
        .replaceAll("ns.sleeve.", "sleeve.")
        .replaceAll("ns.stanek.", "stanek.")
        .replace(/\bns.stock./g, "stock.")
        .replace(/\bns.ui./g, "ui.")

    //If textarea has "main(ns)", remove its last bracket pair
    if (textarea.value.includes("main (ns)") || textarea.value.includes("main(ns)")) {
        textarea.value = textarea.value.replace(/(?:.*)}(\s)*$/, '')
    }

    textarea.value = textarea.value
        .replace(/\/\*\*(.*)\@param \{NS\} ns(.*)\*\//, '') //removes param comment
        .replace(/(^|\n)(\s*)export(\s+)async(\s+)function(\s+)main(.*){/, '') //removes export async main
        .replace(/^\s*\n/, "") //removes the top empty line
        .replace(/\s*$/, "") //removes the last empty line
        .replaceAll("ns.ns.ns.ns.", "ns.")
        .replaceAll("ns.ns.ns.", "ns.")
        .replaceAll("ns.ns.", "ns.")
        .replaceAll("ns. ", "ns.")
};

function fixtext998() {
    let textarea = document.getElementById("textarea3");
    textarea.select();
    fixTex998tarea(textarea);
}