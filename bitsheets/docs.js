/** @param {NS} ns **/
export async function main(ns) {

    const doc = eval("document");
    const terminalInput = doc.getElementById("terminal-input");
    terminalInput.value = "run docs.js ";
    const handler = Object.keys(terminalInput)[1];
    terminalInput[handler].onChange({ target: terminalInput });
    
    var key = [
        "help", "h", "info", "i",
        "properties", "p",
        "methods", "m",
        "bladeburner", "b",
        "codingcontract", "cc",
        "corporation", "co",
        "formulas", "f",
        "gang", "g",
        "hacknet", "hn",
        "sleeve", "sl",
        "stanek", "sk",
        "stocks", "st",
        "userinterface", "u", "ui",
        "ns2.await", "n"];

    var help = ["help", "h", "info", "i"];
    var properties = ["properties", "p", "property"];
    var methods = ["methods", "m", "method"];
    var bladeburner = ["bladeburner", "b"];
    var codingcontract = ["codingcontract", "cc"];
    var corp = ["corporation", "co"];
    var formulas = ["formulas", "f"];
    var gang = ["gang", "g"];
    var haccnet = ["hacknet", "hn"];
    var sleeve = ["sleeve", "sl"];
    var stanek = ["stanek", "sk"];
    var stocks = ["stocks", "st"];
    var userinterface = ["userinterface", "u", "ui"];
    var ns2wait = ["ns2.await", "n"];

    if (help.includes(ns.args[0])) {
        ns.tprintf(`INFO -\nUse any of the following key: (Usage: run docs.js key)`);
        ns.tprintf(`- properties / p        | All Properties`);
        ns.tprintf(`- methods / m           | All Methods`);
        ns.tprintf(`- bladeburner / b       | All methods for Bladeburner`);
        ns.tprintf(`- condingcontract / cc  | All methods for Coding Contract`);
        ns.tprintf(`- corporation / co      | All methods for Corporation`);
        ns.tprintf(`- formulas / f          | All methods for Formulas`);
        ns.tprintf(`- gang / g              | All methods for Gang`);
        ns.tprintf(`- hacknet / hn          | All methods for Hacknet`);
        ns.tprintf(`- sleeve / sl           | All methods for Sleeve`);
        ns.tprintf(`- stanek / sk           | All methods for Stanek`);
        ns.tprintf(`- stocks / st           | All methods for Stock Market`);
        ns.tprintf(`- userinterface / u     | All methods for User Interface`);
        ns.tprintf(`- ns2.await / n         | NS2 functions that needs "await"`);
    }
    else if (properties.includes(ns.args[0])) {
        ns.tprintf(`INFO -\n* All Properties:`);
        ns.tprintf(`- args            | (string | number | boolean)[]  | Arguments passed into the script.`);
        ns.tprintf(`- bladeburner     | Bladeburner                    | Namespace for bladeburner functions.`);
        ns.tprintf(`- codingcontract  | CodingContract                 | Namespace for codingcontract functions.`);
        ns.tprintf(`- corporation     | Corporation                    | Namespace for corporation functions.`);
        ns.tprintf(`- formulas        | Formulas                       | Namespace for formulas functions.`);
        ns.tprintf(`- gang            | Gang                           | Namespace for gang functions.`);
        ns.tprintf(`- hacknet         | Hacknet                        | Namespace for hacknet functions.`);
        ns.tprintf(`- sleeve          | Sleeve                         | Namespace for sleeve functions.`);
        ns.tprintf(`- stanek          | Stanek                         | Namespace for stanek functions.`);
        ns.tprintf(`- stock           | TIX                            | Namespace for stock functions.`);
        ns.tprintf(`- ui              | UserInterface                  | Namespace for user interface functions.`);
    }
    else if (methods.includes(ns.args[0])) {
        ns.tprintf(`INFO -\n* All Methods:`);
        ns.tprintf(`- alert(msg)                                  | Open up a message box.`);
        ns.tprintf(`- asleep(millis)                              | Suspends the script for n milliseconds. Doesn't block with concurrent calls.`);
        ns.tprintf(`- atExit(f)                                   | Add callback function when the script dies`);
        ns.tprintf(`- brutessh(host)                              | Runs BruteSSH.exe on a server.`);
        ns.tprintf(`- clear(handle)                               | Clear data from a file.`);
        ns.tprintf(`- clearLog()                                  | Clears the script’s logs.`);
        ns.tprintf(`- clearPort(handle)                           | Clear data from a port.`);
        ns.tprintf(`- deleteServer(host)                          | Delete a purchased server.`);
        ns.tprintf(`- disableLog(fn)                              | Disables logging for the given function.`);
        ns.tprintf(`- enableLog(fn)                               | Enable logging for a certain function.`);
        ns.tprintf(`- exec(script, host, numThreads, args)        | Start another script on any server.`);
        ns.tprintf(`- exit()                                      | Terminates the current script immediately.`);
        ns.tprintf(`- fileExists(filename, host)                  | Check if a file exists.`);
        ns.tprintf(`- flags(schema)                               | Parse command line flags.`);
        ns.tprintf(`- ftpcrack(host)                              | Runs FTPCrack.exe on a server.`);
        ns.tprintf(`- getBitNodeMultipliers()                     | Get the current Bitnode multipliers.`);
        ns.tprintf(`- getFavorToDonate()                          | Returns the amount of Faction favor required to be able to donate to a faction.`);
        ns.tprintf(`- getGrowTime(host)                           | Get the execution time of a grow() call.`);
        ns.tprintf(`- getHackingLevel()                           | Returns the player’s current hacking level.`);
        ns.tprintf(`- getHackingMultipliers()                     | Get hacking related multipliers.`);
        ns.tprintf(`- getHacknetMultipliers()                     | Get hacknet related multipliers.`);
        ns.tprintf(`- getHackTime(host)                           | Get the execution time of a hack() call.`);
        ns.tprintf(`- getHostname()                               | Returns a string with the hostname of the server that the script is running on.`);
        ns.tprintf(`- getOwnedSourceFiles()                       | Get a list of acquired Source-Files.`);
        ns.tprintf(`- getPlayer()                                 | Get information about the player.`);
        ns.tprintf(`- getPortHandle(port)                         | Get all data on a port.`);
        ns.tprintf(`- getPurchasedServerCost(ram)                 | Get cost of purchasing a server.`);
        ns.tprintf(`- getPurchasedServerLimit()                   | Returns the maximum number of servers you can purchase.`);
        ns.tprintf(`- getPurchasedServerMaxRam()                  | Returns the maximum RAM that a purchased server can have.`);
        ns.tprintf(`- getPurchasedServers()                       | Returns an array with the hostnames of all of the servers you have purchased.`);
        ns.tprintf(`- getRunningScript(filename, hostname, args)  | Get general info about a running script.`);
        ns.tprintf(`- getScriptExpGain(script, host, args)        | Get the exp gain of a script.`);
        ns.tprintf(`- getScriptIncome(script, host, args)         | Get the income of a script.`);
        ns.tprintf(`- getScriptLogs(fn, host, args)               | Get all the logs of a script.`);
        ns.tprintf(`- getScriptName()                             | Returns the current script name.`);
        ns.tprintf(`- getScriptRam(script, host)                  | Get the ram cost of a script.`);
        ns.tprintf(`- getServer(host)                             | Returns a server object for the given server. Defaults to the running script's server if host is not specified.`)
        ns.tprintf(`- getServerGrowth(host)                       | Get a server growth parameter.`);
        ns.tprintf(`- getServerMaxMoney(host)                     | Get maximum money available on a server.`);
        ns.tprintf(`- getServerMaxRam(host)                       | Get the max RAM on a server.`);
        ns.tprintf(`- getServerMinSecurityLevel(host)             | Returns the minimum security level of the target server.`);
        ns.tprintf(`- getServerMoneyAvailable(host)               | Get money available on a server.`);
        ns.tprintf(`- getServerNumPortsRequired(host)             | Returns the number of open ports required to successfully run NUKE.exe on the specified server.`);
        ns.tprintf(`- getServerRequiredHackingLevel(host)         | Returns the required hacking level of the target server.`);
        ns.tprintf(`- getServerSecurityLevel(host)                | Get server security level.`);
        ns.tprintf(`- getServerUsedRam(host)                      | Get the used RAM on a server.`);
        ns.tprintf(`- getTimeSinceLastAug()                       | Returns the amount of time in milliseconds that have passed since you last installed Augmentations.`)
        ns.tprintf(`- getWeakenTime(host)                         | Get the execution time of a weaken() call.`);
        ns.tprintf(`- grow(host, opts)                            | Spoof money in a servers bank account, increasing the amount available.`);
        ns.tprintf(`- growthAnalyze(host, growthAmount, cores)    | Calculate the number of grow thread needed to grow a server by a certain multiplier.`)
        ns.tprintf(`- growthAnalyzeSecurity(threads)              | Calculate the security increase for a number of thread.`);
        ns.tprintf(`- hack(host, opts)                            | Steal a servers money.`);
        ns.tprintf(`- hackAnalyze(host)                           | Get the part of money stolen with a single thread.`);
        ns.tprintf(`- hackAnalyzeChance(host)                     | Get the chance of successfully hacking a server.`);
        ns.tprintf(`- hackAnalyzeSecurity(threads)                | Get the security increase for a number of thread.`);
        ns.tprintf(`- hackAnalyzeThreads(host, hackAmount)        | Predict the effect of hack.`);
        ns.tprintf(`- hasRootAccess(host)                         | Check if your have root access on a server.`);
        ns.tprintf(`- httpworm(host)                              | Runs HTTPWorm.exe on a server.`);
        ns.tprintf(`- isLogEnabled(fn)                            | Checks the status of the logging for the given function.`);
        ns.tprintf(`- isRunning(script, host, args)               | Check if a script is running.`);
        ns.tprintf(`- kill(script, host, args)                    | Terminate another script.`);
        ns.tprintf(`- killall(host)                               | Terminate all scripts on a server.`);
        ns.tprintf(`- ls(host, grep)                              | List files on a server.`);
        ns.tprintf(`- nFormat(n, format)                          | Format a number`);
        ns.tprintf(`- nuke(host)                                  | Runs NUKE.exe on a server.`)
        ns.tprintf(`- peek(port)                                  | Get a copy of the data from a port without popping it.`);
        ns.tprintf(`- print(msg)                                  | Prints a value or a variable to the script’s logs.`);
        ns.tprintf(`- prompt(txt)                                 | Prompt the player with a Yes/No modal.`);
        ns.tprintf(`- ps(host)                                    | List running scripts on a server.`);
        ns.tprintf(`- purchaseServer(hostname, ram)               | Purchase a server.`);
        ns.tprintf(`- read(handle)                                | Read content of a file.`);
        ns.tprintf(`- readPort(port)                              | Read data from a port.`);
        ns.tprintf(`- relaysmtp(host)                             | Runs relaySMTP.exe on a server.`);
        ns.tprintf(`- rm(name, host)                              | Delete a file.`);
        ns.tprintf(`- run(script, numThreads, args)               | Start another script on the current server.`);
        ns.tprintf(`- scan(host)                                  | Get the list servers connected to a server.`);
        ns.tprintf(`- scp(files, source, destination)             | Copy file between servers.`);
        ns.tprintf(`- scriptKill(script, host)                    | Kill all scripts with a filename.`);
        ns.tprintf(`- scriptRunning(script, host)                 | Check if any script with a filename is running.`);
        ns.tprintf(`- serverExists(host)                          | Returns a boolean denoting whether or not the specified server exists.`)
        ns.tprintf(`- sleep(millis)                               | Suspends the script for n milliseconds.`);
        ns.tprintf(`- spawn(script, numThreads, args)             | Terminate current script and start another in 10s.`);
        ns.tprintf(`- sprintf(format, args)                       | Format a string.`);
        ns.tprintf(`- sqlinject(host)                             | Runs SQLInject.exe on a server.`);
        ns.tprintf(`- tail(fn, host, args)                        | Open the tail window of a script.`);
        ns.tprintf(`- tFormat(milliseconds, milliPrecision)       | Format time to readable string`);
        ns.tprintf(`- toast(msg, variant)                         | Queue a toast (bottom-right notification).`);
        ns.tprintf(`- tprint(msg)                                 | Prints a value or a variable to the Terminal.`);
        ns.tprintf(`- tprintf(format, values)                     | Prints a raw value or a variable to the Terminal.`);
        ns.tprintf(`- tryWritePort(port, data)                    | Attempt to write to a port.`);
        ns.tprintf(`- vsprintf(format, args)                      | Format a string with an array of arguments.`);
        ns.tprintf(`- weaken(host, opts)                          | Reduce a server security level.`);
        ns.tprintf(`- weakenAnalyze(threads, cores)               | Predict the effect of weaken.`);
        ns.tprintf(`- wget(url, target, host)                     | Download a file from the internet.`);
        ns.tprintf(`- write(handle, data, mode)                   | Write data to a file.`);
        ns.tprintf(`- writePort(port, data)                       | Write data to a port.`);
    }

    else if (bladeburner.includes(ns.args[0])) {
        ns.tprintf(`INFO -\n* All Methods for Bladeburner:`);
        ns.tprintf(`- getActionAutolevel(type, name)               | Get wether an action is set to autolevel.`);
        ns.tprintf(`- getActionCountRemaining(type, name)          | Get action count remaining.`);
        ns.tprintf(`- getActionCurrentLevel(type, name)            | Get the current level of an action.`);
        ns.tprintf(`- getActionEstimatedSuccessChance(type, name)  | Get estimate success chance of an action.`);
        ns.tprintf(`- getActionMaxLevel(type, name)                | Get the maximum level of an action.`);
        ns.tprintf(`- getActionRepGain(type, name, level)          | Get the reputation gain of an action.`);
        ns.tprintf(`- getActionTime(type, name)                    | Get the time to complete an action.`);
        ns.tprintf(`- getBlackOpNames()                            | List all black ops.`);
        ns.tprintf(`- getBlackOpRank(name)                         | Get black op required rank.`);
        ns.tprintf(`- getBonusTime()                               | Get bladeburner bonus time.`);
        ns.tprintf(`- getCity()                                    | Get current city.`);
        ns.tprintf(`- getCityChaos(name)                           | Get chaos of a city.`);
        ns.tprintf(`- getCityCommunities(name)                     | Get number of communities in a city.`);
        ns.tprintf(`- getCityEstimatedPopulation(name)             | Get estimated population in city.`);
        ns.tprintf(`- getContractNames()                           | List all contracts.`);
        ns.tprintf(`- getCurrentAction()                           | Get current action.`);
        ns.tprintf(`- getGeneralActionNames()                      | List all general actions.`);
        ns.tprintf(`- getOperationNames()                          | List all operations.`);
        ns.tprintf(`- getRank()                                    | Get player bladeburner rank.`);
        ns.tprintf(`- getSkillLevel(name)                          | Get skill level.`);
        ns.tprintf(`- getSkillNames()                              | List all skills.`);
        ns.tprintf(`- getSkillPoints()                             | Get bladeburner skill points.`);
        ns.tprintf(`- getSkillUpgradeCost(name)                    | Get cost to upgrade skill.`);
        ns.tprintf(`- getStamina()                                 | Get bladeburner stamina.`);
        ns.tprintf(`- getTeamSize(type, name)                      | Get team size.`);
        ns.tprintf(`- joinBladeburnerDivision()                    | Join the bladeburner division.`);
        ns.tprintf(`- joinBladeburnerFaction()                     | Join the bladeburner faction.`);
        ns.tprintf(`- setActionAutolevel(type, name, autoLevel)    | Set an action autolevel.`);
        ns.tprintf(`- setActionLevel(type, name, level)            | Set the level of an action.`);
        ns.tprintf(`- setTeamSize(type, name, size)                | Set team size.`);
        ns.tprintf(`- startAction(type, name)                      | Start an action.`);
        ns.tprintf(`- stopBladeburnerAction()                      | Stop current action.`);
        ns.tprintf(`- switchCity(name)                             | Travel to another city in bladeburner.`);
        ns.tprintf(`- upgradeSkill(name)                           | Upgrade skill.`);
    }
    else if (codingcontract.includes(ns.args[0])) {
        ns.tprintf(`INFO -\n* All Methods for Coding Contract:`);
        ns.tprintf(`- attempt(answer, filename, host, opts)  | Attemps a coding contract.`);
        ns.tprintf(`- getContractType(filename, host)        | Get the type of a coding contract.`);
        ns.tprintf(`- getData(filename, host)                | Get the input data.`);
        ns.tprintf(`- getDescription(filename, host)         | Get the description.`);
        ns.tprintf(`- getNumTriesRemaining(filename, host)   | Get the number of attempt remaining.`);
    }
    else if (corp.includes(ns.args[0])) {
        ns.tprintf(`INFO -\n* All Methods for Corporation:`);
        ns.tprintf(`- expandCity(divisionName, cityName)          | Expand to a new city`);
        ns.tprintf(`- expandIndustry(industryType, divisionName)  | Expand to a new industry`);
        ns.tprintf(`- getCorporation()                            | Get corporation data`);
        ns.tprintf(`- getDivision(divisionName)                   | Get division data`);
        ns.tprintf(`- issueDividends(percent)                     | Issue dividends`);
        ns.tprintf(`- levelUpgrade(upgradeName)                   | Level an upgrade.`);
        ns.tprintf(`- unlockUpgrade(upgradeName)                  | Unlock an upgrade.`);
    }
    else if (formulas.includes(ns.args[0])) {
        ns.tprintf(`INFO -\n* All Methods for Gang Formulas:`);
        ns.tprintf(`- ascensionMultiplier(points)      | Calculate ascension mult.`);
        ns.tprintf(`- ascensionPointsGain(exp)             | Calculate ascension point gain.`);
        ns.tprintf(`- moneyGain(gang, member, task)        | Calculate money gain per tick.`);
        ns.tprintf(`- respectGain(gang, member, task)      | Calculate respect gain per tick.`);
        ns.tprintf(`- wantedLevelGain(gang, member, task)  | Calculate wanted gain per tick.`);
        ns.tprintf(`- wantedPenalty(gang)                  | Calculate the wanted penalty.`);

        ns.tprintf(`INFO -\n* All Methods for Hacking Formulas:`);
        ns.tprintf(`- growPercent(server, threads, player, cores)  | Calculate the percent a server would grow.`);
        ns.tprintf(`- growTime(server, player)                     | Calculate grow time.`);
        ns.tprintf(`- hackChance(server, player)                   | Calculate hack chance.`);
        ns.tprintf(`- hackExp(server, player)                      | Calculate hack exp for one thread.`);
        ns.tprintf(`- hackPercent(server, player)                  | Calculate hack percent for one thread.`);
        ns.tprintf(`- hackTime(server, player)                     | Calculate hack time.`);
        ns.tprintf(`- weakenTime(server, player)                   | Calculate weaken time.`);

        ns.tprintf(`INFO -\n* All Methods for Hacknet Nodes Formulas:`);
        ns.tprintf(`- constants()                                             | All constants used by the game.`);
        ns.tprintf(`- coreUpgradeCost(startingCore, extraCores, costMult)     | Calculate cost of upgrading hacknet node cores.`);
        ns.tprintf(`- hacknetNodeCost(n, mult)                                | Calculate the cost of a hacknet node.`);
        ns.tprintf(`- levelUpgradeCost(startingLevel, extraLevels, costMult)  | Calculate cost of upgrading hacknet node level.`);
        ns.tprintf(`- moneyGainRate(level, ram, cores, mult)                  | Calculate money gain rate.`);
        ns.tprintf(`- ramUpgradeCost(startingRam, extraLevels, costMult)      | Calculate cost of upgrading hacknet node ram.`);

        ns.tprintf(`INFO -\n* All Methods for Hacknet Servers Formulas:`);
        ns.tprintf(`- cacheUpgradeCost(startingCache, extraCache)             | Calculate cost of upgrading hacknet server cache.`);
        ns.tprintf(`- constants()                                             | All constants used by the game.`);
        ns.tprintf(`- coreUpgradeCost(startingCore, extraCores, costMult)     | Calculate cost of upgrading hacknet server cores.`);
        ns.tprintf(`- hacknetServerCost(n, mult)                              | Calculate the cost of a hacknet server.`);
        ns.tprintf(`- hashGainRate(level, ramUsed, maxRam, cores, mult)       | Calculate hash gain rate.`);
        ns.tprintf(`- hashUpgradeCost(upgName, level)                         | Calculate hash cost of an upgrade.`);
        ns.tprintf(`- levelUpgradeCost(startingLevel, extraLevels, costMult)  | Calculate cost of upgrading hacknet server level.`);
        ns.tprintf(`- ramUpgradeCost(startingRam, extraLevels, costMult)      | Calculate cost of upgrading hacknet server ram.`);

        ns.tprintf(`INFO -\n* All Methods for Skills Formulas:`);
        ns.tprintf(`- calculateExp(skill, skillMult)  | Calculate exp for skill level.`);
        ns.tprintf(`- calculateSkill(exp, skillMult)  | Calculate skill level.`);
    }
    else if (gang.includes(ns.args[0])) {
        ns.tprintf(`INFO -\n* All Methods for Gang:`);
        ns.tprintf(`- ascendMember(memberName)                  | Ascend a gang member.`);
        ns.tprintf(`- canRecruitMember()                        | Check if you can recruit a new gang member.`);
        ns.tprintf(`- createGang(faction)                       | Create a gang.`);
        ns.tprintf(`- getAscensionResult(memberName)            | Get the result of an ascension without ascending.`);
        ns.tprintf(`- getBonusTime()                            | Get bonus time.`);
        ns.tprintf(`- getChanceToWinClash(gangName)             | Get chance to win clash with other gang.`);
        ns.tprintf(`- getEquipmentCost(equipName)               | Get cost of equipment.`);
        ns.tprintf(`- getEquipmentNames()                       | List equipment names.`);
        ns.tprintf(`- getEquipmentStats(equipName)              | Get stats of an equipment.`);
        ns.tprintf(`- getEquipmentType(equipName)               | Get type of an equipment.`);
        ns.tprintf(`- getGangInformation()                      | Get information about your gang.`);
        ns.tprintf(`- getMemberInformation(name)                | Get information about a specific gang member.`);
        ns.tprintf(`- getMemberNames()                          | List all gang members.`);
        ns.tprintf(`- getOtherGangInformation()                 | Get information about the other gangs.`);
        ns.tprintf(`- getTaskNames()                            | List member task names.`);
        ns.tprintf(`- getTaskStats(name)                        | Get stats of a task.`);
        ns.tprintf(`- inGang()                                  | Check if you're in a gang.`);
        ns.tprintf(`- purchaseEquipment(memberName, equipName)  | Purchase an equipment for a gang member.`);
        ns.tprintf(`- recruitMember(name)                       | Recruit a new gang member.`);
        ns.tprintf(`- setMemberTask(memberName, taskName)       | Set gang member to task.`);
        ns.tprintf(`- setTerritoryWarfare(engage)               | Enable/Disable territory warfare.`);
    }
    else if (haccnet.includes(ns.args[0])) {
        ns.tprintf(`INFO -\n* All Methods for Hacknet:`);
        ns.tprintf(`- getCacheUpgradeCost(index, n)    | Calculate the cost of upgrading hacknet node cache.`);
        ns.tprintf(`- getCoreUpgradeCost(index, n)     | Calculate the cost of upgrading hacknet node cores.`);
        ns.tprintf(`- getHashUpgradeLevel(upgName)     | Get the level of a hash upgrade.`);
        ns.tprintf(`- getHashUpgrades()                | Get the list of hash upgrades`);
        ns.tprintf(`- getLevelUpgradeCost(index, n)    | Calculate the cost of upgrading hacknet node levels.`);
        ns.tprintf(`- getNodeStats(index)              | Get the stats of a hacknet node.`);
        ns.tprintf(`- getPurchaseNodeCost()            | Get the price of the next hacknet node.`);
        ns.tprintf(`- getRamUpgradeCost(index, n)      | Calculate the cost of upgrading hacknet node RAM.`);
        ns.tprintf(`- getStudyMult()                   | Get the multipler to study.`);
        ns.tprintf(`- getTrainingMult()                | Get the multipler to training.`);
        ns.tprintf(`- hashCapacity()                   | Get the maximum number of hashes you can store.`);
        ns.tprintf(`- hashCost(upgName)                | Get the cost of a hash upgrade.`);
        ns.tprintf(`- maxNumNodes()                    | Get the maximum number of hacknet nodes.`);
        ns.tprintf(`- numHashes()                      | Get the total number of hashes stored.`);
        ns.tprintf(`- numNodes()                       | Get the number of hacknet nodes you own.`);
        ns.tprintf(`- purchaseNode()                   | Purchase a new hacknet node.`);
        ns.tprintf(`- spendHashes(upgName, upgTarget)  | Purchase a hash upgrade.`);
        ns.tprintf(`- upgradeCache(index, n)           | Upgrade the cache of a hacknet node.`);
        ns.tprintf(`- upgradeCore(index, n)            | Upgrade the core of a hacknet node.`);
        ns.tprintf(`- upgradeLevel(index, n)           | Upgrade the level of a hacknet node.`);
        ns.tprintf(`- upgradeRam(index, n)             | Upgrade the RAM of a hacknet node.`);
    }
    else if (sleeve.includes(ns.args[0])) {
        ns.tprintf(`INFO -\n* All Methods for Sleeve:`);
        ns.tprintf(`- getInformation(sleeveNumber)                                  | Get information about a sleeve.`);
        ns.tprintf(`- getNumSleeves()                                               | Get the number of sleeves you own.`);
        ns.tprintf(`- getSleeveAugmentations(sleeveNumber)                          | Get augmentations installed on a sleeve.`);
        ns.tprintf(`- getSleevePurchasableAugs(sleeveNumber)                        | List purchasable augs for a sleeve.`);
        ns.tprintf(`- getSleeveStats(sleeveNumber)                                  | Get the stats of a sleeve.`);
        ns.tprintf(`- getTask(sleeveNumber)                                         | Get task of a sleeve.`);
        ns.tprintf(`- purchaseSleeveAug(sleeveNumber, augName)                      | Purchase an aug for a sleeve.`);
        ns.tprintf(`- setToCommitCrime(sleeveNumber, name)                          | Set a sleeve to commit crime.`);
        ns.tprintf(`- setToCompanyWork(sleeveNumber, companyName)                   | Set a sleeve to work for a company.`);
        ns.tprintf(`- setToFactionWork(sleeveNumber, factionName, factionWorkType)  | Set a sleeve to work for a faction.`);
        ns.tprintf(`- setToGymWorkout(sleeveNumber, gymName, stat)                  | Set a sleeve to workout at the gym.`);
        ns.tprintf(`- setToShockRecovery(sleeveNumber)                              | Set a sleeve to shock recovery.`);
        ns.tprintf(`- setToSynchronize(sleeveNumber)                                | Set a sleeve to synchronize.`);
        ns.tprintf(`- setToUniversityCourse(sleeveNumber, university, className)    | Set a sleeve to take a class at a university.`);
        ns.tprintf(`- travel(sleeveNumber, cityName)                                | Make a sleeve travel to another city.`);
    }
    else if (stanek.includes(ns.args[0])) {
        ns.tprintf(`INFO -\n* All Methods for Stanek:`);
        ns.tprintf(`- activeFragments()                             | List of fragments in Stanek's Gift.`);
        ns.tprintf(`- canPlace(rootX, rootY, rotation, fragmentId)  | Check if fragment can be placed at specified location.`);
        ns.tprintf(`- charge(rootX, rootY)                          | Charge a fragment, increasing it's power.`);
        ns.tprintf(`- clear()                                       | Clear the board of all fragments.`);
        ns.tprintf(`- fragmentDefinitions()                         | List possible fragments.`);
        ns.tprintf(`- get(rootX, rootY)                             | Get placed fragment at location.`);
        ns.tprintf(`- height()                                      | Stanek's Gift height.`);
        ns.tprintf(`- place(rootX, rootY, rotation, fragmentId)     | Place fragment on Stanek's Gift.`);
        ns.tprintf(`- remove(rootX, rootY)                          | Remove fragment at location.`);
        ns.tprintf(`- width()                                       | Stanek's Gift width.`);
    }
    else if (stocks.includes(ns.args[0])) {
        ns.tprintf(`INFO -\n* All Methods for Stock Market:`);
        ns.tprintf(`- buy(sym, shares)                            | Buy stocks.`);
        ns.tprintf(`- cancelOrder(sym, shares, price, type, pos)  | Cancel order for stocks.`);
        ns.tprintf(`- getAskPrice(sym)                            | Returns the ask price of that stock.`);
        ns.tprintf(`- getBidPrice(sym)                            | Returns the bid price of that stock.`);
        ns.tprintf(`- getForecast(sym)                            | Returns the probability that the specified stock’s price will increase (as opposed to decrease) during the next tick.`);
        ns.tprintf(`- getMaxShares(sym)                           | Returns the maximum number of shares of a stock.`);
        ns.tprintf(`- getOrders()                                 | Returns your order book for the stock market.`);
        ns.tprintf(`- getPosition(sym)                            | Returns the player’s position in a stock.`);
        ns.tprintf(`- getPrice(sym)                               | Returns the price of a stock`);
        ns.tprintf(`- getPurchaseCost(sym, shares, posType)       | Calculates cost of buying stocks.`);
        ns.tprintf(`- getSaleGain(sym, shares, posType)           | Calculate profit of setting stocks.`);
        ns.tprintf(`- getSymbols()                                | Returns an array of the symbols of the tradable stocks`);
        ns.tprintf(`- getVolatility(sym)                          | Returns the volatility of the specified stock.`);
        ns.tprintf(`- placeOrder(sym, shares, price, type, pos)   | Place order for stocks.`);
        ns.tprintf(`- purchase4SMarketData()                      | Purchase 4S Market Data Access.`);
        ns.tprintf(`- purchase4SMarketDataTixApi()                | Purchase 4S Market Data TIX API Access.`);
        ns.tprintf(`- sell(sym, shares)                           | Sell stocks.`);
        ns.tprintf(`- sellShort(sym, shares)                      | Sell short stock.`);
        ns.tprintf(`- short(sym, shares)                          | Short stocks.`);
    }
    else if (userinterface.includes(ns.args[0])) {
        ns.tprintf(`INFO -\n* All Methods for User Interface:`);
        ns.tprintf(`- getTheme()  | Get the current theme`);
    }

    else if (ns2wait.includes(ns.args[0])) {
        ns.tprintf(`INFO -\nWrite "await" before any call to the following Netscript functions:`);
        ns.tprintf(`- hack`);
        ns.tprintf(`- grow`);
        ns.tprintf(`- weaken`);
        ns.tprintf(`- sleep`);
        ns.tprintf(`- prompt`);
        ns.tprintf(`- scp`);
        ns.tprintf(`- wget`);
        ns.tprintf(`- write`);
        ns.tprintf(`- writePort`);
    }
    else if ([ns.args[0]] != key) {
        ns.tprintf(`ERROR -\nInvalid or missing key; Try: run docs.js help / h / info / i`);
    }
}