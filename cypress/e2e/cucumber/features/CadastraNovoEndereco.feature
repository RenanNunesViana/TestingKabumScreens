Feature: Register a new address
  As a user
  I want to login and go to personal info section
  So That I can add a new Address

  Scenario: Trying to add an address with invalid CPF
    Given I am logged in
    When I go to user dashboard
    And I go to user data
    And I select add address option
    And I try add an address with an invalid CPF
    Then I see error phrase to correct the CPF field

  Scenario: Trying to add an address with more than 6 length number field
    Given I am logged in
    When I go to user dashboard
    And I go to user data
    And I select add address option
    And I try fill with more than 6 numbers in number field
    Then I see error phrase to correct the number field about length

  Scenario: Trying to add an address with alphanumerics in number field
    Given I am logged in
    When I go to user dashboard
    And I go to user data
    And I select add address option
    And I try fill number field with alphanumeric chars
    Then I see error phrase to correct the number field about typos