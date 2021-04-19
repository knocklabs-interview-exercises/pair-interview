defmodule Generator.SmsJob do
  def generate(tenant_id, plan) do
    %{
      "id" => Generator.gen_job_id(),
      "tenant_id" => tenant_id,
      "plan" => plan,
      "type" => "sms",
      "message" => %{
        "body" => Faker.Pizza.pizza(),
        "to" => Faker.Phone.EnUs.phone()
      },
      "settings" => %{
        "api_key" => Generator.gen_token()
      },
      "timestamp" => Generator.gen_timestamp()
    }
  end
end
