Feature: Gives error on front-end
 @javascript
 Scenario: User fills too short password
   Given I am on my homepage
    When I fill up password with "shrt"
    Then I see error meessage "The password should be 8~20 characters long. Please try again"
 