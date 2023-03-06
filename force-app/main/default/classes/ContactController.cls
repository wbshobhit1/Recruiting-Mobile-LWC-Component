public with sharing class ContactController {
    
    @AuraEnabled
    public static List<Contact> showContacts(){
        try {
            List<Contact> conlist = [select FirstName,LastName,Email from Contact];
            return conlist;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static List<Contact> showContactsByName(String fname){
        try {
            String fnamepattern=fname+'%';
            
            List<Contact> conlist = [select FirstName,LastName,Email from Contact
                                        where FirstName LIKE: fnamepattern];
            return conlist;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    
}