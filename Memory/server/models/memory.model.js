const db=require("../utils/databse")
class MemoryModel{

  async AddMemory(data) {
    let { id, text } = data;
    const searchQuery = "select text from users where id = ?";
    const [Memory] = await db.connection.execute(searchQuery, [id]);
    if (user.length === 0) {
      throw new Error("user not found")
    }
    const isPasswordValid = await bcrypt.compareSync(password, user[0].password);
    if (isPasswordValid) {
      const token = jwt.sign({ username }, secret , { expiresIn: "1h" });
      return token;
    } else {
      throw new Error("Invalid credentials")

    }
}}