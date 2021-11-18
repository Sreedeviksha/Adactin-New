$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/adactin/feature/Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Booking functionality of Adactin Application",
  "description": "",
  "id": "booking-functionality-of-adactin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#Background:"
    },
    {
      "line": 4,
      "value": "#\tGiven User launches the adactin application"
    },
    {
      "line": 5,
      "value": "#\tWhen User log into the application"
    }
  ],
  "line": 8,
  "name": "Verify the user is able to login the application",
  "description": "",
  "id": "booking-functionality-of-adactin-application;verify-the-user-is-able-to-login-the-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User launches the application",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User enters the valid \"\u003cusername\u003e\" in the username field",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User enters the valid \"\u003cpassword\u003e\" in the password field",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User verifies whether HomePage navigates to Search Hotel Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "booking-functionality-of-adactin-application;verify-the-user-is-able-to-login-the-application;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 16,
      "id": "booking-functionality-of-adactin-application;verify-the-user-is-able-to-login-the-application;;1"
    },
    {
      "cells": [
        "AAA",
        "111"
      ],
      "line": 17,
      "id": "booking-functionality-of-adactin-application;verify-the-user-is-able-to-login-the-application;;2"
    },
    {
      "cells": [
        "BBB",
        "222"
      ],
      "line": 18,
      "id": "booking-functionality-of-adactin-application;verify-the-user-is-able-to-login-the-application;;3"
    },
    {
      "cells": [
        "SreeDeviRaman",
        "Z1UBM4"
      ],
      "line": 19,
      "id": "booking-functionality-of-adactin-application;verify-the-user-is-able-to-login-the-application;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1908300,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify the user is able to login the application",
  "description": "",
  "id": "booking-functionality-of-adactin-application;verify-the-user-is-able-to-login-the-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User launches the application",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User enters the valid \"AAA\" in the username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User enters the valid \"111\" in the password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User verifies whether HomePage navigates to Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_launches_the_application()"
});
formatter.result({
  "duration": 2456255300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AAA",
      "offset": 23
    }
  ],
  "location": "StepDefinition.user_enters_the_valid_in_the_username_field(String)"
});
formatter.result({
  "duration": 499344000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "111",
      "offset": 23
    }
  ],
  "location": "StepDefinition.user_enters_the_valid_in_the_password_field(String)"
});
formatter.result({
  "duration": 325068400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 577038400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_verifies_whether_HomePage_navigates_to_Search_Hotel_Page()"
});
formatter.result({
  "duration": 60900,
  "status": "passed"
});
formatter.after({
  "duration": 323800,
  "status": "passed"
});
formatter.before({
  "duration": 137500,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify the user is able to login the application",
  "description": "",
  "id": "booking-functionality-of-adactin-application;verify-the-user-is-able-to-login-the-application;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User launches the application",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User enters the valid \"BBB\" in the username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User enters the valid \"222\" in the password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User verifies whether HomePage navigates to Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_launches_the_application()"
});
formatter.result({
  "duration": 254736200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BBB",
      "offset": 23
    }
  ],
  "location": "StepDefinition.user_enters_the_valid_in_the_username_field(String)"
});
formatter.result({
  "duration": 176931300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "222",
      "offset": 23
    }
  ],
  "location": "StepDefinition.user_enters_the_valid_in_the_password_field(String)"
});
formatter.result({
  "duration": 244149800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 388736500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_verifies_whether_HomePage_navigates_to_Search_Hotel_Page()"
});
formatter.result({
  "duration": 38600,
  "status": "passed"
});
formatter.after({
  "duration": 153900,
  "status": "passed"
});
formatter.before({
  "duration": 127900,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify the user is able to login the application",
  "description": "",
  "id": "booking-functionality-of-adactin-application;verify-the-user-is-able-to-login-the-application;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User launches the application",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User enters the valid \"SreeDeviRaman\" in the username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User enters the valid \"Z1UBM4\" in the password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User verifies whether HomePage navigates to Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_launches_the_application()"
});
formatter.result({
  "duration": 239802200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SreeDeviRaman",
      "offset": 23
    }
  ],
  "location": "StepDefinition.user_enters_the_valid_in_the_username_field(String)"
});
formatter.result({
  "duration": 305669300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Z1UBM4",
      "offset": 23
    }
  ],
  "location": "StepDefinition.user_enters_the_valid_in_the_password_field(String)"
});
formatter.result({
  "duration": 208768200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 1756559400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_verifies_whether_HomePage_navigates_to_Search_Hotel_Page()"
});
formatter.result({
  "duration": 37400,
  "status": "passed"
});
formatter.after({
  "duration": 177700,
  "status": "passed"
});
formatter.before({
  "duration": 100600,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify user is in SearchHotel page",
  "description": "",
  "id": "booking-functionality-of-adactin-application;verify-user-is-in-searchhotel-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "User selects the location \"Sydney\" as \"value\" in the Select location field",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "User selects the Hotel \"Hotel Creek\" as \"visibletext\" in Select Hotel field",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User selects the room type in Select Room type field",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User selects the number of rooms",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User selects the check in date",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User selects the check out date",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User selects the adults per Room",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User selects the children per Room",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User clicks on search button to search for the details",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User verify the Search Hotel Page navigates to Select hotel page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Sydney",
      "offset": 27
    },
    {
      "val": "value",
      "offset": 39
    }
  ],
  "location": "StepDefinition.user_selects_the_location_as_in_the_Select_location_field(String,String)"
});
formatter.result({
  "duration": 311547700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hotel Creek",
      "offset": 24
    },
    {
      "val": "visibletext",
      "offset": 41
    }
  ],
  "location": "StepDefinition.user_selects_the_Hotel_as_in_Select_Hotel_field(String,String)"
});
formatter.result({
  "duration": 293122300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_selects_the_room_type_in_Select_Room_type_field()"
});
formatter.result({
  "duration": 193547900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_selects_the_number_of_rooms()"
});
formatter.result({
  "duration": 121147800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_selects_the_check_in_date()"
});
formatter.result({
  "duration": 172320300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_selects_the_check_out_date()"
});
formatter.result({
  "duration": 193436900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_selects_the_adults_per_Room()"
});
formatter.result({
  "duration": 299023600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_selects_the_children_per_Room()"
});
formatter.result({
  "duration": 298703300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_search_button_to_search_for_the_details()"
});
formatter.result({
  "duration": 877465100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_verify_the_Search_Hotel_Page_navigates_to_Select_hotel_page()"
});
formatter.result({
  "duration": 44700,
  "status": "passed"
});
formatter.after({
  "duration": 119000,
  "status": "passed"
});
formatter.before({
  "duration": 144100,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Verify user is in Select Hotel page",
  "description": "",
  "id": "booking-functionality-of-adactin-application;verify-user-is-in-select-hotel-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 35,
  "name": "User clicks on the selected radion button",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "User clicks on the continue button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User verify the Select Hotel page navigates to Book a Hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_the_selected_radion_button()"
});
formatter.result({
  "duration": 249787700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_the_continue_button()"
});
formatter.result({
  "duration": 673983400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_verify_the_Select_Hotel_page_navigates_to_Book_a_Hotel_page()"
});
formatter.result({
  "duration": 79900,
  "status": "passed"
});
formatter.after({
  "duration": 102200,
  "status": "passed"
});
formatter.before({
  "duration": 116600,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Verify user is in Book a Hotel page",
  "description": "",
  "id": "booking-functionality-of-adactin-application;verify-user-is-in-book-a-hotel-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 40,
  "name": "User enters the  first name in FirstName field",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "User enters the  last name in LastName field",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "User enters the  billing Address in Billing Address field",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "User enters the  Credit Card Number in Credit Card Number field",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "User enters the  credit card type in Credit Card Type field",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "User enters expiry month in Expiry Month field",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "User enters expiry year in Expiry Year field",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "User enters the cvv number in CVV field",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "User clicks on the BookNow Button",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "User verify the Book a Hotel navigates to Booking Confirmation page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_enters_the_first_name_in_FirstName_field()"
});
formatter.result({
  "duration": 287338600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enters_the_last_name_in_LastName_field()"
});
formatter.result({
  "duration": 266209400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enters_the_billing_Address_in_Billing_Address_field()"
});
formatter.result({
  "duration": 317362200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enters_the_Credit_Card_Number_in_Credit_Card_Number_field()"
});
formatter.result({
  "duration": 306452000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enters_the_credit_card_type_in_Credit_Card_Type_field()"
});
formatter.result({
  "duration": 237392000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enters_expiry_month_in_Expiry_Month_field()"
});
formatter.result({
  "duration": 177659300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enters_expiry_year_in_Expiry_Year_field()"
});
formatter.result({
  "duration": 307300300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enters_the_cvv_number_in_CVV_field()"
});
formatter.result({
  "duration": 211110200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_the_BookNow_Button()"
});
formatter.result({
  "duration": 253049100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_verify_the_Book_a_Hotel_navigates_to_Booking_Confirmation_page()"
});
formatter.result({
  "duration": 56500,
  "status": "passed"
});
formatter.after({
  "duration": 163400,
  "status": "passed"
});
formatter.before({
  "duration": 152300,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Verify user is in Booking ConfirmationPage",
  "description": "",
  "id": "booking-functionality-of-adactin-application;verify-user-is-in-booking-confirmationpage",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 50,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 52,
  "name": "user clicks on book itinerary button",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "User clicks on log out button to exit the page",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "User verify Book Itinerary page navigates to successfully logged out page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_book_itinerary_button()"
});
formatter.result({
  "duration": 1272975700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_log_out_button_to_exit_the_page()"
});
formatter.result({
  "duration": 659115700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_verify_Book_Itinerary_page_navigates_to_successfully_logged_out_page()"
});
formatter.result({
  "duration": 57100,
  "status": "passed"
});
formatter.after({
  "duration": 131800,
  "status": "passed"
});
});