//api controller for returning get message of "Hello world", routed to the root 

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication1.Controllers
{
    [Route("/")]
    [ApiController]
    public class HelloController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public ActionResult<string> Get()
        {
            return "Hello World!";
        }

        
        [HttpPost]
        public ActionResult<string> GetPost()
        {
            return "Hello World!";
        }
    }
}
