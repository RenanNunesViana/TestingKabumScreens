Feature: Login functionality
  As a user
  I want to log into the application
  So that I can see my name

  Scenario: Successful login
    Given I am on the login page
    When I enter valid credentials
    And I click on the login button
    Then I should see first name in drawer button

  Scenario: Unsuccessful login
    Given I am on the login page
    When I enter not valid credentials
    And I click on the login button
    Then should see not valid login message