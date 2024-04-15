Feature: Dashboard functionality

  Background:
    Given I am on the login page
    When I enter valid credentials and click sign in
    When I add a new dashboard
    Then I fill dashboard popup inputs and save

  Scenario: User can add a new dashboard
    Then the dashboard should be added successfully

  Scenario: User can delete a newly added dashboard
    And I delete the newly added dashboard
    Then the dashboard should be deleted successfully

  Scenario: User can edit a newly added dashboard
    And I edit the newly added dashboard
    Then the dashboard should be edited successfully