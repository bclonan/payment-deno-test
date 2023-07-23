// server.ts

import { Application } from "https://deno.land/x/oak/mod.ts";
import { PaymentService } from "./transport/paymentService.ts"; // Adjusted the path

const app = new Application();

app.use(PaymentService.routes());
app.use(PaymentService.allowedMethods());

console.log("Server running on http://localhost:8000");
await app.listen({ port: 8000 });
