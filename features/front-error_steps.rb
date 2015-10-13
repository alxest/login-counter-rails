
When(/^I fill up password with "(.*?)"$/) do |pwd|
  fill_in('password_input', :with => pwd)
end

Then(/^I see error meessage "(.*?)"$/) do |msg|
  assert page.has_content?(msg)
end
