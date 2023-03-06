public with sharing class PositionController {
    
    @AuraEnabled
    public static List<Position__c> showPositions(){
        try {

            List<Position__c> plist = [select Name,Department__c,Status__c
                                        from Position__c
                                        where Department__c <> null
                                        order by Name
                                        LIMIT :(Limits.getLimitQueryRows() - Limits.getQueryRows())];
            return plist;
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static string deletePositions(String posid){
        try {

            Position__c pos = [select Name from Position__c where Id = :posid];
            delete pos;
            return 'position deleted';
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}