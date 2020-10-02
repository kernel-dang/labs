using CustomContractResolver.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CustomContractResolverModel.Controllers
{
    public class DefaultController : ApiController
    {
        public IHttpActionResult Index(Parent parent)
        {
            Console.WriteLine(parent.Name);
            Console.WriteLine(parent.Child.Value);
            Console.WriteLine(parent.Child.Source);
            Console.WriteLine(parent.Child.ModifyDate);
            Console.WriteLine(parent.Child.Modifier);
            return Ok();
        }
    }
}
