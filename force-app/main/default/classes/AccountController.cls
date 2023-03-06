public with sharing class AccountController {
    
    @AuraEnabled
    public static List<Account> showAccounts(){
        try {
            List<Account> acclist = [select Name,BillingCity,BillingState from Account];
            return acclist;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}