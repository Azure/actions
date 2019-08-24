import * as core from '@actions/core';
import { execSync, IExecSyncResult, IExecSyncOptions } from './utility';
import stream = require('stream');

async function main() {
    try{
      throwIfError(execSync("az", "--version"));
      let creds = core.getInput('creds', { required: true });
      let credsObject;
      try {
          credsObject = JSON.parse(creds);
      } catch (ex) {
          throw new Error('Credentials object is not a valid JSON');
      }

      let servicePrincipalId = credsObject["clientId"];
      let servicePrincipalKey = credsObject["clientSecret"];
      let tenantId = credsObject["tenantId"];
      let subscriptionId = credsObject["subscriptionId"];
      if (!servicePrincipalId || !servicePrincipalKey || !tenantId || !subscriptionId) {
          throw new Error("Not all values are present in the creds object. Ensure clientId, clientSecret, tenantId and subscriptionId are supplied");
      }
      let option: IExecSyncOptions = {
        silent:true, 
        outStream: <stream.Writable>process.stdout,
        errStream: <stream.Writable>process.stderr
       };
      throwIfError(execSync("az", "login --service-principal -u \"" + servicePrincipalId + "\" -p \"" + servicePrincipalKey + "\" --tenant \"" + tenantId + "\"", option));
      throwIfError(execSync("az", "account set --subscription \"" + subscriptionId + "\"", option));
      console.log("Login successful.");    
    } catch (error) {
      console.log("Login failed.");
      core.setFailed(error);
    }
  }

function throwIfError(resultOfToolExecution: IExecSyncResult, errormsg?: string) {
    if (resultOfToolExecution.code != 0) {
        core.error("Error Code: [" + resultOfToolExecution.code + "]");
        if (errormsg) {
          core.error("Error: " + errormsg);
        }
        throw resultOfToolExecution;
    }
  }


main();