/**
 * Where to send the `ContactMessage` submitted by a visitor
 */
export const CONTACT_ME_ENDPOINT = "invalid URL for the moment";

/**
 * When a visitor sends a message
 */
export interface ContactMessage {
  /**
   * Sender email
   */
  sender: string;
  subject: string;
  /**
   * TODO: Split in string[]?
   */
  body: string;
}
