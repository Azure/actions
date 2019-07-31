"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
const utility_1 = require("./utility");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            throwIfError(utility_1.execSync("az", "--version"));
            let creds = core.getInput('creds', { required: true });
            let credsObject;
            try {
                credsObject = JSON.parse(creds);
            }
            catch (ex) {
                throw new Error('Credentials object is not a valid JSON');
            }
            let servicePrincipalId = credsObject["clientId"];
            let servicePrincipalKey = credsObject["clientSecret"];
            let tenantId = credsObject["tenantId"];
            let subscriptionId = credsObject["subscriptionId"];
            if (!servicePrincipalId || !servicePrincipalKey || !tenantId || !subscriptionId) {
                throw new Error("Not all values are present in the creds object. Ensure clientId, clientSecret, tenantId and subscriptionId are supplied");
            }
            throwIfError(utility_1.execSync("az", "login --service-principal -u \"" + servicePrincipalId + "\" -p \"" + servicePrincipalKey + "\" --tenant \"" + tenantId + "\""));
            throwIfError(utility_1.execSync("az", "account set --subscription \"" + subscriptionId + "\""));
        }
        catch (error) {
            core.debug("Login failed.");
            core.setFailed(error);
        }
    });
}
function throwIfError(resultOfToolExecution, errormsg) {
    if (resultOfToolExecution.code != 0) {
        core.error("Error Code: [" + resultOfToolExecution.code + "]");
        if (errormsg) {
            core.error("Error: " + errormsg);
        }
        throw resultOfToolExecution;
    }
}
main();
