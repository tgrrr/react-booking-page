Feature: Booking

    # -----------------------------------------------------------------------------
    # Main test:
    # -----------------------------------------------------------------------------

    # - [ ] Using the API, which returns booking data
    
    @focus @e2e
    Scenario: Booking
        Given I visit the homepage
        When I search for a Booking
        Then It generates a fixture file stubbed API

    # -----------------------------------------------------------------------------
    # Sub tests:
    # -----------------------------------------------------------------------------

    # - [ ] renders the bookings
    # - [ ] grouped by seller
    # - [ ] as human friendly tables

