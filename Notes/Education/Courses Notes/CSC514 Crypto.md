---
tags:
  - Courses
  - CSC514
  - Crypto
---
# CSC514
## Note on Perfect Secrecy

**Definition:**

An encryption scheme $\((\text{Gen}, \text{Enc}, \text{Dec})\)$ with message space \(\mathcal{M}\) and ciphertext space \(\mathcal{C}\) is said to be *perfectly secure* if, for every probability distribution over messages \(M\), for all messages \(m \in \mathcal{M}\), and for all ciphertexts \(c \in \mathcal{C}\), the following condition holds:

$$
\Pr[M = m \mid C = c] = \Pr[M = m].
$$

This means that knowing the ciphertext \(c\) does not change the probability of any message \(m\) being the actual plaintext; the ciphertext provides no information about the plaintext.

---

**Key Properties:**

- **Independence:** The ciphertext and the plaintext are statistically independent.
- **Uniform Key Distribution:** The key must be chosen uniformly at random from the key space.
- **Key Size:** The size of the key space must be at least as large as the size of the message space.

---

**Shannon's Theorem:**

Claude Shannon proved that perfect secrecy is only achievable when the key is at least as long as the message and used only once. This is formalized in Shannon's theorem, which states that if an encryption scheme provides perfect secrecy, then the entropy of the key must be greater than or equal to the entropy of the message:

$$
H(K) \geq H(M).
$$

---

**One-Time Pad Example:**

The One-Time Pad (OTP) is a classic example of a perfectly secure encryption scheme.

- **Key Generation (\(\text{Gen}\)):** Generate a random key \(k\) where each bit is chosen independently and uniformly at random.
- **Encryption (\(\text{Enc}\)):** Compute the ciphertext \(c\) by performing bitwise exclusive OR (XOR) between the message \(m\) and the key \(k\):

  $$
  c = m \oplus k.
  $$

- **Decryption (\(\text{Dec}\)):** Recover the plaintext by performing bitwise XOR between the ciphertext \(c\) and the key \(k\):

  $$
  m = c \oplus k.
  $$

---

**Limitations:**

- **Key Distribution:** Securely distributing a key that is as long as the message is impractical for most applications.
- **Key Management:** Keys must be truly random and used only once. Reusing keys can compromise security.
- **Storage Overhead:** Storing long keys securely adds to the complexity.

---

**Conclusion:**

Perfect secrecy is an ideal cryptographic goal that ensures absolute confidentiality of messages. However, due to practical limitations like key distribution and management, it is not commonly used in real-world applications. Modern cryptography often relies on computational security, where encryption schemes are secure under certain computational hardness assumptions.

---

**References:**

- C. E. Shannon, "Communication Theory of Secrecy Systems," *Bell System Technical Journal*, vol. 28, no. 4, pp. 656–715, 1949.
- J. Katz and Y. Lindell, *Introduction to Modern Cryptography*, 3rd ed., CRC Press, 2020.