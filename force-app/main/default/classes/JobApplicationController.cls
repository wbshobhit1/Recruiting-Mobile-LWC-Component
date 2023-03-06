public with sharing class JobApplicationController {
    
    @AuraEnabled
    public static List<Job_Application__c> showApplications(){
        try {
            List<Job_Application__c> jlist = [select Name,
                                                Position__r.Name,
                                                Candidate__r.First_Name__c,
                                                Candidate__r.Last_Name__c,
                                                Status__c,Stage__c
                                                from Job_Application__c
                                                where Status__c <> null
                                                order by Name
                                                LIMIT :(Limits.getLimitQueryRows() - Limits.getQueryRows())];
            return jlist;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static List<Job_Application__c> searchRecords(String stgname){
        try {

            String stgpattern = '%'+stgname+'%';
            List<Job_Application__c> jlist = [select Name, Status__c,Stage__c
                                                from Job_Application__c
                                                where Stage__c LIKE :stgpattern
                                                order by Name
                                                LIMIT :(Limits.getLimitQueryRows() - Limits.getQueryRows())];
            return jlist;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static List<Job_Application__c> searchRecordByStatus(String rstatus){
        try {
            List<Job_Application__c> jlist = [select Name, Status__c,Stage__c
                                                from Job_Application__c
                                                where Status__c = :rstatus
                                                order by Name
                                                LIMIT :(Limits.getLimitQueryRows() - Limits.getQueryRows())];
            return jlist;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}