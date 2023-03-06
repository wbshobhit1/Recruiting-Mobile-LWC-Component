public with sharing class OpportunityController {
    
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> showOpportunities ()
    {
        try {
            List<Opportunity> opplist = [select Name,StageName,Amount from Opportunity];
            return opplist;
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static Opportunity showParentAccountInfo (String oppid)
    {
        try {
            Opportunity opp = [select Account.Name, Account.Industry, Account.AnnualRevenue from Opportunity
            where ID = :oppid];
            return opp;
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}