public with sharing class CandidateController {
    
    @AuraEnabled
    public static List<Candidate__c> showCandidates(){
        try {

            List<Candidate__c> clist = [select Name,First_Name__c,Last_Name__c,Email__c
                                        from Candidate__c
                                        where Email__c <> null
                                        order by Name
                                        LIMIT :(Limits.getLimitQueryRows() - Limits.getQueryRows())];
            return clist;
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static string deleteCandidates(String candid){
        try {

            Candidate__c cand = [select Name from Candidate__c where Id = :candid];
            delete cand;
            return 'candidate deleted';
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}