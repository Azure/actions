import * as core from '@actions/core';

import { IExecSyncResult, execSync } from './utility';

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
      core.setSecret(servicePrincipalKey);
      let tenantId = credsObject["tenantId"];
      let subscriptionId = credsObject["subscriptionId"];
      if (!servicePrincipalId || !servicePrincipalKey || !tenantId || !subscriptionId) {
          throw new Error("Not all values are present in the creds object. Ensure clientId, clientSecret, tenantId and subscriptionId are supplied");
      }
      throwIfError(execSync("az", "login --service-principal -u \"" + servicePrincipalId + "\" -p \"" + servicePrincipalKey + "\" --tenant \"" + tenantId + "\""));
      throwIfError(execSync("az", "account set --subscription \"" + subscriptionId + "\""));
      console.log("Login successful.");    
    } catch (error) {
      console.log("Login failed. Please check the credentials.");
      core.setFailed(error);
    }
    finally {
      core.warning('This action is moved to azure/login repository, update your workflows to use the new action.');
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