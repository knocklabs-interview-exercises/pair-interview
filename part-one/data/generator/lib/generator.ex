defmodule Generator do
  @tenants [
    {"tenant_1", "free"},
    {"tenant_2", "paid"},
    {"tenant_3", "free"},
    {"tenant_4", "paid"},
    {"tenant_5", "free"}
  ]

  @generate 1000

  def generate do
    jobs =
      0..@generate
      |> Enum.flat_map(fn _ ->
        job = [Generator.EmailJob, Generator.SmsJob] |> Enum.random()
        {tenant, plan} = Enum.random(@tenants)
        job = job.generate(tenant, plan)

        if add_random_job?(), do: [job], else: [job, job]
      end)
      |> Enum.shuffle()

    File.write!(
      "../jobs.json",
      Jason.encode!(%{"jobs" => jobs})
    )
  end

  def gen_job_id do
    "job_#{gen_token(8)}"
  end

  def gen_token(len \\ 32) do
    :crypto.strong_rand_bytes(len)
    |> Base.url_encode64(padding: false)
  end

  def gen_timestamp do
    random_amount = Faker.random_between(-20_000, 20_000)

    DateTime.utc_now()
    |> DateTime.add(random_amount)
    |> DateTime.to_unix()
  end

  defp add_random_job? do
    :rand.uniform(10)
    |> rem(9)
    |> Kernel.==(0)
  end
end
