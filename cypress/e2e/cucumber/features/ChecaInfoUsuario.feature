Feature: Check User Personal Info
  As a user
  I want to login and go to account section
  So That I can check my personal account info

  Scenario: Checking account info
    Given I am on the login page
    When I enter valid credentials
    And I click on the login button
    And I go to user dashboard
    And I go to user data
    Then I can see my user infos
