<!-- You have some code in your script.js file that only relates to a single page (such as sign up/sign in). Consider splitting this into its own .js file that can be used on those pages html files. If you do this, there's less of a need to check if elements exist on the page, which will reduce some of the if checks you need to make. -->

<!-- A form is meant to be a single container for a collection of inputs rather than multiple tiny forms.

A form is usually used when you want to send the input values to a server, in your case, you could build the whole page without a form element and then use your event listener on the submit button to process the form data -->

    Plan Your Meals Page
    (Code organization) Your page is split into sections, and it would be great to organize your code to match them!

(Design) Your day selection could be a date input OR a select dropdown with days of the week as options

I got locked into an error state after my name was empty, I can't see in the code how you could ever not be locked!

I can be easier to set your nameAndDate to false at the beginning and then check that both values are what you need to get the full validation of that section. Starting with true can make it difficult to write the checks you need!

When I click Add another, I lose track of what I already added. Maybe it could be displayed on the page somewhere what the meal currently has?

Another option is to add a new row with a select when you press Add another, this adds some complexity though and would be an advanced thing to try later!

(Design) When I click Add another on the Drink or Grain options, it doesn't clear the current selection. I accidentally had 6 coffees with my eggs:stuck_out_tongue:

(Design) The title Breakfast is not updated when you move to lunch or supper, that confused me for a minute until I saw the button at the bottom

(State) When I add a new ingredient, if I open the new ingredient popup again the old data is still in there

(Validation) It is possible to add multiple ingredients that are identical
