defmodule Generator.EmailJob do
  def generate(tenant_id, plan) do
    %{
      "id" => Generator.gen_job_id(),
      "tenant_id" => tenant_id,
      "plan" => plan,
      "type" => "email",
      "message" => %{
        "body" => Faker.StarWars.quote(),
        "to" => Faker.Internet.email()
      },
      "settings" => %{
        "api_key" => Generator.gen_token()
      },
      "timestamp" => Generator.gen_timestamp()
    }
  end
end
