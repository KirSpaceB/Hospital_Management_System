using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class HelloWorldController : ControllerBase
  {
    [HttpGet]
    public IActionResult Get()
    {
      return Ok(new {Message = "Hello World!"});
    }
  }
}