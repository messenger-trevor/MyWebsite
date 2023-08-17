import SES from 'aws-sdk'

const ses = new SES()

export async function handler(event) {
  for (const streamedItem of event.Records) {
    if (streamedItem.eventName === 'INSERT') {
      //pull off items from stream
      const contactName = streamedItem.dynamodb.NewImage.name.S
      const contactEmail = streamedItem.dynamodb.NewImage.email.S
      const contactMessage = streamedItem.dynamodb.NewImage.message.S

      await ses
          .sendEmail({
            Destination: {
              ToAddresses: [process.env.SES_EMAIL],
            },
            Source: process.env.SES_EMAIL,
            Message: {
              Subject: { Data: 'Email Submission' },
              Body: {
                Text: { Data: ` ${contactName} saw the site. Their email is ${contactEmail}. Here's the message ${contactMessage}` },
              },
            },
          })
          .promise()
    }
  }
  return { status: 'done' }
}

