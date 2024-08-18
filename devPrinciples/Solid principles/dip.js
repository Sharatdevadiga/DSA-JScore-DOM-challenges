/**
 * DEPENDENCY INVERSION PRINCIPLE:
 * High level modules should not be dependent directly on the low-level modules
 * but both shoud depend on abstractions. Additionally, these abstractions should
 * not depend on details; rather , details should depend on abstractions
 */

// BAD WAY
class EmailClient {
  constructor() {
    const smtpServer = new SmtpServer();
    smtpServer.connect();
    // send email logic...
  }
}

class SmtpServer {
  connect() {
    // connect to smtp server
  }
}

// Good -> both high and low lwvel modules depend on the abstractions.
class IEmailServer {
  connsect() {
    // connect logic
  }
}

class SmtpServer extends IEmailServer {
  connect() {
    // connect to SMTP server
  }
}

class EmailClient {
  constructor(emailServer) {
    this.emailServer = emailServer;
  }

  sendEmail() {
    this.emailServer.connect();
    // send email logic
  }
}
const smtpServer = new SmtpServer();
const emailClient = new EmailClient(smtpServer);
emailClient.sendEmail();
