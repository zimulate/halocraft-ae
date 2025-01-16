import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      name: "Corporate and Promoantinal Gift Supplier",
      path: "/services/service1",
    },
    { id: 2, name: "Personalized Branding", path: "/services/service2" },
    { id: 3, name: "Customized Gift Box Assembly", path: "/services/service3" },
    { id: 4, name: "Uniforms", path: "/services/service4" },
    { id: 5, name: "Eco-frieldy Gifting", path: "/services/service5" },
    { id: 6, name: "Vechicle Branding", path: "/services/service6" },
    { id: 7, name: "Signage", path: "/services/service7" },
    {
      id: 8,
      name: "Offset Prinitng and Digital Printing",
      path: "/services/service8",
    },
  ];

  return (
    <div>
      <h1>Our Services</h1>
      <div className="grid grid-cols-3 gap-4">
        {services.map((service) => (
          <Link
            key={service.id}
            href={service.path}
            className="border p-4 hover:bg-gray-100"
          >
            {service.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
