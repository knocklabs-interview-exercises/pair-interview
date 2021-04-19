const data = [
  {
    id: 1,
    name: "Email",
    type: "channel",
    settings: {
      provider_type: "email",
      provider_id: "sendgrid",
      provider_name: "Sendgrid",
    },
  },
  {
    id: 2,
    name: "Delay",
    type: "delay",
    settings: {
      delay_for: { unit: "seconds", value: 30 },
    },
  },
  {
    id: 3,
    name: "In-app",
    type: "channel",
    settings: {
      provider_type: "in_app_feed",
      provider_id: "knock_feed",
      provider_name: "In-app feed",
    },
  },
];

export default data;
